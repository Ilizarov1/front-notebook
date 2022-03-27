// 偶数间隔1秒，奇数间隔2秒打印；
async function solution(arr) {
  for (const n of arr) {
    await printAsync(n);
  }
}

function printAsync(num) {
  let delay = 1000;
  if (num % 2 === 1) delay = 2000;
  return new Promise((reslove) => {
    setTimeout(() => {
      console.log(num);
      reslove();
    }, delay);
  });
}

solution([1, 2, 3, 4, 5]);
