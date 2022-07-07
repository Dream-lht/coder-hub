const servicePromise = require('../utils/servicePromise');

class LoginService{
    async Login(){
        return new Promise.resolve("成功");
    }
}

module.exports = new LoginService;