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

app.get("/api/get/totalsales", (req, res) => {
    const sqlSelect = "SELECT e.*, SUM(c.price) AS total_sales " +
    "FROM employees e, sales s, carmodels c " +
    "WHERE s.employee_id = e.id " +
    "AND s.carmodel_id = c.id " +
    "GROUP BY e.name"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});


app.delete('/api/delete/:id', (req, res) =>{
    const id = req.params.id;
    const sqlDelete = 
    "DELETE FROM carmodels WHERE id = ?"

    db.query(sqlDelete, id, (err, result) => {
      if(err) 
       console.log(err)
    })
})


app.post("/api/post", (req, res)=> {
    const brand = req.body.brand
    const model = req.body.model
    const price = req.body.price

   const sqlInsert = 
   "INSERT INTO carmodels (Brand, Model, Price) VALUES (?, ?, ?)"
    db.query(sqlInsert, [brand, model, price], (err, result) => {
        console.log(err);
    });
});


app.listen(3001, () => {
    console.log("running on port 3001")
});