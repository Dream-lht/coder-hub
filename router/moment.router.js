const {addMomentItem,getMomentItem,getMomentList,updateMomentItem,deleteMomentItem} = require('../controller/moment.controller');
const {authVerify} = require('../middleware/loginVerify');
const paramsParse = require("../middleware/paramsParse");
const verifyPermission = require('../middleware/momentVerify');
function createMomentRouter(Router){
    const momentRouter = new Router({prefix:'/moment'});
    // 发布动态
    momentRouter.post('/',authVerify,addMomentItem);
    // 查询moment列表
    momentRouter.get('/',paramsParse,getMomentList);
    // 根据momentId查询某条动态
    momentRouter.get('/:momentId',getMomentItem);
    
    // 修改动态
    // 验证用户是否登录->验证用户使用有权限修改这条动态
    momentRouter.patch('/:momentId',authVerify,verifyPermission,updateMomentItem);

    // 删除动态
    momentRouter.delete('/:momentId',authVerify,verifyPermission,deleteMomentItem);
    return momentRouter;
}

module.exports = createMomentRouter;