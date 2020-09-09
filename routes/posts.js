var express = require('express');
var router = express.Router();
const { check,body, validationResult } = require('express-validator');
const PostController = require('../controllers/postController');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

const redirectLogin = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/admin/login');
    } else {
        next();
    }
  }


/* GET home page. */
router.get('/',redirectLogin, PostController.index);
router.get('/create',redirectLogin,PostController.create);
router.post('/store', redirectLogin,[
    check('title').not().isEmpty().withMessage('title required'),
    check('description').not().isEmpty().withMessage('description required'),
    check('date_published').not().isEmpty().withMessage('published date requires'),
    check('from_date').not().isEmpty().withMessage('from date requires'),
    check('to_date').not().isEmpty().withMessage('end date requires'),
],PostController.store);
router.post('/edit',redirectLogin,PostController.edit);
router.put('/update',redirectLogin,PostController.update);
router.delete('/destroy',redirectLogin, PostController.destroy);
router.post('/view',redirectLogin, PostController.view);
router.post('/ckuploader',redirectLogin,multipartMiddleware,PostController.ckUploader);


module.exports = router;
