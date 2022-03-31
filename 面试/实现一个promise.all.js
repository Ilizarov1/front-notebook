function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const _promises = Array.from(promises);
    // 通过一个数组管理
    const ret = [];
    let cnt = 0;

    _promises.forEach((promise) => {
      // 对每个数组项进行封装，将结果装入数组
      Promise.resolve(promise)
        .then((res) => {
          ret.push(res);
          // 收集到全部决议后promise后，对主promise进行决议
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
