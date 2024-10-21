// External Imports
const createHttpErrors = require("http-errors");

// Not Found Handler
function notFoundHandler(req, res, next) {
  next(createHttpErrors(404, "Your Requested Content Was Not Found!"));
}

// Default Error handler
function defaultErrorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 500);

  if (!res.locals.html) {
    // html html

    res.render("error", {
      errorPageTitle: "Error page",
    });
  } else {
    // json response
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  defaultErrorHandler,
};
