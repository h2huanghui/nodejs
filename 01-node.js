let goodsName = '小米 RedMe';

const goodsPrice = 2888;

let obj = {
  name: 'hh',
  age: '18',
  gender: '女'
}

function add(x = 3, y = 5) {
  return x + y;
}

console.log(obj.name);
console.log(add());

setTimeout(() => {
  console.log('setTimeout 输出内容');
}, 1000)

//因为nodejs中没有DOM和BOM,所以此处报错
// alert(123)

