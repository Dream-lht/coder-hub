const userService = require('../service/user.service');

class UserController{
    async create(ctx,next){
        try{
            // 解析参数
            const params = ctx.request.body;
            // 查询数据库
            const result =  userService.createUser(params);
            console.log(result);
            // 返回数据
            ctx.body = result;
        }catch(err){
            console.log(err);
        }
        
    }

    async getUserIdByName(name){
        const result = userService.getUserInfoByName();
    }   
}

module.exports = new UserController();
