function flat(arr) {
  const lst = [];
  if (Array.isArray(arr)) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        const tmp = flat(item);
        lst.push(...tmp);
      } else {
        lst.push(item);
      }
    });
  }
  return lst;
}
(function () {
  console.log(flat([1, 2, 3, [[[5]]], 6]));
})();
