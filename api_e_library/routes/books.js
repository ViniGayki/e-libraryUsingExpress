var express = require("express");
const { head } = require("../app");
var router = express.Router();
var mysql = require("mysql");
var cors = require("cors");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "library",
});

// const headers = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "OPTIONS, POST, GET,PUT",
//   "Access-Control-Max-Age": 2592000, // 30 days
//   "Access-Control-Allow-Headers": "* ", // 30 days
// };

router.get("/", function (req, res, next) {
  con.connect(function (err) {
    con.query("SELECT * FROM books", function (err, result, fields) {
      console.log(result);
      res.writeHead(200, Headers);
      res.write(JSON.stringify(result));
      return res.end();
    });
  });
});
router.post("/edit", function (req, res, next) {
  console.log(req.body);
  con.connect(function (err) {
    con.query("SELECT * FROM books", function (err, result, fields) {
      console.log(result);
      // res.writeHead(200, Headers);
      res.write(JSON.stringify(result));
      return res.end();
    });
  });
});

router.get("/view/:id", function (req, res, next) {
  console.log(req.params.id);

  con.connect(function (err) {
    con.query(
      "SELECT * FROM books where id=" + req.params.id,
      function (err, result, fields) {
        console.log(result);

        res.write(JSON.stringify(result[0]));
        return res.end();
      }
    );
  });
});

module.exports = router;
