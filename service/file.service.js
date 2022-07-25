const servicePromise = require("../utils/servicePromise");

class FileService{
    async uplaodFile(filename, originalname, encoding, mimetype, destination, path, size,user_id){
        const insertAvatar = "INSERT INTO `files` (filename, originalname, encoding, mimetype, destination, path, size,user_id) VALUES (?,?,?,?,?,?,?,?);"
        const result = await servicePromise(insertAvatar,[filename, originalname, encoding, mimetype, destination, path, size,user_id]);
        return result;
    }
}

module.exports = new FileService();