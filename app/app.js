const Koa = require('koa');
const useRouter = require('../router/index');
const bodyParser = require('koa-bodyparser');
const handleError = require('./handleError');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();

// 开启静态资源访问
app.use(serve(path.resolve(__dirname,'../upload')));

// 使用bodyParse对请求参数进行解析
app.use(bodyParser());

// 注册路由
useRouter(app);

app.on('error',handleError);
module.exports = app;