const jwt = require("jsonwebtoken")

const isAdmin = async (req,res,next) => {
    try {
        const token = await req.header("auth-token")
        const user = await jwt.decode(token)
        if (user.role != "admin") return res.status(500).json({errors:true,message:"not authorized"})
        console.log(user);
        next();
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

module.exports = isAdmin