const express = require("express");
const app = express();
const ejs = require("ejs")
app.set("view engine", "ejs")
let URI = "mongodb+srv://abassdb:Kolawole10@firstcluster.situuzh.mongodb.net/Node-class?retryWrites=true&w=majority"
const mongoose = require("mongoose")
mongoose.connect(URI).then(() => {
    console.log('database connected');
}).catch((err) => {
    console.log(err, 'database not connected');
});
let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String
})
let user = new mongoose.model("user", userSchema)
app.use(express.urlencoded({extended: true}))
app.get("/contact", (request, response) => {
    response.send("Welcome to contact");
});
app.get("/", function (req, res) {
    // res.send("rice is availabe oooo ")
    // res.sendFile(__dirname + '/index.html')
    res.render('index', {name: 'Abass', Gender: 'Female'});

    // console.log(__dirname);
});
app.get("/signup", (req, res)=>{
    res.render("signup")
})
app.get('/dashboard', async (req, res)=>{
    const result = await user.find()
    console.log(result);
    res.render('dashboard', {result})
})
app.post("/signup", (req, res)=>{
    let newUser = new user(req.body)
    newUser.save()
    console.log(req.body);
    // res.redirect('/Welcome')
    res.redirect('/dashboard')
})
app.get
app.listen(5000, (err) => {
    if (err) {
        console.log("The server did not start");
    }
    else {
        console.log("server don star");
    }
});

//GET REQUEST
//POST REQUEST