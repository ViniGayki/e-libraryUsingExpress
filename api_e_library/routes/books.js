var express = require("express");
const { head } = require("../app");
var router = express.Router();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "library",
});

/* GET users listing. */
// localhost:3000/books
router.get("/", function (req, res, next) {
  con.connect(function (err) {
    con.query("SELECT * FROM books", function (err, result, fields) {
      console.log(result);
      // res.writeHead(200, Headers);
      res.write(JSON.stringify(result));
      return res.end();
    });
  });
});

// // localhost:3000/books/add
// router.post("/add", function (req, res, next) {
//   res.send("respond with a addbook");
// });
// // localhost:3000/books/edit
// router.put("/edit", function (req, res, next) {
//   res.send("respond with a editbook");
// });
// // localhost:3000/books/delete
// router.delete("/delete", function (req, res, next) {
//   res.send("respond with a deletebook");
// });

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
