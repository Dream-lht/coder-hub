const Koa = require('koa');
const useRouter = require('../router/index');
const bodyParser = require('koa-bodyparser');
const handleError = require('./handleError');

const app = new Koa();

// 使用bodyParse对请求参数进行解析
app.use(bodyParser());

// 注册路由
useRouter(app);

app.on('error',handleError);
module.exports = app;