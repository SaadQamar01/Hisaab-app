var connection = require('./../../config');
module.exports.addProject=function(req,res){
    res.header('Access-Control-Allow-Origin', "*");
    var data={
        "project_name":req.body.project_name,
        "project_nameinurdu":req.body.project_nameinurdu,
        "people_id":req.body.people_id,
    }
    connection.query('INSERT INTO project SET ?',data, function (error, results, fields) {
      if (error) {
        return res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        return res.json({
            status:true,
            message:'project insert sucessfully'
        })
      }
    });
}