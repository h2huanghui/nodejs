//目标： 获取D:\***\NODE 目录下所有的文件和文件夹的名称

const fs = require('fs');

/**
* 调用readdir方法遍历目录
* @author huanghui
* @date 2021/10/08 10:29
* @param {JSX} 要遍历的目录的路径
* @param {JSX} 字符集,默认utf-8
* @param {JSX} 遍历完成后触发的回调函数，有两个参数err和files
*     err: 错误对象
*     files: 所有文件和目录的名称,数组形式
* @returns {JSX}
*/

fs.readdir('D:/frontEnd/Node', (err, files) => {
  if (err) {
    return console.log(err);
  }
  console.log(files);
})