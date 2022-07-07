const userController = require('../controller/user.controller')
const {userVerify,handlePassword} = require('../middleware/userVerify');

function createUserRouter(Router){
    // 用户路由
    const userRouter = new Router({prefix:'/user'});

    // 当创建用户的时候，使用post请求
    userRouter.post('/',userVerify,handlePassword,userController.create);

    return userRouter;
}


module.exports = createUserRouter;



