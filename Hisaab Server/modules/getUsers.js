var connection = require('./../config');
module.exports.getUsers=function(req,res){
    connection.query('SELECT id, name FROM users', function (error, results, fields) {
      if (error) {
        return res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        results.shift();
        return res.json({
            status:true,
            results:results,
            message:'get users sucessfully'
        })
      }
    });
}