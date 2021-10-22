const http = require("http");
const server = http.createServer();
server.listen(3000, () => {
  console.log("server is running...");
});

const fs = require("fs");
const path = require("path");

server.on("request", (req, res) => {
  //获取当前请求的url地址
  const url = req.url;

  //目标：先读取文件，再将文件返回给浏览器
  res.sendFile = function (fPath) {
    fs.readFile(fPath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return res.end("404 not found");
      }
      res.end(data);
    });
  };

  //__dirname: D:\frontEnd\Node\server
  //判断url地址的值，不同的地址读取不同的文件
  if (url === "/" || url === "/index") {
    res.sendFile(path.join(__dirname, "../view", "index.html"));
  } else if (url === "login") {
    res.sendFile(path.join(__dirname, "../view", "login.html"));
  } else if (url.startsWith("/public")) {
    res.sendFile(path.join(ROOTPATH, url));
  }
});
