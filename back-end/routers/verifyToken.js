const jwt = require('jsonwebtoken')

 const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token
    console.log(authHeader);
    if(authHeader){
        const token= authHeader.split(" ")[1]
        console.log(token);
        jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
            if(err) {
             res.status(403).json({message: "Token is invalid"})
            } 
            req.user= user
            next()
        })
    }
     res.status(401).json({message: 'You are not Authenticated!!!'})
}

const verifyTokenAndAuth = (req,res,next)=>{ 
    verifyToken(req,res,()=>{
        console.log(req.user.isAdmin)
        if(req.user.id===req.params.id|| req.user.isAdmin){
            next()
        }
         res.status(403).json({message:'You are not alowed to do that'})
    })
}


module.exports= {verifyToken,verifyTokenAndAuth}