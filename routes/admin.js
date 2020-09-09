var express = require('express');
var router = express.Router();
const AdminController = require('../controllers/adminController');
const { check, validationResult ,body} = require('express-validator');
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

router.get('/',redirectLogin, function (req, res) {
    res.render('admin/dashboard', { 'session': req.session });
});

router.get('/admin',redirectLogin, AdminController.admin_index);

router.get('/create',redirectLogin, AdminController.create);

router.post('/store', redirectLogin, [
  check('first_name').not().isEmpty().withMessage('First name is Required'),
  check('last_name').not().isEmpty().withMessage('last name is Required'),
  check('email').not().isEmpty().withMessage('email is Required').isEmail().withMessage('Email is not valid'),
  check('password').not().isEmpty().withMessage('password is Required').isLength({ min: 8 }).withMessage('password should be at least 8 characters'),
  check('cpassword').not().isEmpty().withMessage('Confirm password is Required').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
  }),
], AdminController.store);
router.get('/edit/:id',redirectLogin, AdminController.edit);
router.post('/update',redirectLogin, [
  check('first_name').not().isEmpty().withMessage('First name is Required'),
  check('last_name').not().isEmpty().withMessage('last name is Required'),
  check('email').not().isEmpty().withMessage('email is Required').isEmail().withMessage('Email is not valid'),
], AdminController.update);
router.get('/destroy/:id',redirectLogin, AdminController.destroy);

router.get('/login',redirectDashboard, AdminController.login);
router.post('/login-request',redirectDashboard, [
  check('email').not().isEmpty().withMessage('email is Required').isEmail().withMessage('Email is not valid'),
  check('password').not().isEmpty().withMessage('password is Required').isLength({ min: 8 }).withMessage('password should be at least 8 characters')  
], AdminController.loginRequest);



router.get('/forgot-password',redirectDashboard, AdminController.forgotPassword);

router.get('/logout',redirectLogin,AdminController.logout)




module.exports = router;
