const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/signuplogin")

.then(()=>{
    console.log("mongodb connected")
})

.catch(()=>{
    console.log("error to connect")
})

const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required : true
    },
    number:{
        type:String,
        required : true
    },
    date:{
        type:String,
        required : true
    },
    mail:{
        type:String,
        required : true
    },  
    gender:{
        type : String,
        required : true
    }
})

const collection = new mongoose.model("collection1",LoginSchema)

module.exports = collection