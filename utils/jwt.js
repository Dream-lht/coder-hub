const jwt = require("jsonwebtoken");

const tokenError = {
    TOKEN_ERROR_OTHER:"TOKEN_ERROR_OTHER",
}

function handleResult(isQuery=false,code=500,data = {},message = tokenError.TOKEN_ERROR_OTHER) { 
    const result = {};
    result.isQuery = isQuery;
    result.data = data;
    result.code = code;
    result.message = message;
    return result;
}

class JWT {
    constructor(data) {
        this.data = data;
        this._id = null;
        this._date = 60 * 30;  // 过期时间
        this._createTime = null;  // 生成时间
        this._algorithm = "HS256";  // 加密算法
        this._Public_key = 'shhhhh';  // 盐加密秘钥
    }
    // 生成Token
    generateToken(data) {
        if (data) {
            this.data = data;
        }

        // 创建时间
        this._createTime = Math.floor(Date.now / 1000);
        // 过期时间
        const token = jwt.sign({
            data: this.data,
            iat: this._createTime
        }, this._Public_key, {
            // 过期时间
            expiresIn: this._date,
            // 加密算法
            algorithm: this._algorithm,
        });

        return token;
    }
    // 校验Token
    verifyToken(token) {
        try {
            const data = jwt.verify(token, this._Public_key, { algorithms: this._algorithm });
            return handleResult(true,200,data,"success");
        } catch (error) {
            return handleResult(false,500,{},tokenError.TOKEN_ERROR_OTHER);
        }
    }
    // 重新生成Token
    refreshToken(){}
}





module.exports = new JWT();