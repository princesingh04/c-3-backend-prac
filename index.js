const express = require("express");
const {userRouter} = require("./routes/userRouter");
const app = express();

app.use(express().json());


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