const mysql = require('mysql2');
const config = require('./config');
const connection  = mysql.createConnection({
    user:config.MYSQL_USER,
    password:config.MYSQL_PASSWORD,
    host:config.MYSQL_HOST,
    port:config.MYSQL_PORT,
    database:config.MYSQL_DATABASE,
})


connection.execute('select * from user',function(err,result,fields){
    console.log("数据库连接成功");
    console.log(result);
})