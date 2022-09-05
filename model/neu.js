const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'jerrypassword12',
    database: 'kdt_test'
});

cnn.query('SELECT * FROM neu', (err, rows) => {
    if(err) throw err;
    console.log("neu1:", rows);
})

exports.get_neu = (cb) => {
    var sql = "SELECT * FROM neu"
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("neu2:", rows);

        cb(rows);
    })
}

exports.post_neu = (data, cb) => {
    var sql = `INSERT INTO neu(name, comment) VALUES ('${data.name}', '${data.comment}')`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("insert:", rows);

        cb(rows.insertId);
    })
}

exports.delete_neu = (id, cb) => {
    var sql = `DELETE FROM neu WHERE id = ${id}`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("delete:", rows);

        cb();
    })
}