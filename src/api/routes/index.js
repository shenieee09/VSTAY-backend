const Router = require("express").Router();

const authRoute = require("./auth.route");
const postRoute = require("./post.route");
const userRoute = require("./user.route");

Router.use("/v1/auth", authRoute);
Router.use("/v1/api/post", postRoute);
Router.use("/v1/api/user", userRoute);

module.exports = Router;
