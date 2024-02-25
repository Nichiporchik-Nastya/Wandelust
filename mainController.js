// const db = require('./db');

class mainController {
    async dashbord(req, res) {
        try {
            res.send("dashbord.html");
            
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new mainController();