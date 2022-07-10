const servicePromise = require('../utils/servicePromise');
const jwt = require("jsonwebtoken");
class LoginService{
    async Login(name){
        // 返回用户信息
        const selectUserInfo = "select id,name from `user` where name=(?)";
        const result = await servicePromise(selectUserInfo,[name]);
        return result;
    }

    async getPasswordByName(name){
        const selectPassword = 'select password from `user` where name=(?);';
        return await servicePromise(selectPassword,[name]);
    }
}

module.exports = new LoginService;