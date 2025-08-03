const express = require("express");
const app = express();

app.use(express().json());

app.post('/user/signup',fuction(req,res){
    res.json({
            message: "Signup endpoint added"
    })
})
app.post('/user/signin',fuction(req,res){
    res.json({
            message: "Signup endpoint added"
    })
})
app.get('/user/purchases',fuction(req,res){
    res.json({
            message: "Signup endpoint added"
    })
})
app.get('/courses',fuction(req,res){
    res.json({
            message: "get all courses"
    })
})
app.post('/course/purchase',fuction(req,res){
    res.json({
            message: "course you have purchased"
    })
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})