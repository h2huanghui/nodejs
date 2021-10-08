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

//4. 监听浏览器请求
server.on('request', (req, res) => {
  //req对象的url属性中保存了当前请求的url地址
  // console.log(req.url);
  const url = req.url;
  if (url === '/') {
    //调用fs.readFile读取index.html页面
    fs.readFile('../view/index.html', (err, data) => {
      if (err) {
        return res.end("not found")
      }
      res.end(data);
    })
  } else if (url === '/login') {
    fs.readFile('../view/login.html', (err, data) => {
      if (err) {
        return res.end("not found")
      }
      res.end(data);
    })
  }
})