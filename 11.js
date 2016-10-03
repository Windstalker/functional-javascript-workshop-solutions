module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce((previous, current, i) => {
    previous.push(fn.call(thisArg, current, i, arr));
    return previous;
  }, []);
};
