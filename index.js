const express = require("express");
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const app = express();

app.use(express.json());

app.use("/api/v1/course",courseRouter);
app.use("/api/v1/user",userRouter);
app.listen(3000);