const express = require("express");
const courseRouter = express.Router();
const { z } = require("zod");
courseRouter.post("/purchase",function(req,res){
    res.json({
        message:"course purchase endpoint"
    })
})
courseRouter.get("/preview",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

module.exports={
    courseRouter:courseRouter
}