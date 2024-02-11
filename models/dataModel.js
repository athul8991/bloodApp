const mongoose =require('mongoose');

const bloodDataSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    dist:{
        type:String,
        required:true
    },
    block:{
        type:String,
        required:true
    },
    createdate:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    volunteer:{
        type:String,
        required:true
    }
});


module.exports = new mongoose.model('BloodData',bloodDataSchema);