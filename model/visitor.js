const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'jerrypassword12',
    database: 'kdt_test'
});

cnn.query('SELECT * FROM visitor', (err, rows) => {
    if(err) throw err;
    console.log("visitors:", rows);
})

exports.get_visitor = (cb) => {
// cb라는 매개변수,
    var sql = "SELECT * FROM visitor";
    cnn.query(sql, (err, rows) => {
        // sql문 실행시켜서 결과값을 rows로 받아오겠다는 의미
        if(err) throw err;
        console.log("visitors:", rows);

        cb(rows);
        // 함수를 매개변수로 받고 있다. 함수의 인자로 결과값을 넘겨주고 있다.
    })
}

exports.post_visitor = (data, cb) => {
    // cb라는 매개변수,
    var sql = `INSERT INTO visitor(name, comment) VALUES( '${data.name}', '${data.comment}')`;
    // 여기서 VALUES에 있는 값을 어떻게 받아올 건지가 관건
    cnn.query(sql, (err, result) => {
        // sql문 실행시켜서 결과값을 rows로 받아오겠다는 의미
        // insert문에서는 
        if(err) throw err;
        console.log("visitors3: ", result);

        cb(result.insertId);
        // 함수를 매개변수로 받고 있다. 함수의 인자로 결과값을 넘겨주고 있다.
        // insert를 하면 id가 auto로 자동으로 생성되고 있기 때문에 id를 가져오고 싶을 때 insertId를 적으면 된다.
    })
}


