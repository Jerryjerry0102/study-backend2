const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'jerrypassword12',
    database: 'kdt_test'
});

// cnn.query('SELECT * FROM guest', (err, rows) => {
//     if(err) throw err;
//     console.log("guest1 : ", rows);
// })

exports.guest = (cb) => {
    var sql = 'SELECT * FROM guest';
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("guest2 : ", rows);

        cb(rows);
        // cb 안에 적힌 rows가 Cguest.guest로 가서 function(result)로 들어감
    })
}

exports.post_guest = (data, cb) => {
    var sql =  `INSERT INTO guest(name, comment) values('${data.name}', '${data.comment}')`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("guest_insert1 : ", rows);

        cb(rows.insertId);
        // function(result)로 들어감
    })
}

exports.delete_guest = (id, cb) => {
    var sql = `DELETE FROM guest WHERE id = ${id}`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("delete:", rows);

        cb();
    })
}

exports.get_guest = (id, cb) => {
    var sql = `SELECT * FROM guest WHERE id = ${id}`
    // id를 가져오는 방법 생각해보자
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("get:", rows);

        cb();
    })
}

exports.update_guest = (cb) => {
    var sql = `UPDATE guest SET name = ${.name}, comment = ${.comment} WHERE id = ${.id}`
    // 저 3개를 불러올 방법 생각해보기
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("update:", rows);

        cb();
    })
}