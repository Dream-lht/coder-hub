/**
 * 用户信息校验
 */
const userService = require('../service/user.service');
const AESPassword = require('../utils/encryption');



async function userVerify(ctx,next){
    const {name,password} = ctx.request.body;

    // 用户名或者密码不能为"" || underfind|| null
    if(!name || !password){
        const error = new Error("USER_OR_PASSWORD_NIT_NULL");
        return ctx.app.emit('error',error,ctx);
    }

    // 判断用户是否已经存在于数据库当中
    const userInfo = await userService.getUserInfoByName(name);

    if(userInfo.length > 0){
        const error = new Error("USER_NAME_NOT_EQUAL");
        return ctx.app.emit('error',error,ctx);
    }

    await next();
}

async function handlePassword(ctx,next){
    const {password} = ctx.request.body;
    ctx.request.body.password = AESPassword(password);
    
    await next();
}

module.exports = {userVerify,handlePassword};