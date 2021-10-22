//目标：不同的url地址显示不同的html页面
const fs = require('fs');
//1. 加载http模块
const http = require('http');

//2. 创建服务器
const server = http.createServer();

//3. 开启服务器
server.listen(3001, () => {
  console.log('server is running...');
})

//定义绝对路径的根目录
const rootPath = "D:/frontEnd/Node";

//4. 监听浏览器请求
server.on('request', (req, res) => {
  //req对象的url属性中保存了当前请求的url地址
  console.log("url===", req.url);
  const url = req.url;
  if (url === '/' || url === '/index' || url === '/index.html') {
    const fPath = rootPath + '/view/index.html';
    //调用fs.readFile读取index.html页面
    //param1: 要读取的文件路径，绝对路径(推荐)和相对路径
    //param2: 字符集(可选参数,一般都用utf-8)
    //param3: 读取完成后触发的回调函数,有两个参数err和data
    fs.readFile(fPath, 'utf-8', (err, data) => {
      if (err) {
        return res.end("not found")
      }
      res.end(data);
    })
  } else if (url === '/login') {
    const fPath = rootPath + '/view/login.html';
    fs.readFile(fPath, (err, data) => {
      if (err) {
        return res.end("not found")
      }
      res.end(data);
    })
  } else if (url.startsWith('/public')) {
    //url= '/public/css/a.css'
    //url= '/public/js/b.js'
    //url= '/public/img/c.jpg'
    console.log("public url===", url);
    fs.readFile(rootPath + url, (err, data) => {
      if (err) {
        return res.end('not found!')
      }
      res.end(data);
    })
  }
})