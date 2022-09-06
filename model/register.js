const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'jerrypassword12',
    database: 'kdt_test'
});

// cnn.query('SELECT * FROM register', (err, rows) => {
//     if(err) throw err;
//     console.log("register1:", rows);
// })

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
        console.log("register_insert:", rows);

        cb(rows.insertId);
    })
}

exports.delete_register = (id, cb) => {
    var sql = `DELETE FROM register WHERE id = ${id};`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("delete: ", rows);

        cb();
    })
}

exports.correct_register = (id, cb) => {
    var sql = `SELECT * FROM register WHERE id = ${id}`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("correct: ", rows);

        cb(rows);
    })
}

exports.update_register = (data, cb) => {
    var sql = `UPDATE register SET name = '${data.name}', comment = '${data.comment}' WHERE id = ${data.id}`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("update: ", rows);

        cb();
    })
}