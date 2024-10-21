// External Imports
const express = require("express");

const router = express.Router();

// Internal Exports
const { getUsers } = require("../controller/userController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// Login Page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// Exporting the router
module.exports = router;
