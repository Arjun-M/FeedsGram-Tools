const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    token : String ,
    bot : Number, 
    owner : Number,        
    start : String,
    other :String,
    reply: String,
    banned : [Number],
    users : [Number],
    groups : [Number],
    blocked : Number, 
    username : String,
    incoming : Number,        
    outgoing : Number    
})

const DB = mongoose.model('connected', schema);


module.exports = DB
