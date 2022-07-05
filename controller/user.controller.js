const userService = require('../service/user.service');

class UserController{
    async create(ctx,next){
        // 解析参数
        const params = ctx.request.body;
        console.log(params);
        // 查询数据库
        const result = await userService.createUser(params);
        // 返回数据

        ctx.body = result;
    }
}

module.exports = new UserController();
