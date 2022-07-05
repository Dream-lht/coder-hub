const connection = require('../app/database');

class UserService{
    async createUser(user){
        const {name,password} = user;
        console.log(name,password);
        return new Promise((resolve,reject) => {
            const insertUser = 'INSERT INTO `user` (name,password) VALUE (?,?);'
            connection.execute(insertUser,[name,password],(err, results, fields) => {
                if(err){
                    console.log('插入失败',err);
                    reject(err);
                }else{
                    console.log("插入成功",results);
                    resolve(results);
                }
            })
        })
    }
}

module.exports = new UserService();