const LoginService = require('../service/login.service');

class LoginController{
    async Login(ctx,next){
        const {name} = ctx.request.body;
        // 查询用户数据库，获取信息
        const result = (await LoginService.Login(name))[0];
        // 生成Token
        console.log(result);
        ctx.body = result;
    }
}

module.exports = new LoginController;