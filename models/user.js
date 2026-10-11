const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ecommerseusers');

const userdata = mongoose.Schema({

    name:String , 
    phone:Number,
    email:String
}
)

module.exports = mongoose.model("user" , userdata);
