/**
 * 测试接口
 * @param {*} Router 
 * @returns 
 */
const {authVerify}  = require("../middleware/loginVerify")
function createTest(Router){
    const testRouter = new Router({prefix:'/test'});
    testRouter.get('/',authVerify,(ctx,next) => {
        ctx.body = "success";
    }); 
    return testRouter;
}

module.exports = createTest;