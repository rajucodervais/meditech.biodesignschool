var express = require('express');
var router = express.Router();
const redirectLogin = (req, res, next) => {
  if (!req.session.loggedIn) {
      res.redirect('/admin/login');
  } else {
      next();
  }
}

const redirectDashboard = (req, res, next) => {
  if (req.session.loggedIn) {
      res.redirect('/admin');
  } else {
      next();
  }
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
