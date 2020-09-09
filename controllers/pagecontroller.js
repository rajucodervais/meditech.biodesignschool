const Post = require('../models/postModel');
const { Op, where } = require('sequelize');
const { render } = require('ejs');

async function index(req, res) {
    var post =await Post.findAll();
    console.log(post);
    res.render('index', { 'posts': post });
}
async function post(req, res, next) {
    var slug = req.params.slug;
    console.log(slug);
    var post =await Post.findAll({where:{'slug':slug}});
    res.render('page', { 'posts': post });
}

function register(req, res, next) {
    var slug = req.params.slug;
    res.render('register', {slug:slug});
}

module.exports = {
    index: index,
    post: post,
    register:register
}