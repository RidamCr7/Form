require('dotenv').config(); //environment variables
const express = require("express");
const app = express(); //creating an express app
const ejs = require("ejs")

const mongoose = require("mongoose");

require('https').globalAgent.options.rejectUnauthorized = false;


app.use(express.static("public")); // setting location of static files like css

app.use(express.urlencoded({extended : true}));

app.set('view engine', 'ejs'); // setting ejs as the devault viewing engine


// mongodb atlas connection string
// mongodb atlas is mongodb remote database
mongoose.connect("mongodb+srv://Ridam:nuxyTXqlwVCqEBG2@cluster0.p0ltv.mongodb.net/form");


const courseSchema = new mongoose.Schema({
    courseCode : {
        type:String,
        unique:true
    },
    courseName : String
});

const Course = mongoose.model("course", courseSchema);

app.get("/", function(req,res){

    res.render("index");
})

app.post("/submit", function(req,res){
    const form_body = req.body;
    // console.log(form_body);

    const myCourse = {
        c_code : form_body.name1,
        c_name : form_body.name2
    }
    console.log(myCourse);
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Server listening on port 3000");
})