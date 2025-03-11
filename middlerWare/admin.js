const jwt = require("jsonwebtoken")

const isAdmin = async (req,res,next) => {
    try {
        const token = await req.header("auth-token")
        const verifyToken = jwt.verify(token,process.env.SEC)
        if(!token) return res.status(500).json({errors:true,message:error.message})
        if(req.header("admin") !== "admin") return res.status(500).json({errors:true,message:"you must be admin"})
        next()
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

module.exports = isAdmin