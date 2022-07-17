const momentService = require('../service/moment.service');
const userService = require('../service/user.service');

class MomentController {
    // 获取动态列表
    getMomentList() { }
    // 添加动态列表
    async addMomentItem(ctx, next) {
        try {
            // 像数据库当中添加动态
            const { content } = ctx.request.body;
            // 获取用户id
            const result = await userService.getUserInfoByName(ctx.user.name);

            const { id } = result[0];
            await momentService.addMomentItem({ content, id });

            ctx.body = "动态发布成功！"
        } catch (err) {
            console.log(err);
        }

    }

    async getMomentItem(ctx,next){
        try{
            const {momentId} = ctx.params;
            console.log(momentId);
            const result = await momentService.getMomentItemById(momentId);
            console.log(result);
            ctx.body = result;
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = new MomentController();