const database = require("../../server.js");

module.exports = {
    create: (data, callBack) => {
        database.query(
            `INSERT INTO users (prenom, nom, sexe, email, password, tel) VALUES (?, ?, ?, ?, ?, ?)`[data.firstName, data.lastName, data.gender, data.email, data.password, data.tel],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
};