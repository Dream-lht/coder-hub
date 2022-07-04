const app = require('./app/app');

const config = require("./app/config");

console.log(config.APP_SERVER_PORT);

app.listen(config.APP_SERVER_PORT,() => {
    console.log("服务启动成功");
})