//目标： 向b.txt文件中追加写入一个字符串

const fs = require('fs');

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

fs.appendFile('./file/b.txt', '爱你', (err) => {
  if (err) {
    console.log(err);
  }
})