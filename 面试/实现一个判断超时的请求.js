if (!Promise.requestTimeout) {
  // 设置一个定时器
  const timeoutPr = function (delay) {
    return new Promise((resolve, reject) => {
      setTimeout(reject, delay);
    });
  };
  // 利用race
  Promise.requestTimeout = function (pr, limit) {
    return Promise.race([pr, timeoutPr(limit)]).then(
      (val) => {
        console.log('按时完成' + val);
      },
      () => {
        console.log('没有按时完成或者拒绝');
      }
    );
  };
}
let pr = new Promise((resolve) => {
  setTimeout(() => {
    resolve('一个pr');
  }, 1000);
});

Promise.requestTimeout(pr, 100);
