const user = require('../model/user.model');
const mysql = require('../model/db');

exports.inscription = (req, res) => {
    console.log("dans controller")
    user.inscription((err, data) => {
        console.log(req)
        if (err) {

            res.status(500).send({
                message: "Error during the register ",
            });

        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(data);
        }
    });
};
exports.login = (req, res) => {
    user.login((err, data) => {
        console.log(req)
        if (err) {

            res.status(500).send({
                message: "Wrong password or username",
            });

        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(data);
        }
    });
};