const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'jerrypassword12',
    database: 'kdt_test'
});

cnn.query('SELECT * FROM register', (err, rows) => {
    if(err) throw err;
    console.log("register1:", rows);
})

exports.get_register = (cb) => {
    var sql = 'SELECT * FROM register'
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("register2:", rows)

        cb(rows);
    })
}

exports.post_register = (data, cb) => {
    var sql = `INSERT INTO register (name, comment) VALUES ("${data.name}", "${data.comment}");`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("register_insert:", rows.insertId)

        cb(rows.insertId);
    })
}