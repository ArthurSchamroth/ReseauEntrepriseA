const mysql = require("./db");

const formations = function (user) {
    this.id = formations.id
}

formations.getFormations = (result) => {
    mysql.query(`select * from formation";`, (err, res) => {
        if (err) {

            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("res: ", res);
        result(null, res);
    });
};

formations.getFormateurs = (result) => {
    mysql.query(`SELECT * from formateurs`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("res: ", res);
        result(null, res);
    })
}

formations.getInscriptions = (result) => {
    mysql.query(`SELECT * from inscriptions`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("res: ", res);
        result(null, res);
    })
}

module.exports = formations;