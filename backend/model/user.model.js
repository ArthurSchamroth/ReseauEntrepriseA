const mysql = require("./db");

const user = function (user) {
    this.id = user.id
}


user.inscription = (req,result) => {
    console.log("dans inscription model")
    const username = req.body.username;
    const password = req.body.password;
    const mail = req.body.email;
    mysql.query("INSERT INTO users (username, password, mail) VALUES (?,?)",
     [username, password, mail], (err, res) => {
        if (err) {

            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("res: ", res);
        result(null, res);
    });
};
user.login = (req,result) => {
    console.log("dans login model")
    const username = req.body.username;
    const password = req.body.password;
    mysql.query("INSERT INTO users (username, password) VALUES (?,?)",
     [username, password], (err, res) => {
        if (err) {

            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("res: ", res);
        result(null, res);
    });
};



module.exports = user;