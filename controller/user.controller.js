const userService = require('../service/user.service');

class UserController{
    async create(ctx,next){
        try{
            // 解析参数
            const params = ctx.request.body;
            // 查询数据库
            const result = await userService.createUser(params);
            // 返回数据
            ctx.body = result;
        }catch(err){
            console.log(err);
        }
        
    }
}

module.exports = new UserController();
