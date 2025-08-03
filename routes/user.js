const express = require("express");
const Router = express.Router();
const userRouter = Router();

 
userRouter.post('ser/signup',fuction(req,res){
    res.json({
            message: "Signup endpoint added"
    })
})
userRouter.post('/signin',fuction(req,res){
    res.json({
            message: "Signup endpoint added"
    })
})
userRouter.get('/purchases',fuction(req,res){
    res.json({
            message: "Signup endpoint added"
    })
})

module.exports={
  userRouter:userRouter
}