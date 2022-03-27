function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const _promises = Array.from(promises);
    const ret = [];
    let cnt = 0;

    _promises.forEach((promise) => {
      // 对每个数组项进行封装，将结果装入数组
      Promise.resolve(promise)
        .then((res) => {
          ret.push(res);
          if (++cnt === _promises.length) resolve(ret);
        })
        // 返回错误
        .catch((e) => {
          reject(e);
        });
    });
  });
}
myPromiseAll([1, Promise.reject(2), 3]).catch((res) => {
  console.log(res);
});
