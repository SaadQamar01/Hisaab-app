var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

var authenticateController=require('./modules/authenticate');
var registerController=require('./modules/register');
var getNRecordsController=require('./modules/getNRecords');

var addCategoryController=require('./modules/people-category/addCategory');
var getCategoryController=require('./modules/people-category/getCategory');
var deleteCategoryController=require('./modules/people-category/deleteCategory');
var editCategoryController=require('./modules/people-category/editCategory');

var addPeopleController=require('./modules/people/addPeople');
var getDetailsController=require('./modules/people/getDetails');
var deleteDetailsController=require('./modules/people/deleteDetails');
var editDetailsController=require('./modules/people/editDetails');

var addProjectController=require('./modules/project/addProject');
var getProjectDetailsController=require('./modules/project/getDetails');
var deleteProjectDetailsController=require('./modules/project/deleteDetails');
var editProjectDetailsController=require('./modules/project/editDetails');

var getUsersController=require('./modules/getUsers');
var addAccountController=require('./modules/account/addAccount');
var getAccountDetailsController=require('./modules/account/getAccount');
var deleteAccountDetailsController=require('./modules/account/deleteAccount');
var editAccountDetailsController=require('./modules/account/editAccount');

//cors XML k error ko resolve krne k liye lgya h and main purpose of cors to connect frontend to backend
var cors = require('cors')
cors({ credentials: true, origin: true })
app.use(cors())
// Parsers for POST data
app.use(bodyParser.json(), function (err, req, res, next) {
    if (err) {
        return res.status(500).json({ error: err });
    }
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));

/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/add_category',addCategoryController.addCategory);
app.get('/api/get_category',getCategoryController.getCategory);
app.post('/api/delete_category',deleteCategoryController.deleteCategory);
app.post('/api/edit_category',editCategoryController.editCategory);
app.post('/api/get-n-records',getNRecordsController.getNRecords);

app.post('/api/add_people',addPeopleController.addPeople);
app.get('/api/get_details',getDetailsController.getDetails);
app.post('/api/delete_details',deleteDetailsController.deleteDetails);
app.post('/api/edit_details',editDetailsController.editDetails);

app.post('/api/add_project',addProjectController.addProject);
app.get('/api/get_project_details',getProjectDetailsController.getDetails);
app.post('/api/delete_project_details',deleteProjectDetailsController.deleteDetails);
app.post('/api/edit_project_details',editProjectDetailsController.editDetails);

app.get('/api/get_users',getUsersController.getUsers);
app.post('/api/add_account',addAccountController.addAccount);
app.get('/api/get_account_details',getAccountDetailsController.getDetails);
app.post('/api/delete_account_details',deleteAccountDetailsController.deleteDetails);
app.post('/api/edit_account_details',editAccountDetailsController.editDetails);

var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("Server run on port " + port)
});