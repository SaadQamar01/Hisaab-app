var connection = require('./../../config');
module.exports.addCategory=function(req,res){
    res.header('Access-Control-Allow-Origin', "*");
    var category={
        "name":req.body.name,
        "parent_id":req.body.parent_id
    }
    connection.query('INSERT INTO people_category SET ?',category, function (error, results, fields) {
      if (error) {
        return res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        return res.json({
            status:true,
            message:'category insert sucessfully'
        })
      }
    });
}