/**
 * 用户信息校验
 */

async function userVerify(ctx,next){
    const {name,password} = ctx.request.body;

    // 用户名或者密码不能为"" || underfind|| null

    if(!name || !password){
        const error = new Error("USER_OR_PASSWORD_NIT_NULL");
        console.log("错误");
        return ctx.app.emit('error',error,ctx);
        
    }

    await next();
    
}

module.exports = userVerify;