//for express
const express = require('express');
const app = express();
//for path
const path = require('path');
//for port
const port = 80;
//for hbs
const hbs = require('hbs');
//for mongodb file
const collection = require("./mongodb");
// const coll = require("./forget");

const { request } = require('http');
//for css or css folder
app.use('/public', express.static('../public'));
//for hbs folder to join with node server
const templatePath = path.join(__dirname, '../mainhbs');

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath)
app.use(express.urlencoded({ extended: false }))

//for get request on / for login page
app.get("/", (req, res) => {
    res.render("../mainhbs/login.hbs")
})
//for get request on signup page
app.get("/signup", (req, res) => {
    res.render("../mainhbs/signup")
})
app.get("/product", (req, res) => {
    res.render("../mainhbs/product.hbs")
})
app.get("/home", (req, res) => {
    res.render("../mainhbs/home.hbs")
})
//for get request on forget page
app.get("/forget", (req, res) => {
    res.render("../mainhbs/forget")
})
//for post request on /signup page to collecet the data
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password,
        number: req.body.number,
        date: req.body.date,
        mail: req.body.mail,
        gender: req.body.gender,
    }
    //for await function
    await collection.insertMany([data])
    res.render("login")
})
//for post request to check username or password is correct or not
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({
            name: req.body.name
        })
        if (check.password === req.body.password) {
            res.render("home")
        }
        else {
            res.send('wrong password')
        }

    }
    catch {
        res.send(alert="wrong username or password")
    }
})

//for listen on server
app.listen(port, () => {
    console.log(`https://localhost`+port);
});