var connection = require('./../../config');
module.exports.deleteCategory=function(req,res){
  var sql = "DELETE FROM people_category WHERE category_id = ?";
    connection.query(sql,[req.body.category_id],function (error, results, fields) {
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