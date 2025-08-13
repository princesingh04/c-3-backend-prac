const { Router } = require("express");
const { adminModel } = require("../db");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "123auifasdffsdffhd"
const bcrypt = require("bcrypt");
const adminRouter = Router();
const signupSchema = z.object({
    email: z.string().email(),
    password:z.string().min(6),
    firstName: z.string(),
    lastName: z.string()
})
adminRouter.post("/signup", async function(req, res) {
      const parseResult = signupSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error.errors });
    }
    const { email, password, firstName, lastName } = parseResult.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    await adminModel.create({
        email: email,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName,
    })
    res.json({
        message: "Signup succedded"
    });
});
adminRouter.post("/signin", async function(req, res) {
   const { email, password } = req.body;
    const admin = await adminModel.findOne({
        email: email,
    })
    if (admin && await bcrypt.compare(password,admin.password)){
        const token = jwt.sign({
            id:admin._id
        },JWT_ADMIN_PASSWORD);
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
adminRouter.post("/course", function(req, res) {
    res.json({
        message: "Admin signed in"
    });
});
adminRouter.put("/course", function(req, res) {
    res.json({
        message: "Admin signed in"
    });
});
adminRouter.get("/course/bulk", function(req, res) {
    res.json({
        message: "Admin signed in"
    });
});


module.exports = {
    adminRouter: adminRouter
};