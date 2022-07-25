const path = require('path');
const userService = require("../service/user.service");
const fileService = require("../service/file.service");
const config = require("../app/config");
const resultFormat = require("../utils/resultFormat");

class FileController {
    // 上传头像
    async uploadFile(ctx, next) {
        const { filename, originalname, encoding, mimetype, destination, path:filePath, size } = ctx.req.file;
        // 获取用户ID
        const { name } = ctx.user;
        const { id } = (await userService.getUserIdByName(name))[0];

        const result = await fileService.uplaodFile(filename, originalname, encoding, mimetype, destination, filePath, size,id);

        //返回头像地址
        // (config.APP_SERVER_HOST,`../upload/avatar/${filename}`)
        const service_host = `${config.APP_SERVER_HOST}:${config.APP_SERVER_PORT}`;
        const avatarUrl = `${service_host}/avatar/${filename}`;
        ctx.body = resultFormat(200,avatarUrl,"upload avatar success");
    }
}

module.exports = new FileController();