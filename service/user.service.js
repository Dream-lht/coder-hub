const servicePromise = require("../utils/servicePromise");

class UserService{
    async createUser(user){
        const {name,password} = user;
        const insertUser = 'INSERT INTO `user` (name,password) VALUE (?,?);'
        return servicePromise(insertUser,[name,password]);
    }

    async getUserInfoByName(name){
        const selectUserByName = 'select * from `user` where name=(?);'
        return await servicePromise(selectUserByName,[name]);
    }

    async getUserIdByName(name){
        const selectUserByName = 'select id from `user` where name=(?);'
        return await servicePromise(selectUserByName,[name]);
    }
}

module.exports = new UserService();