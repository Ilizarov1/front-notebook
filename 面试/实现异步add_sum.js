/**
  请实现一个 sum 函数，接收一个数组 arr 进行累加，并且只能使用add异步方法
  
  add 函数已实现，模拟异步请求后端返回一个相加后的值
 */
function add(a, b) {
  return Promise.resolve(a + b);
}

function sum(arr) {
  if (arr.length < 2) return arr[0];
  const reArr = [];

  // 两两加入promise数组
  for (let i = 0; i < arr.length; i += 2) {
    reArr.push(add(arr[i], arr[i + 1] || 0));
  }

  // promise all 递归
  return Promise.all(reArr).then((res) => {
    if (res.length === 1) return res[0];
    else return sum(res);
  });
}

sum([1, 2, 3, 5, 6]).then((res) => {
  console.log(res);
});
