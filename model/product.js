const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"category1"
    },
    thumbnail:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("product01",productSchema)
