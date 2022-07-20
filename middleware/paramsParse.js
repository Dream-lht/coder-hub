/**
 * 格式化params
 */

async function paramsParse(ctx, next) {
    const url = ctx.request.url;

    const params = {};
    // 截取参数
    if (url.indexOf('?') > -1) {
        // 以？截取
        const urlSplitArr = url.split('?');

        // 以&截取
        if(urlSplitArr[1].indexOf('&') > -1){
            const splitArr = urlSplitArr[1].split('&');
            for (let item of splitArr) {
                const itemArr = item.split('=');
                params[itemArr[0]] = itemArr[1];
            }
        }else{
            const itemArr = urlSplitArr[1].split('=');
            params[itemArr[0]] = itemArr[1];
        }
    }

    ctx.paramsParse = params;
    await next();
}

module.exports = paramsParse;

