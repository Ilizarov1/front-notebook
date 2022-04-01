function Foo() {
  getName = function () {
    console.log(1);
  };
  // console.log('Foo() this:', this);
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}

//请写出以下输出结果：
Foo.getName(); // 2 访问Foo对象的属性
getName(); // 4 变量提升
Foo().getName(); //1  this -> global 访问全局作用域下的getName, Foo() 中覆盖了原先的getName
getName(); // 1
new Foo.getName(); // 2  等于 Foo.getName()
new Foo().getName(); // 3 创建新对象, 新对象上没有getName, 由原型链访问
new new Foo().getName(); // 3 同理, 一地个new 可忽略 new (new Foo().getName())
