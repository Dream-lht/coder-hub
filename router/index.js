// 引入路由
const Router = require('koa-router');
const fs = require('fs');

//创建User路由
function useRouter(App){
    fs.readdir(__dirname,{},(err,files) => {
        if(err) return console.error("router file read error");
        files.forEach((routerPath) => {
            if(routerPath === 'index.js') return ;
            const createRouter = require(`./${routerPath}`);
            App.use(createRouter(Router).routes());
        })
    })
}


module.exports = useRouter

