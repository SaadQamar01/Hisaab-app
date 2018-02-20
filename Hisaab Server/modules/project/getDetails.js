var connection = require('./../../config');
module.exports.getDetails=function(req,res){
    connection.query('SELECT * FROM project', function (error, results, fields) {
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