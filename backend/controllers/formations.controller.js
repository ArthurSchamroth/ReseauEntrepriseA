const formations = require('../model/formations.model');
const mysql = require('../model/db');

exports.getFormations = (res) => {
  formations.getFormations( (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found formations`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving formations ",
        });
      }
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(data);
    };
  });
};

exports.getFormateurs = (res) => {
    formations.getFormateurs( (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found formateurs`,
          });
        } else {
          res.status(500).send({
            message: "Error retrieving formateurs ",
          });
        }
      } else {
        res.header("Access-Control-Allow-Origin", "*");
        res.send(data);
      };
    });
  };

  exports.getInscriptions = (res) => {
    formations.getInscriptions( (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found inscriptions`,
          });
        } else {
          res.status(500).send({
            message: "Error retrieving inscriptions ",
          });
        }
      } else {
        res.header("Access-Control-Allow-Origin", "*");
        res.send(data);
      };
    });
  };
  