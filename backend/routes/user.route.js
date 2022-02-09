module.exports = (app) => {
    const formations = require("../controllers/formations.controller");

    
    app.get("/formations", formations.getFormations);
    app.get("/formateurs", formations.getFormateurs);
    app.get("/formations", formations.getInscriptions);
};