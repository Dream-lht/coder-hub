const servicePromise = require("../utils/servicePromise");

class LabelService{
    // 创建标签
    async createLabel(labelName){
        // INSERT INTO `labels` (label) VALUES ("科学");
        const insertLabel = "INSERT INTO labels (label) VALUE (?);"
        return await servicePromise(insertLabel,[labelName]);
    }
    // 获取标签
    async getLabel(){
        const selectLabel = "SELECT * FROM labels;";
        const result = await servicePromise(selectLabel);
        console.log(result);
        return result;
    }
    // 删除标签
    removeLabel(labelId){
        const deleteLabel = "DELETE FROM `labels` WHERE id=(?);";
        const result = await servicePromise(deleteLabel,[labelId]);
        return result;
    }
    // 修改标签
    updateLabel(){}
}

module.exports = new LabelService();