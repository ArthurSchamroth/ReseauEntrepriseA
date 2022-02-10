module.exports = (app) => {
    const formations = require("../controllers/formations.controller");
    const user = require("../controllers/user.controller");

    
    app.get("/formations", formations.getFormations);
    app.get("/formateurs", formations.getFormateurs);
    app.get("/formations", formations.getInscriptions);
    app.get("/login", user.login);
    app.post("/inscrition",user.inscription);
};