const LoginService = require('../service/login.service');

class LoginController{
    Login(ctx,next){
        ctx.body = LoginService();
    }
}

module.exports = new LoginController;