class UserService{
    async createUser(user){
        return new Promise((resolve,reject) => {
            resolve(user);
        })
    }
}

module.exports = new UserService();