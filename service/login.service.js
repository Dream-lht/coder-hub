const servicePromise = require('../utils/servicePromise');

class LoginService{
    async Login(){
        return "成功"
    }

    async getPasswordByName(name){
        const selectPassword = 'select password from `user` where name=(?);';
        return await servicePromise(selectPassword,[name]);
    }
}

module.exports = new LoginService;