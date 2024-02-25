const db = require('./db');

class authController {
    async registration(req, res) {
        try {
            const { name, login, email } = req.body;

            db.query(`INSERT INTO users (name, login, email) VALUES ("${name}", "${login}", "${email}")`, (error, results) => {
                if (error) throw error;
                res.send('User registered successfully!');
            });
        } catch (e) {
            console.log(e);
        }
    }

    async login(req, res) {
        try {
            const { login, email } = req.body;
            db.query(`SELECT * FROM users WHERE login = "${login}"`, (error, results) => {
                if (error) throw error;
                if (results.length > 0) {
                    // req.session.loggedin = true;
                    req.session.userlogin = login;
                    res.redirect('../dashbord');
                    // res.send(req.session.userlogin);
                } else {
                    // res.send('Incorrect Username and/or Password!');
                    res.redirect('/');
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

    async getUsers(req, res) {
        try {

            db.query('SELECT * FROM users', (error, results) => {
                if (error) throw error;
                res.send(results);
            });

        } catch (e) {
            console.log(e);
        }
    }

    // async dashbord(req, res) {
    //     try {
    //         res.send("dashbord.html");
            
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
}

module.exports = new authController();