const mysql = require('mysql2');
const config = require('./config');
const connection  = mysql.createPool({
    user:config.MYSQL_USER,
    password:config.MYSQL_PASSWORD,
    host:config.MYSQL_HOST,
    port:config.MYSQL_PORT,
    database:config.MYSQL_DATABASE,
})

// 检测数据库是否连接成功
connection.getConnection((err,conn) => {
    if(err){
        console.log("连接失败",err);
        return;
    }
    console.log("连接成功");

})

// 导出连接
module.exports = connection;