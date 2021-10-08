//目标：解决浏览器显示中文乱码问题 setHeader

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
  res.setHeader('content-type', 'text/html;charset=utf-8');
  if (url === '/') {
    res.end('首页');
  } else if (url === '/admin/login') {
    res.end('登录页');
  } else if (url === '/goods/list') {
    res.end('列表页');
  } else {
    res.end('not found');
  }
})