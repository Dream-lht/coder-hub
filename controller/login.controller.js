const jwt = require("../utils/jwt");
class LoginController {
    async login(ctx, next) {
        // 生成token
        const {name,password} = ctx.user;
        const token = jwt.generateToken({name,password});
        // 返回信息
        ctx.body = {
            name,
            token
        };
    }
}

module.exports = new LoginController();