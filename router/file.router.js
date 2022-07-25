const {authVerify}  = require('../middleware/loginVerify');
const  {uploadFile} = require('../controller/file.controller');
const handleAvatar = require('../middleware/handleAvatar');
const handleFile = require('../middleware/handleFile');
function createFileRouter(Router){
    const fileRouter = new Router({prefix:'/upload'});

    //上传文件
    fileRouter.post("/",authVerify,handleFile,uploadFile)

    // 上传头像
    fileRouter.post("/avatar",authVerify,handleAvatar,uploadFile);
    return fileRouter;
}

module.exports = createFileRouter;