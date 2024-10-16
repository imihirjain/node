var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mihir@1234",
  database: "mydb",
});

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// *************DATABASE CREATED************
// con.connect(function (err) {
//   if (err) throw err;
//   con.query("Create database mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// *************TABLE CREATED
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

//**************Primary Key */
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql =
//     "CREATE TABLE customer (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

//****************Insert into */
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected");
//   var sql =
//     "insert into customer (name, address) values('Apple', 'California')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 row created");
//   });
// });

// *******************Insert Multiple records
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
  var sql = "insert into customer (name, address) values ?";
  var values = [
    ["John", "Highway 71"],
    ["Peter", "Lowstreet 4"],
    ["Amy", "Apple st 652"],
    ["Hannah", "Mountain 21"],
    ["Michael", "Valley 345"],
    ["Sandy", "Ocean blvd 2"],
    ["Betty", "Green Grass 1"],
    ["Richard", "Sky st 331"],
    ["Susan", "One way 98"],
    ["Vicky", "Yellow Garden 2"],
    ["Ben", "Park Lane 38"],
    ["William", "Central st 954"],
    ["Chuck", "Main Road 989"],
    ["Viola", "Sideway 1633"],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Row Affected:- ", result.affectedRows);
  });
});
