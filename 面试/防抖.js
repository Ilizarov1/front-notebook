/**
 * 防抖，短时间内多次触发，只触发最后一次
 * @param {function} fn
 * @param {*} delay
 * @returns
 */
function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
}
