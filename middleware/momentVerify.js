/**
 * 验证用户使用有权限修改这条动态
 */
const userService = require("../service/user.service");
const {getMomentItemById} = require('../service/moment.service');

async function verifyPermission(ctx,next){
    // 获取动态ID
    const {momentId} = ctx.params;
    const {name} = ctx.user;
    // 获取用户ID
    const {id} = (await userService.getUserIdByName(name))[0];
    // 获取momentId对应的user_id
    const {user_id} = (await getMomentItemById(momentId))[0];

    // 判断用户id是否相同

    console.log(id,user_id);
    if(id !== user_id){
        const error = new Error("PERMISSION_ERROR");
        ctx.app.emit('error',error,ctx);
        return;
    }
    await next();
}

module.exports = verifyPermission;