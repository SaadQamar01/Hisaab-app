var connection = require('./../../config');
module.exports.editCategory=function(req,res){
  var name = req.body.name;
  var parent_id=req.body.parent_id;
  var category_id=req.body.category_id;
  var sql = 'UPDATE people_category SET name = ? , parent_id = ? WHERE category_id = ?';
    connection.query(sql,[name,parent_id,category_id],function (error, results, fields) {
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