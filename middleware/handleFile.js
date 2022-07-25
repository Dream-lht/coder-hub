const multer = require('../app/multer');
const path = require('path');
const Storage = multer.diskStorage({
    destination:path.resolve(__dirname,'./upload/files'),
    filename(ctx,file,cb){
        console.log(file);
        cb(null,file.originalname);
    }
})

const upload = multer({storage:Storage});

module.exports = upload.array('file');