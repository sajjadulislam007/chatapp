// External Imports
const express = require("express");

const router = express.Router();

// Internal Exports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// Login Page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

// Exporting the router
module.exports = router;
