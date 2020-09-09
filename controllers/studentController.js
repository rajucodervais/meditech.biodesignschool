const Student = require('../models/studentModel');
const Education = require('../models/stuEducationModel');
const Upload = require('../models/UploadModel');
const {Op} = require('sequelize');
async function index(req, res) {
    var result = await Admin.findOne({where:{id:'1'}});
    if (result.length != 0) {
        res.render('admin/profiles/index',{result:result})
    } else {
        res.render('admin/profiles/index', { message: "data not found" });
    }
    
}

module.exports = {
    index:index
}