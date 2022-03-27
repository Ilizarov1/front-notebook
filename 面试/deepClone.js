function deepClone(obj, depth = Infinity, objStack = []) {
  function getKeyVals(obj) {
    // 获取包括Symbol在内的所以属性
    return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].map((key) => [
      key,
      obj[key]
    ]);
  }

  if (depth <= 0 || objStack.includes(obj)) {
    // 处理循环引用
    return null;
  }

  if (obj instanceof Date) {
    // 处理时间
    return new Date(obj);
  }
  if (Array.isArray(obj)) {
    // 处理数组
    return obj.map((o) =>
      typeof o === 'object' ? deepClone(o, depth - 1, objStack.concat([obj])) : o
    );
  }
  // 快速浅克隆
  const ret = Object.assign({}, obj);
  getKeyVals(ret).forEach(([key, val]) => {
    // 处理需要深克隆的情况
    if (typeof key === 'object') {
      ret[key] = deepClone(val, depth - 1, objStack.concat([obj]));
    }
  });
}
