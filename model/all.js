const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'jerrypassword12',
    database: 'kdt_test'
});

// cnn.query('SELECT * FROM alle', (err, rows) => {
//     if(err) throw err;
//     console.log("alles1:", rows);
// })

exports.all = (cb) => {
    var sql = 'SELECT * FROM alle'
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("alles2:", rows);

        cb(rows);
    })
}

exports.post_all = (data, cb) => {
    var sql = `INSERT INTO alle(name, comment) VALUES ('${data.name}', '${data.comment}')`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("post:", rows);

        cb(rows.insertId);
    })
}

exports.delete_all = (id, cb) => {
    var sql= `DELETE FROM alle WHERE id = ${id}`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("delete:", rows);

        cb();
    })
}

exports.load_all = (id, cb) => {
    var sql = `SELECT * FROM alle WHERE id=${id}`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("load:", rows);

        cb(rows);
    })
}

exports.correct_all = (data, cb) => {
    var sql = `UPDATE alle SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("update:", rows);

        cb();
    })
}