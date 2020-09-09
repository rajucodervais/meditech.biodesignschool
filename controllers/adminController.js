const Admin = require('../models/adminModel');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const { validationResult } = require('express-validator');
const session = require('express-session');

async function index(req, res) {
    var result = await Admin.findOne({where:{id:'1'}});
    if (result.length != 0) {
        res.render('admin/profiles/index',{result:result})
    } else {
        res.render('admin/profiles/index', { message: "data not found" });
    }
    
}

async function admin_index(req, res) {
    var result = await Admin.findAll();
    res.render('admin/profiles/index',{result:result})
}

function create(req, res) {
    res.render('admin/profiles/create');
}

async function store(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({
            status: false,
            msg: errors.array()[0].msg
        })
    }
    else {
        const { email, password, first_name, last_name } = req.body;
        var checkemail = await Admin.findAll({ where: { 'email': email } })
        console.log(checkemail.length);
        if (checkemail.length == 1) {
            req.flash('Msg', 'Email is already used!');
            res.redirect('/admin/create');
            console.log('email is already used')
        } else {
            var result = await Admin.create({
                first_name: first_name,
                last_name:last_name,
                email:email,
                password:bcrypt.hashSync(password, salt)
            });
            if (result) {
                req.flash('Msg', 'Admin Created Successfully~!');
                res.redirect('/admin/admin');
            } else {
                req.flash('ErrorMsg', 'Something is error');
                res.redirect('/admin/admin');
            }    
        }
        
    }


}

async function edit(req, res, next) {
    console.log(req.params.id);
    var result = await Admin.findAll({ where: { id: req.params.id } });
    res.render('admin/profiles/edit',{result:result});
}

async function update(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({
            status: false,
            msg: errors.array()[0].msg
        })
    }
    else {
        const {id, email, first_name, last_name } = req.body;
        var checkemail = await Admin.findAll({ where: { 'email': email } })
        if (checkemail.length == 1) {
            req.flash('Msg', 'Email is already used!');
            res.redirect('/admin/edit/'+id);
        } else {
            var result = await Admin.update({
                first_name: first_name,
                last_name:last_name,
                email:email
            },{where:{id:id}});
            if (result) {
                req.flash('Msg', 'Admin Updated Successfully~!');
                res.redirect('/admin/admin');
            } else {
                req.flash('ErrorMsg', 'Something is error');
                res.redirect('/admin/admin');
            }    
        }
        
    }


}

async function destroy(req, res, next) {
    var id = req.params.id;
    var result = await Admin.destroy({ where: { id: id } });
    req.flash('Msg', 'Admin Deleted Successfully~!');
    res.redirect('/admin/admin');
}

function login(req, res) {
    res.render('admin/auth/login');
}

async function loginRequest(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({
            status: false,
            msg: errors.array()[0].msg
        })
    }
    else {
        const { email, password} = req.body;
        var getAll = await Admin.findAll({ where: { 'email': email } })
        if (getAll.length == 1) {
            if (bcrypt.compareSync(password, getAll[0].password)) {
                req.session.email = email;
                req.session.first_name = getAll[0].first_name;
                req.session.last_name = getAll[0].last_name;
                req.session.loggedIn = true;
                res.redirect('/admin');    
            } else {
                req.flash('ErrorMsg', 'Password is not matched');
                res.redirect('/admin/login');
            }
        } else {
            req.flash('ErrorMsg', 'Credential does not match!');
            res.redirect('/admin/login');     
        }
        
    }
}

function logout(req, res) {
    req.session.destroy(function(err){  
        if(err){  
            console.log(err);  
        }  
        else  
        {  
            res.redirect('/admin/login');  
        }  
    });  
}

function forgotPassword(req, res) {
    res.render('admin/auth/reset-password');
}

module.exports = {
    index: index,
    admin_index:admin_index,
    create: create,
    store: store,
    edit: edit,
    update: update,
    destroy:destroy,
    login: login,
    loginRequest: loginRequest,
    logout:logout,
    forgotPassword: forgotPassword
}