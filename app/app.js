const Koa = require('koa');
const routers = require('../router/index');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

// 使用bodyParse对请求参数进行解析
app.use(bodyParser());

// 将我们定义好的路由全部进行中间件注册
app.use(routers.userRouter.routes());

// 当请求方法不存在的时候，进行处理
app.use(routers.userRouter.allowedMethods());

module.exports = app;