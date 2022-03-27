/**
 * 触发后一段时间不触发
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
function throttle(fn, delay) {
  let vaild = true;
  return () => {
    if (!vaild) return;
    vaild = false;
    setTimeout(() => {
      fn();
      vaild = true;
    }, delay);
  };
}
function throttle2(fn, delay) {
  // 初始化定时器
  let timer = null;
  // 上一次调用时间
  let prev = null;
  // 返回闭包函数
  return function () {
    // 现在触发事件时间
    let now = Date.now();
    // 触发间隔是否大于delay
    let remaining = delay - (now - prev);
    // 保存事件参数
    const args = arguments;
    // 清除定时器
    clearTimeout(timer);
    // 如果间隔时间满足delay
    console.log('throttle this:' + this);
    if (remaining <= 0) {
      // 调用fn，并且将现在的时间设置为上一次执行时间
      fn.apply(this, args);
      prev = Date.now();
    } else {
      // 否则，过了剩余时间执行最后一次fn
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  };
}
function test() {
  console.log('test this:' + this);
}

throttle2(test)();
