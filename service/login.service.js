const servicePromise = require('../utils/servicePromise');
class LoginService {
    login(name) {
        const selectUserInfo = "select id,name from `user` where name=(?);";

        return servicePromise(selectUserInfo,[name]);
    }

    async getPasswordByName(name) {
        const selectPassword = 'select password from `user` where name=(?);';
        return await servicePromise(selectPassword, [name]);
    }
}

module.exports = new LoginService();