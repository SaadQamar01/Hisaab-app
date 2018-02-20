var connection = require('./../../config');
module.exports.deleteDetails=function(req,res){
  var sql = "DELETE FROM project WHERE project_id = ?";
    connection.query(sql,[req.body.people_id],function (error, results, fields) {
      if (error) {
        return res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        return res.json({
            status:true,
            results:results,
            message:'delete category sucessfully'
        })
      }
    });
}