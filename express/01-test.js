//目标：创建并启动Web服务器，并在浏览器上显示内容

//1. 加载express模块
const express = require("express");

//2. 创建服务器
const app = express();

//3. 启动服务器
app.listen(3000, () => {
  console.log("express-server is running...");
});

//4. 监听浏览器请求
//app.post() 来监听post请求
//app.get() 来监听get请求

//当url地址为： http://127.0.0.1:3000/index时，
//进入下面方法来进行处理
//param1: url地址
//param2: 当监听到浏览器请求之后触发的回调函数
//req: 请求对象，就是http模块中的req对象
//res: 响应对象，就是http模块中的res对象

app.get("/index", (req, res) => {
  //end方法也是http模块提供的方法
  res.end("Hello Express");
});

app.get("/list", (req, res) => {
  //send方法是express提供的方法
  res.send("列表页");
});

//其他的地址一概进入下面来处理
app.get("*", (req, res) => {
  res.end("404 not found");
});
