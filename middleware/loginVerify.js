/**
 * 登录验证
 */
const encryption = require("../utils/encryption");

const loginService = require('../service/login.service');
async function loginVerify(ctx,next){
    const {name,password} = ctx.request.body;

    if(!name || !password){
        const error = new Error("USER_OR_PASSWORD_NIT_NULL");
        return ctx.app.emit('error',error,ctx);
    }
    // 密码错误
    const userPassword = (await loginService.getPasswordByName(name))[0].password;
    if(userPassword !== encryption(password)){
        const error = new Error("PASSWORD_ERROR");
        return ctx.app.emit('error',error,ctx);
    }

    next();
}

module.exports = loginVerify;