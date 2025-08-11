const express = require("express");
const {Router} = require("express")
const userRouter = Router();

 
userRouter.post('/signup', function(req, res) {
    res.json({
            message: "Signup endpoint added"
    })
})
userRouter.post('/signin', function(req, res) {
    res.json({
            message: "Signup endpoint added"
    })
})
userRouter.get('/purchases', function(req, res) {
    res.json({
            message: "Signup endpoint added"
    })
})

module.exports={
  userRouter:userRouter
}