/**
 * 错误处理
 */
const errorConstant = require('./errorConstant');
function handleError(error,ctx){
    let status = null;
    let message = '';
    switch(error.message){
        case errorConstant.USER_OR_PASSWORD_NIT_NULL.type :
            status = errorConstant.USER_OR_PASSWORD_NIT_NULL.errorCode;
            message = errorConstant.USER_OR_PASSWORD_NIT_NULL.message
            break;
        case errorConstant.USER_NAME_NOT_EQUAL.type :
            status = errorConstant.USER_NAME_NOT_EQUAL.errorCode;
            message = errorConstant.USER_NAME_NOT_EQUAL.message;
            break;
        case errorConstant.PASSWORD_ERROR.type:
            message = errorConstant.PASSWORD_ERROR.message;
            status = errorConstant.PASSWORD_ERROR.errorCode;
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