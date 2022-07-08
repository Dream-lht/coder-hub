/**
 * 登录验证
 */
const loginService = require('../service/login.service');
function loginVerify(ctx,name){
    const {name,password} = ctx.request.body;

    if(!name || !password){
        const error = new Error("USER_OR_PASSWORD_NIT_NULL");
        return ctx.app.emit('error',error,ctx);
    }
    // 密码不存在
    console.log(loginService.getPasswordByName(name))
    // if(loginService.getPasswordByName(name)){
    //     const error = new Error("PASSWORD_ERROR");
    //     ctx.app.emit('error',error,ctx);
    // }
}