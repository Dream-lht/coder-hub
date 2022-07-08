const LoginService = require('../service/login.service');

class LoginController{
    Login(ctx,next){
        console.log(LoginService.Login());
        ctx.body = LoginService.Login();
    }
}

module.exports = new LoginController;