//  将.env当中的配置注入到进程当中
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    APP_SERVER_PORT
} = process.env