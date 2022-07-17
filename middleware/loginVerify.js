/**
 * 登录验证
 */
const encryption = require("../utils/encryption");
const jwt = require("../utils/jwt")
const loginService = require('../service/login.service');
async function loginVerify(ctx, next) {
    const { name, password } = ctx.request.body;
    console.log(name, password);
    if (!name || !password) {
        const error = new Error("USER_OR_PASSWORD_NIT_NULL");
        return ctx.app.emit('error', error, ctx);
    }
    // 密码错误
    const userPassword = (await loginService.getPasswordByName(name))[0].password;
    if (userPassword !== encryption(password)) {
        const error = new Error("PASSWORD_ERROR");
        return ctx.app.emit('error', error, ctx);
    }

    ctx.user = { name, password };
    await next();
}

/**
 * 权限验证
 */

async function authVerify(ctx, next) {
    const token = ctx.header.authorization;
    // 验证token
    const result = jwt.verifyToken(token);
    if (!result.isQuery) {
        const error = new Error(result.message);
        return ctx.app.emit('error', error, ctx);
    }
    ctx.user = result.data.data;
    await next();
}

module.exports = { loginVerify, authVerify };