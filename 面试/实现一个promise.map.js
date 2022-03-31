/**
 * 实现一个异步的map
 */

if (!Promise.map) {
  Promise.map = function (vals, cb) {
    // 等待所有map后的promise
    return Promise.all(
      vals.map((val) => {
        // 用map后决议的promise代替原来的promise
        return new Promise((resolve) => {
          cb(val, resolve);
        });
      })
    );
  };
}

let p1 = Promise.resolve(21);
let p2 = Promise.resolve(42);
let p3 = Promise.reject('oops');

Promise.map([p1, p2, p3], (pr, done) => {
  // 保证是promise
  Promise.resolve(pr).then((v) => {
    // 提取值作为v
    // map完成的v到新值
    done(v * 2);
    // 或者map到reject信息
  }, done);
}).then((vals) => {
  console.log(vals);
});
