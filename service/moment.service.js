const servicePromise = require("../utils/servicePromise");
class MomentService{
    // 获取动态列表
    async getMomentList(params){
        const result = {
            total:null,
            data:null
        }

        // 获取偏移量
        const {page,pageSize} = params;
        // 获取总条数
        const total = (await this.getMomentCount());
        
        // 获取moment列表
        const selectMomentList = `SELECT * FROM moments LIMIT ?, ?`;
        const momentList = await servicePromise(selectMomentList,[(page - 1)*pageSize + '',pageSize]);

        result.total = total;
        result.data = momentList;
        return result;
        
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
    // 获取动态总数
    async getMomentCount(){
        const selectMomentCount = "SELECT COUNT(*) FROM moments;";
        return (await servicePromise(selectMomentCount))[0]['COUNT(*)'];
    }

    // 更改动态
    async updateMomentContent(momentId,content){
        // UPDATE runoob_tbl SET runoob_title='学习 C++' WHERE runoob_id=3;
        const updateMomentItem = "UPDATE `moments` SET content=(?) WHERE id=(?);";

        return await servicePromise(updateMomentItem,[content,momentId]);
    }

    // 删除动态
    async deleteMomentItem(momentId){
        // DELETE FROM runoob_tbl WHERE runoob_id = 3 ;
        const deleteMomentItem = "DELETE FROM `moments` WHERE id=(?);";
        const result = await servicePromise(deleteMomentItem,[momentId]);
        console.log(result);
        return result;
    }
}

module.exports = new MomentService();