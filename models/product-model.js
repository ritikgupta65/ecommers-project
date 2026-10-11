const mongoose = reqire('mongoose')


productSchema = mongoose.Schema({

    Productname :String ,
    image : String,
    price : Number ,
    discount : Number , 
    bgcolor : String , 
    panelcolor : String ,
    textcolor : String
})

module.exports = mongoose.model("rpoduct" , productSchema);
