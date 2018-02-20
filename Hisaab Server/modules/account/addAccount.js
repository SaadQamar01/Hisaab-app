var connection = require('./../../config');
module.exports.addAccount=function(req,res){
    res.header('Access-Control-Allow-Origin', "*");
    var data={
        "account_name":req.body.account_name,
        "account_nameinurdu":req.body.account_nameinurdu,
        "user_id":req.body.user_id,
    }
    console.log(data)
    connection.query('INSERT INTO account SET ?',data, function (error, results, fields) {
      if (error) {
        return res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
        return res.json({
            status:true,
            message:'account insert sucessfully'
        })
      }
    });
}