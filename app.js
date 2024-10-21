//Node core modules
const path = require("path");

// Third party / External packages
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// Internal modules dependencies
const {
  defaultErrorHandler,
  notFoundHandler,
} = require("./middlewares/common/errorHandler");

const loginRouter = require("./router/loginRouter");
const userRouter = require("./router/userRouter");
const inboxRouter = require("./router/inboxRouter");

// Creating the app
const app = express();

// Colling the DotEnv config for accesing the process.env
dotenv.config();

// Database Connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connection Successfull!");
  })
  .catch((error) => {
    error;
  });

// Request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set a View Engine
app.set("view engine", "ejs");

// set a static folder
app.use(express.static(path.join(__dirname, "public")));

// Parse Cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);

// 404 Not Found Handler
app.use(notFoundHandler);

// Default Error Handler
app.use(defaultErrorHandler);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`App Listining to Port ${process.env.PORT}`);
});
