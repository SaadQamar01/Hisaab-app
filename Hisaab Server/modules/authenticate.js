var connection = require('./../config');
var bcrypt = require('bcrypt');
module.exports.authenticate = function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    var email = req.body.email;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
        if (error) {
           return res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            if (results.length > 0) {
                bcrypt.compare(password, results[0].password, function (err, ress) {
                    delete results[0].password
                    if (!ress) {
                        return res.json({
                            status: false,
                            message: "Email and password does not match"
                        });
                    } else {
                        var data=results[0];
                        return res.json({
                            status: true,
                            message: "Successfully Login",
                            data:data
                        })
                    }
                });
            }
            else {
              return res.json({
                    status: false,
                    message: "Email does not exits"
                });
            }
        }
    });
}