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
    // id는 sql에서 auto_increment로 설정해놨기 때문에 테이블에 데이터를 추가할 필요가 없음.
    // ?1 // 근데 여기서 궁금증은 여기 나오는 data는 도대체 어디서 나오는 data인지 모르겠습니다.
    // 답 // Cvisitor에서 (req.body가 data, function(result)뒤 부분까지 cb라는 함수의 매개변수로
    cnn.query(sql, (err, result) => {
        // sql문 실행시켜서 결과값을 rows로 받아오겠다는 의미
        // ?2 // 위에 select문으로 결과값을 rows로 받아오는 건 이해가 가는데
              // insert문은 테이블에 데이터를 추가해주는 건데 결과값을 받아올 수가 있는지 궁금합니다.
        if(err) throw err;
        console.log("visitors3: ", result);

        cb(result.insertId);
        // 함수를 매개변수로 받고 있다. 함수의 인자로 결과값을 넘겨주고 있다.
        // insert를 하면 id가 auto로 자동으로 생성되고 있기 때문에 id를 가져오고 싶을 때 insertId를 적으면 된다.
    })
}

exports.delete_visitor = (id, cb) => {
    var sql = `DELETE FROM visitor WHERE id = ${id}`
    cnn.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);

        cb();
    })
}

exports.get_visitor_by_id = (id, cb) => {
    var sql = `SELECT * FROM visitor WHERE id = ${id}`;
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        // console.log(rows);

        cb(rows);
    })
}

exports.update_visitor = (data, cb) => {
// update를 한다는 건 name이든 comment든 바뀐다는 것. 그거에 대한 정보를 받아와야 함.
// 받아올 함수를 설정 
    var sql = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id = ${data.id}`
    cnn.query(sql, (err, result) => {
        if(err) throw err;
            console.log(result);
            cb();
        })
}
