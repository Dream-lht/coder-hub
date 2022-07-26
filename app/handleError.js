/**
 * 错误处理
 */
const errorConstant = require('./errorConstant');
const resultFormat = require("../utils/resultFormat");
function handleError(error, ctx) {
    let status = null;
    let message = '';
    switch (error.message) {
        case errorConstant.USER_OR_PASSWORD_NIT_NULL.type:
            status = errorConstant.USER_OR_PASSWORD_NIT_NULL.errorCode;
            message = errorConstant.USER_OR_PASSWORD_NIT_NULL.message;
            break;
        case errorConstant.USER_NAME_NOT_EQUAL.type:
            status = errorConstant.USER_NAME_NOT_EQUAL.errorCode;
            message = errorConstant.USER_NAME_NOT_EQUAL.message;
            break;
        case errorConstant.PASSWORD_ERROR.type:
            message = errorConstant.PASSWORD_ERROR.message;
            status = errorConstant.PASSWORD_ERROR.errorCode;
            break;
        case errorConstant.TOKEN_ERROR_OTHER.type:
            message = errorConstant.TOKEN_ERROR_OTHER.message;
            status = errorConstant.TOKEN_ERROR_OTHER.errorCode;
            break;
        case errorConstant.PERMISSION_ERROR.type:
            message = errorConstant.PERMISSION_ERROR.message;
            status = errorConstant.PERMISSION_ERROR.errorCode;
            break;
        default:
            status = 404;
            message = "NOT FOUND";
            break;
    }

    
    ctx.body = resultFormat(status,[],message);
}

module.exports = handleError;