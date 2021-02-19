Function.prototype.myBind = function () {
	const argLst = Array.from(arguments)
	const obj = argLst.shift()
	const self = this
	return () => self.apply(obj, argLst)
}
function fn1(a, b, c) {
	console.log('this', this)
	console.log(a, b, c)
	return 'this is fn1'
}
const fn2 = fn1.myBind({ x: 100 }, 10, 20, 30)
const res = fn2()
console.log(res)
