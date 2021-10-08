//目标：不同的url地址显示不同的内容

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
  console.log(req.url);
  const url = req.url;
  if (url === '/') {
    res.end('index-page');
  } else if (url === '/admin/login') {
    res.end('login-page');
  } else if (url === '/goods/list') {
    res.end('list-page');
  } else {
    res.end('not found');
  }
})