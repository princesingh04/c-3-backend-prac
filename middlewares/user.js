const {JWT_USER_PASSWORD} = require("../config");
const JWT = require("jsonwebtoken");



function userMiddleware(req,res,next){
const token = req.headers.token;
const decoded = jwt.verify(token,JWT_USER_PASSWORD);
if(decoded){
    req.userID = decoded.id;
    next();
}
else {
    res.status(403).json({
        message:"You are not signed in "
    })
}
}

module.exports= {
    userMiddleware:userMiddleware
}