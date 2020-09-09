var express = require('express');
var router = express.Router();
var pageController = require('../controllers/pagecontroller');
/* GET home page. */
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
router.get('/', pageController.index);

router.get('/page/:slug', pageController.post);
router.get('/register/:slug', pageController.register);

module.exports = router;
