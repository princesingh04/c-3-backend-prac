const { Router } = require("express");
const { adminModel } = require("../db");
const adminRouter = Router();

adminRouter.post("/signup", function(req, res) {
    res.json({
        message: "Admin signed up"
    });
});
adminRouter.post("/signin", function(req, res) {
    res.json({
        message: "Admin signed in"
    });
});

module.exports = {
    adminRouter: adminRouter
};