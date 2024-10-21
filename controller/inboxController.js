// Inbox Controller

function getInbox(req, res, next) {
  res.render("inbox");
}

// Exporting Functions
module.exports = {
  getInbox,
};
