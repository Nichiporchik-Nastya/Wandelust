const db = require('../db');
const path = require('path');


class mainController {
    async dashbord(req, res) {
        try {
            const login  = req.session.userlogin;
            

            
            db.query(`SELECT * FROM users WHERE login = "${login}"`, (error, results) => {
                if (error) throw error;
                if (results.length > 0) {

                    // const filePath = path.join(__dirname, '../adminPages', 'dashbord.html');
                    // res.sendFile(filePath);

                    results = results[0];

                    res.render('../adminPages/dashbord', { results });

                    // res.send(results);

                } else {
                    res.send('cannot reach dashbord page');
                    // res.redirect('/');
                }
            });

        } catch (e) {
            console.log(e);
        }
    }

    // async index(req, res) {
    //     try {
    //         const filePath = path.join(__dirname, '../', 'index.html');
    //         res.sendFile(filePath);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
}

module.exports = new mainController();