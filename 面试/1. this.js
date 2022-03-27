let m = 10;
function fn() {
  return this.m + 1;
}
var obj = {
  m: 5,
  test1: function () {
    return fn();
  }
};
obj.test2 = fn;

console.log(obj.test1(), fn(), obj.test2());
