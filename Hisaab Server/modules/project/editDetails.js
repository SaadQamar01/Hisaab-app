var connection = require('./../../config');
module.exports.editDetails=function(req,res){
  var project_id = req.body.project_id;
  var project_name = req.body.project_name;
  var project_nameinurdu = req.body.project_nameinurdu;
  var people_id=req.body.people_id;

  var sql = 'UPDATE project SET project_name = ? , project_nameinurdu = ? ,people_id=?  WHERE project_id = ?';
    connection.query(sql,[project_name,project_nameinurdu,people_id,project_id],function (error, results, fields) {
      if (error) {
        return res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        return res.json({
            status:true,
            results:results,
            message:'edit category sucessfully'
        })
      }
    });
}