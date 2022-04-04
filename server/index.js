const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const mysql = require("mysql")



const db = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password:"password",
    database:"carshop_db"
});


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))



app.get("/api/get/employees", (req, res) => {
    const sqlSelect = "SELECT * FROM employees"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/carmodels", (req, res) => {
    const sqlSelect = "SELECT * FROM carmodels"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/sales", (req, res) => {
    const sqlSelect = "SELECT * FROM sales"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

/*app.post("/api/insert", (req, res)=> {
    const carModel = req.body.carModel

   const sqlInsert = 
   "INSERT INTO movie_reviews (carmodels) VALUES (?)"
    db.query(sqlInsert, carModel, (err, result) => {
        console.log(err);
    });
});*/

app.listen(3001, () => {
    console.log("running on port 3001")
});