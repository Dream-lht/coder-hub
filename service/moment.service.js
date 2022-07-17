const servicePromise = require("../utils/servicePromise");
class MomentService{
    // 获取动态列表
    getMomentList(params){
        // 获取所有
    }
    // 添加动态列表
    async addMomentItem(params){
        try{
            const insertMoment = 'INSERT INTO `moments` (content,user_id) VALUE (?,?);'
            return await servicePromise(insertMoment,[params.content,params.id]);
        }catch(err){
            console.log(err);
        }

    }
    async getMomentItemById(params){
        try{
            const selectMoment = "SELECT * FROM `moments` WHERE id=(?);";
            return await servicePromise(selectMoment,[params]);
        }catch(err){
            console.log(err);
        }
        
    }
}

module.exports = new MomentService();