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

exports.get_guest = (cb) => {
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