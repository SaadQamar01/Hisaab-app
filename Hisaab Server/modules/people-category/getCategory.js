var connection = require('./../../config');
module.exports.getCategory=function(req,res){
    connection.query('SELECT * FROM people_category', function (error, results, fields) {
      if (error) {
        return res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        return res.json({
            status:true,
            results:results,
            message:'get category sucessfully'
        })
      }
    });
}