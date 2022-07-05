/**
 * 错误处理
 */
const errorConstant = require('./errorConstant');
function handleError(error,ctx){
    console.log(error,ctx);
    let status = null;
    let message = '';
    switch(error.message){
        case errorConstant.USER_OR_PASSWORD_NIT_NULL.type :
            status = errorConstant.USER_OR_PASSWORD_NIT_NULL.errorCode;
            message = errorConstant.USER_OR_PASSWORD_NIT_NULL.message
            break;
        default :
            status = 404;
            message = "NOT FOUND";
            break;
    }

    ctx.status = status;
    ctx.body = message;
}

module.exports = handleError;