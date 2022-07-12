const LoginService = require('../service/login.service');
class LoginController {
     async login(ctx, next) {
        try {
            const { name } = ctx.request.body;
            const {id,name:username} = (await LoginService.login(name))[0];
            ctx.body = {
                "id":id,
                "name":username
            };
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new LoginController();