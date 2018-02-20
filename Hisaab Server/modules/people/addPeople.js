var connection = require('./../../config');
module.exports.addPeople=function(req,res){
    res.header('Access-Control-Allow-Origin', "*");
    var data={
        "people_name":req.body.people_name,
        "people_nameinurdu":req.body.people_nameinurdu,
        "contact":req.body.contact,
        "people_catid":req.body.people_catid
    }
    connection.query('INSERT INTO people SET ?',data, function (error, results, fields) {
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