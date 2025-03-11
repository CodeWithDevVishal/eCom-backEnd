const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")

const product = require("./route/productRoute")
const user = require("./route/userRoute")
const category = require("./route/categoryRoute")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hii")
})

app.use("/api/product",product)
app.use("/api/user",user )
app.use("/api/category",category)

app.listen(process.env.PORT,()=>{console.log("running....🏃‍♂️‍➡️");
})

async function db() {
    try {
        const con = await mongoose.connect(process.env.DB)
        console.log(con.default.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
        
    }
}db()
