function reduce(arr, fn, initial) {
  return (function step(current, i) {
    if (i < arr.length) {
      const next = fn(current, arr[i], i, arr);
      return step(next, i + 1);
    }
    return current;
  }(initial, 0));
}

module.exports = reduce;
