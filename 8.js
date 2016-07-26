function duckCount(...args) {
  return args.filter(
    (item) => Object.prototype.hasOwnProperty.call(item, 'quack')
  ).length;
}

module.exports = duckCount;
