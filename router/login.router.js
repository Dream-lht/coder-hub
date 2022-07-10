const LoginController = require('../controller/login.controller');
const loginVerify = require("../middleware/loginVerify");
function createLoginRouter(Router){
    const loginRouter = new Router({prefix:'/login'});
    loginRouter.post('/',loginVerify,LoginController.Login);
    return loginRouter;
}

module.exports = createLoginRouter;