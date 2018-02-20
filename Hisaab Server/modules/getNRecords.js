var connection = require('./../config');
module.exports.getNRecords=function(req,res){

  var sql=`SELECT * FROM people_category LIMIT ${req.body.n}`;
    connection.query(sql, function (error, results, fields) {
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