const servicePromise = require('../utils/servicePromise');
const jwt = require("jsonwebtoken");
class LoginService {
     async login(name) {
        // 返回用户信息
        const selectUserInfo = "select id,name from `user` where name=(?)";
        return servicePromise(selectUserInfo, [name]);
    }

    async getPasswordByName(name) {
        const selectPassword = 'select password from `user` where name=(?);';
        return await servicePromise(selectPassword, [name]);
    }
}

module.exports = new LoginService();