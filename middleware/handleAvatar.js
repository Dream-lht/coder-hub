const path = require('path');
const multer = require("../app/multer");

// 存储地址
const Storage = multer.diskStorage({
    destination:path.resolve('./upload/avatar'),
    filename(ctx,file,cb){
        cb(null,file.originalname);
    }
})

// 过滤文本文件
const fileFilter  = (ctx,file,cb) => {
    if(file.originalname.split('.').splice(-1) === 'txt'){
        cb(null,false);
    }else{
        cb(null,true);
    }
}

const upload = multer({storage:Storage,fileFilter:fileFilter});

module.exports = upload.single('avatar');