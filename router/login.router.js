const LoginController = require('../controller/login.controller');
function createLoginRouter(Router){
    const loginRouter = new Router({prefix:'/login'});
    loginRouter.post('/',LoginController.Login);
    return loginRouter;
}

module.exports = createLoginRouter;