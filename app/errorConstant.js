const USER_OR_PASSWORD_NIT_NULL = {
    message:"用户名或者密码不能为空！",
    errorCode:400,
    type:'USER_OR_PASSWORD_NIT_NULL'
}

const USER_NAME_NOT_EQUAL = {
    message:"用户名不能重复！",
    errorCode:401,
    type:'USER_NAME_NOT_EQUAL'
}

const PASSWORD_ERROR = {
    message:"密码错误",
    errorCode:402,
    type:'PASSWORD_ERROR'
}

module.exports = {
    USER_OR_PASSWORD_NIT_NULL,
    USER_NAME_NOT_EQUAL,
    PASSWORD_ERROR
}