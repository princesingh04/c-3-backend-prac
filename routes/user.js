const express = require("express");
const { userModel } = require("../db");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");
const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string(),
    lastName: z.string()
})
userRouter.post('/signup', async function (req, res) {
    const parseResult = signupSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error.errors });
    }
    const { email, password, firstName, lastName } = parseResult.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
        email: email,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName,
    })
    res.json({
        message: "Signup succedded"
    });
});
userRouter.post('/signin', async function (req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({
        email: email,
    })
    if (user && await bcrypt.compare(password,user.password)){
        const token = jwt.sign({
            id:user._id
        },JWT_USER_PASSWORD);
        res.json({

            token:token
        })

    }
    else {
        res.status(403).json({
            message:"Incorrect Crediential "
        })
    }
});
userRouter.get('/purchases', function (req, res) {
    res.json({
        message: "Purchases endpoint added"
    });
});

module.exports = {
    userRouter: userRouter
};