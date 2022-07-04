//  将.env当中的配置注入到进程当中
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    APP_SERVER_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
} = process.env