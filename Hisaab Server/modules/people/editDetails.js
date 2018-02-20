var connection = require('./../../config');
module.exports.editDetails=function(req,res){
  var people_id = req.body.people_id;
  var people_name = req.body.people_name;
  var people_nameinurdu = req.body.people_nameinurdu;
  var contact=req.body.contact;
  var people_catid=req.body.people_catid;

  var sql = 'UPDATE people SET people_name = ?, people_nameinurdu = ? , contact = ? ,people_catid=?  WHERE people_id = ?';
    connection.query(sql,[people_name,people_nameinurdu,contact,people_catid,people_id],function (error, results, fields) {
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