const connection = require("../app/database");
function servicePromise(sql,values){
    return new Promise((resolve,reject) => {
        connection.execute(sql,values,(err, results, fields) => {
            if(err){
                reject(err);
                console.log(err);
            }else{
                resolve(results);
            }
        });
    })
}

module.exports = servicePromise;