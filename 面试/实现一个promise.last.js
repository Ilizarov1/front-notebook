if (!Promise.last) {
  Promise.last = function (prs) {
    return new Promise((resolve, reject) => {
      let cnt = 0;
      prs.forEach((val) => {
        Promise.resolve(val).then(
          (pr) => {
            if (++cnt === prs.length) resolve(pr);
          },
          (pr) => {
            if (++cnt === prs.length) reject(pr);
          }
        );
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
Promise.last([p1, p2, p3]).then((val) => {
  console.log(val);
});
