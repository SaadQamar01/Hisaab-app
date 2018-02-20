var connection = require('./../../config');
module.exports.editDetails=function(req,res){
  var account_id = req.body.account_id;
  var account_name = req.body.account_name;
  var account_nameinurdu = req.body.account_nameinurdu;
  var user_id=req.body.user_id;

  var sql = 'UPDATE account SET account_name = ? , account_nameinurdu = ? ,user_id=?  WHERE account_id = ?';
    connection.query(sql,[account_name,account_nameinurdu,user_id,account_id],function (error, results, fields) {
      if (error) {
        return res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        return res.json({
            status:true,
            results:results,
            message:'edit account sucessfully'
        })
      }
    });
}