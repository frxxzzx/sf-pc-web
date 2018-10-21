/*  
 自定义前缀/应用名/数据名/命令
 程序会建立 自定义前缀/应用名/数据名 的文件夹结构 然后为每一个命令生成一个js文件
 支持get和put方式
*/
var http_os = require('http');
var file_os = require("fs");
var url_os = require('url');
let config = JSON.parse(file_os.readFileSync("config.json", "utf-8"));
http_os.createServer(function (request, response) {
    //解析url
    try {


        var urlElementsArr = request.url.slice(1, request.url.length).split("/");
        console.log(request.url);
        let prefix = urlElementsArr[0],
            appName = urlElementsArr[1],
            dataName = urlElementsArr[2],
            command;
        let paramsPos = urlElementsArr[3].indexOf("?");
        if (paramsPos == -1) {

            command = urlElementsArr[3]
        }
        else {
            command = urlElementsArr[3].slice(0, paramsPos);
        }

        if (!(prefix && appName && dataName && command)) {

        }

        //创建结构
        let floderPathArr = (config.abspath ? config.abspath.split("/") : []).concat([config.dataFloderName, prefix, appName, dataName]);
        var rootFloder = {
            path: (config.abspath ? config.abspath + "/" : "") + [config.dataFloderName, prefix, appName, dataName].join("/"),
        }

        let countPath = "";
        floderPathArr.forEach((el) => {
            countPath += el + "/";
            if (!file_os.existsSync(countPath)) {

                file_os.mkdirSync(countPath);
            }
        })
        //创建文件
        rootFloder.dataPath = rootFloder.path + "/" + dataName + ".json";

        if (!file_os.existsSync(rootFloder.dataPath)) {

            file_os.writeFileSync(rootFloder.dataPath, "");
        }
        rootFloder.commandPath = rootFloder.path + "/" + command + ".js";
        var commandTemplate =
            `(function(){
    return function(argData,argParams){
        //argData 数据的副本
        return {

            isWrite:false,//是否覆盖数据
            //data:argData,//需要存储的新数据
            response:{//返回的数据
                code:200,
                data:{
    
                }
            }
        }
    }
})()`
        if (!file_os.existsSync(rootFloder.commandPath)) {

            file_os.writeFileSync(rootFloder.commandPath, commandTemplate);
        }


        //解析参数

        if (request.method.toUpperCase() == 'POST') {
            var postData = "";

            request.addListener("data", function (data) {
                postData += data;
            });
            /**
             * 这个是如果数据读取完毕就会执行的监听方法
             */
            request.addListener("end", function () {
                executeCommand(JSON.parse(postData));
            });
        }
        else if (request.method.toUpperCase() == 'GET') {
            var params = url_os.parse(request.url, true).query;
            executeCommand(params);
        }
        function executeCommand(params) {
            try {
                
                //执行命令
                //获取json数据
                var data = JSON.parse(file_os.readFileSync(rootFloder.dataPath, "utf-8") || null);
                var cloneData = JSON.parse(JSON.stringify(data))
                // var result = eval(new String(file_os.readFileSync(rootFloder.commandPath)))(cloneData,params);
                var result = eval(file_os.readFileSync(rootFloder.commandPath, "utf-8"))(cloneData, params);
    
                if (result.isWrite) {
                    file_os.writeFileSync(rootFloder.dataPath, JSON.stringify(result.data));
                }
                //返回结果
                response.writeHead(result.response.code, {
                    'Content-Type': "application/json"
                })
                response.end(JSON.stringify(result.response.data));
            } catch (error) {
                console.log(error);
                response.end(error.stack);
            }
        }
    }
    catch (error) {
        console.log(error);
        response.end(error.stack);
    }

})
    .listen(config.port);
console.log("service is running");










