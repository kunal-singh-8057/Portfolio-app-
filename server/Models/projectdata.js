const mongoose = require("mongoose");

const userscherma = mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },

    glink:{
        type:String,
        required:true
    },

    wlink:{
        type:String,
        required:true
    },

    ilink:{
        type:String,
        required:true
    },
})

const projectdata = mongoose.model("projectdata",userscherma);
module.exports = projectdata;

