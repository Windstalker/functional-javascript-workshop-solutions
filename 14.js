function repeat(operation, num) {
  return () => {
    if (num <= 0) return num;
    operation();
    return repeat(operation, --num);
  };
}

function trampoline(fn) {
  while (typeof fn === 'function') {
    fn = fn(); // eslint-disable-line no-param-reassign
  }
  return fn;
}

module.exports = function (operation, num) {
  return trampoline(() => repeat(operation, num));
};
