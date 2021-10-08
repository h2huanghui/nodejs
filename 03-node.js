//目标： 向files目录下的b.txt文件中写入一段字符串

//1. 导入/加载/引入 fs 模块
const fs = require('fs');

//2. 调用writeFile方法向文件中写入内容

/**
* method_description
* @author huanghui
* @date 2021/09/23 09:36
* @param {JSX} 要写的文件路径 param_description
* @param {JSX} 要写入的字符串 param_description
* @param {JSX} 字符集,默认是utf-8
* @param {JSX} 写入完成后触发的回调函数,该函数有一个参数err
* @returns {JSX}
*/
fs.writeFile('./file/b.txt', '小朋友', 'utf-8', (err) => {
  if (err) {
    console.log(err);
  }
})