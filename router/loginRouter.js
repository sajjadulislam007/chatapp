// External Imports
const express = require("express");

const router = express.Router();

// Internal Exports
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// Login Page
router.get("/", decorateHtmlResponse("Login"), getLogin);

// Exporting the router
module.exports = router;
