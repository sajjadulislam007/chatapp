// Users Controller

function getUsers(req, res, next) {
  res.render("users");
}

// Exporting Functions
module.exports = {
  getUsers,
};
