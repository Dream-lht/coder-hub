const {addMomentItem,getMomentItem} = require('../controller/moment.controller');
const {authVerify} = require('../middleware/loginVerify');

function createMomentRouter(Router){
    const momentRouter = new Router({prefix:'/moment'});
    // 发布动态
    momentRouter.post('/',authVerify,addMomentItem);
    // 根据momentId查询某条动态
    momentRouter.get('/:momentId',getMomentItem);
    return momentRouter;
}

module.exports = createMomentRouter;