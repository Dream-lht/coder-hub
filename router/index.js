// 引入路由
const Router = require('koa-router');

// user路由
const createUserRouter = require('./user.router');

//创建User路由
const userRouter = createUserRouter(Router,{prefix:'/user'});

module.exports = {
    userRouter
}

