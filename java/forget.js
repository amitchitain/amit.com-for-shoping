const express = require('express');
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017")

const forget = (()=>{
    console.log('hello world');
})
module.exports = forget