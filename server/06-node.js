//1. 加载/导入http模块
const http = require('http');

//2. 创建服务器对象
const server = http.createServer();

//3. 开启服务器
server.listen(3001, () => {
  console.log('Server is running...');
})

//4. 监听浏览器请求并进行处理
//on: 该方法用来监听事件
/**
* method_description
* @author huanghui
* @date 2021/10/08 10:55
* @param {JSX} 事件类型,request代表浏览器请求事件
* @param {JSX} 当监听到浏览器请求后触发的回调函数,该函数中有两个参数req和res
*              req(request): 请求对象
*              res(response): 响应对象
* @returns {JSX} 
*/

server.on('request', (req, res) => {
  res.end('Hello Nodejs')
})