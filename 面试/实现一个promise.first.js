if (!Promise.first) {
  Promise.first = function (prs) {
    return new Promise((resolve, reject) => {
      let cnt = 0;
      prs.forEach((pr) => {
        // 先规整化
        // 只要有一个promise决议，就对主promise进行决议
        Promise.resolve(pr).then(resolve, (err) => {
          // 全部reject
          if (++cnt === prs.length) reject(err);
        });
      });
    });
  };
}

let p1 = new Promise((resolve) => {
  setTimeout(resolve, 1000, '1');
});
let p2 = new Promise((resolve) => {
  setTimeout(resolve, 2000, '2');
});
let p3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, '3');
});
Promise.first([p1, p2, p3]).then((val) => {
  console.log(val);
});
