const express = require("express");
const mysql = require("mysql");
const app = express();
const userRouter = require("./api/user/user.router");
const database = mysql.createConnection({
    host: "localhost",
    user: "camille",
    password: "password",
    database: "api"
});

database.connect(() => {
    console.log("Connexion réussie");
});

//app.get("/hello", (req, res) => {
//   res.json({
//        success: 1,
//      msg: "Welcome to Node with Express"
//    });
// });

app.use(express.json());
app.use("/api/user", userRouter);

app.listen(8001, () => {
    console.log("serveur démarré");
});

