const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({

    fullname:{
        type : String ,
        minLength : 3  ,
        trim : true
    } , 
    email:Number,
    password:String , 
    products:{ 
        type : Array , 
        default : []
        } , 
        contact:Number , 
        picture : String , 
        gstin : Number
    }
)

module.exports = mongoose.model("owner" , userSchema);
