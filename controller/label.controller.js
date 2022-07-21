const resultFormat = require('../utils/resultFormat');
const labelService = require("../service/label.service");
class LabelController{
    // 创建标签
    async createLabel(ctx,next){
        const {labelName} = ctx.request.body;
        await labelService.createLabel(labelName);
        ctx.body = resultFormat(200,[],'create label success');
    }
    // 获取标签
    async getLable(ctx,next){
        const result = await labelService.getLabel();
        ctx.body = resultFormat(200,result,"select labels success");
    }
    // 删除标签
    async removeLabel(ctx,next){
        const {labelId} = ctx.parasm;
        await labelService.removeLabel(labelId);
        ctx.body = resultFormat(200,[],"remove label success");
    }
    // 修改标签
    updateLabel(ctx,bext){

    }
}

module.exports = new LabelController();