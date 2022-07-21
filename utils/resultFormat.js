/**
 * 对返回结果进行JSON格式化
 */

function resultFormat(status = 200,data = [],message = ''){
    return {
        status:status,
        data:data,
        message:message
    }
}

module.exports = resultFormat;