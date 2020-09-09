const Post = require('../models/postModel');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');


async function index(req, res) {
    if (req.session.loggedIn) {
        var result = await Post.findAll();
        if (result.length != 0) {
            res.render('admin/posts/index',{posts:result, session:req.session})
        } else {
            res.render('admin/posts/index', { message: "data not found" });
        }    
    }
}
function create(req, res) {
    res.render('admin/posts/create');
}
async function store(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            status: false,
            msg: errors.array()[0].msg
        })
    }
    else {
        var result = await Post.findAll();
    }
}
async function edit(req, res) {
    var result = await Post.findAll();
    res.render('admin/posts/edit',{posts:result})
}

async function update(req, res) {
    console.log('hii')
    var result = await Post.findAll();
    if (result.length != 0) {
        res.render('admin/posts/index',{posts:result})
    } else {
        res.render('admin/posts/index', { message: "data not found" });
    }
}
async function destroy(req, res) {
    console.log('hii')
    var result = await Post.findAll();
    if (result.length != 0) {
        res.render('admin/posts/index',{posts:result})
    } else {
        res.render('admin/posts/index', { message: "data not found" });
    }
}

async function view(req, res) {
    console.log('hii')
    var result = await Post.findAll();
    if (result.length != 0) {
        res.render('admin/posts/index',{posts:result})
    } else {
        res.render('admin/posts/index', { message: "data not found" });
    }
}

function ckUploader(req, res) {
    var fs = require('fs');
    fs.readFile(req.files.upload.path, function (err, data) {
        var newPath = __dirname + '/../public/uploads/' +Date.now()+'-'+ req.files.upload.name;
        fs.writeFile(newPath, data, function (err) {
            if (err) console.log({err: err});
            else {
                html = "";
                html += "<script type='text/javascript'>";
                html += "    var funcNum = " + req.query.CKEditorFuncNum + ";";
                html += " var url = \"/uploads/" + req.files.upload.name + "\";";
                html += "    var message = \"Uploaded file successfully\";";
                html += "";
                html += "    window.parent.CKEDITOR.tools.callFunction(funcNum, url, message);";
                html += "</script>";
                res.send(html);
            }
        });
    });
}



module.exports = {
    index: index,
    create: create,
    store: store,
    edit: edit,
    update: update,
    destroy: destroy,
    view: view,
    ckUploader:ckUploader
}