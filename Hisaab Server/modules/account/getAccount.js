var connection = require('./../../config');
module.exports.getDetails=function(req,res){
    connection.query('SELECT * FROM account', function (error, results, fields) {
      if (error) {
        return res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        return res.json({
            status:true,
            results:results,
            message:'get account sucessfully'
        })
      }
    });
}