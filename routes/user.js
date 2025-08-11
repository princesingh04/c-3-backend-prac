const express = require("express");
const userRouter = express.Router();

userRouter.post('/signup', function(req, res) {
    res.json({
        message: "Signup endpoint added"
    });
});
userRouter.post('/signin', function(req, res) {
    res.json({
        message: "Signin endpoint added"
    });
});
userRouter.get('/purchases', function(req, res) {
    res.json({
        message: "Purchases endpoint added"
    });
});

module.exports = {
    userRouter: userRouter
};