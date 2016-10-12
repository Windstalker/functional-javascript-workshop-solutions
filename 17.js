function curryN(fn, n = fn.length) {
  const nextN = n - 1;
  return (arg) => {
    if (nextN <= 0) {
      return fn(arg);
    }
    return curryN(fn.bind(this, arg), nextN);
  };
}

module.exports = curryN;
