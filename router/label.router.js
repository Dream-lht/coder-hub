const {createLabel,getLable} = require("../controller/label.controller");

function createLabelRouter(Router){
    const labelRouter = new Router({prefix:'/label'});
    // 创建标签
    labelRouter.post("/",createLabel);
    // 获取全部标签
    labelRouter.get("/",getLable);
    return labelRouter;
}

module.exports = createLabelRouter;