"use strict"
var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const session = require("express-session");
app.use(session({secret:"secret" ,saveUninitialized:true, resave:true}));
var sess;

let ejs = require("ejs");
const router = express.Router();
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

router.get("/", function(req,res){
    sess= req.session;
    res.render("index", {pagename:"Home", sess:sess});
})
router.get("/about", function(req,res){
    sess= req.session;
    res.render("about", {pagename:"About", sess:sess});
})
router.get("/contact", function(req,res){
    sess= req.session;
    res.render("contact", {pagename:"Contact", sess:sess});
})

router.get("/profile", function(req,res){
    sess= req.session;
    if(typeof(sess) == "undefined" || sess.loggedin != true){
        var errors = ["Not an authenticated user"];
        res.render("index", {pagename:"Home", errors:errors})
    }else{
        res.render("profile", {pagename:"Profile", sess:sess})
    }
})
router.get("/logout", function(req,res){
    sess = req.session;
    sess.destroy(function(err){
        res.redirect("/");
    })
})

router.post("/register", function(req,res){
    var errors=[];
    //first and last name
    if(req.body.firstname == ""){
        errors.push("First name required!")
    }
    if(req.body.lastname == ""){
        errors.push("Last name required!")
    }
    if(!/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(req.body.firstname && req.body.lastname)){
        errors.push('Full name is invalid!')
    }
    //address
    if(req.body.address == ""){
        errors.push("Address is required!")
    }
    if(!/^[#.0-9a-zA-Z\s,-]+$/.test(req.body.address)){
        errors.push('Address is invalid!')
    }
    //city 
    if(req.body.city == ""){
        errors.push("City is required!")
    }
    if(!/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(req.body.city)){
        errors.push('City is invalid!')
    }
    //state
    if(req.body.state == ""){
        errors.push("State is required!")
    }
    if(!/[A-Z]{2}/.test(req.body.state)){
        errors.push('State is invalid!')
    }
    //zip
    if(req.body.zip == ""){
        errors.push("Zip is required!")
    }
    if(!/^[0-9]{5}(?:-[0-9]{4})?$/.test(req.body.zip)){
        errors.push('Zip is invalid!')
    }
    //age
    if(req.body.age == "select"){
        errors.push("Age range is required!")
    }
    //gender
    //set gender to boolean (selected=true : empty=false)
    let genderCheck =  Boolean(req.body.gender);
    if(genderCheck == false){
        errors.push("Gender is required!")
    }
    //consent
    //set consent to boolean (selected=true : empty=false)
    let consentCheck = Boolean(req.body.consent);
    if(consentCheck == false){
        errors.push("Consent is required!")
    }
    //bio
    if(req.body.bio == ""){
        errors.push("Bio is required!")
    }
    if(!/^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/.test(req.body.bio)){
        errors.push('Bio is invalid!')
    }
    res.render("index", {pagename:"Home", errors:errors});
})
router.post("/login", function(req,res){
    var errors=[];
    if(req.body.email == ""){
        errors.push("Email is required!")
    }
    if(req.body.password == ""){
        errors.push("Password is required!")
    }
    if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(req.body.email)){
        errors.push("Email is invalid!");
    }
    if(!/^[a-zA-Z]\w{3,14}$/.test(req.body.password)){
        errors.push("Password is invalid!");
    }
    if(req.body.email == "Mike@aol.com" && req.body.password == 'abc123'){
        sess=req.session;
        sess.loggedin = true;
        res.render("profile", {pagename:"Profile", sess:sess});
    }else{
        errors.push("Not a registered user");
        sess=req.session;
        sess.loggedin = false;
        res.render("index", {pagename:"Home", errors:errors});
    }
})
app.use('/public', express.static("public"));
app.use('/', router);
var server = app.listen('8080');