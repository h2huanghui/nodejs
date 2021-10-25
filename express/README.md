## 一、使用 express 构建服务器 4 步流程

### 1. 加载 express 模块

```
const express = require("express");
```

### 2. 创建 express 服务器

```
const app = express();
```

### 3. 开启 express 服务器

```
app.listen(3000, () => {
  console.log("express-server is running...");
});
```

### 4. 注册服务器事件

```
app.get(url,callback)
app.post(url,callback)
```

## 二、注册服务器事件有两个方法： get()和post()
### get 方法用来接收get请求,浏览器地址发起的请求都是get请求
### post方法用来接收post请求，接收post表单提交的请求
