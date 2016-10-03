function Spy(target, methodName) {
  const spy = {
    count: 0,
  };
  const method = target[methodName];
  target[methodName] = function (...args) {
    spy.count += 1;
    return method.call(target, ...args);
  };
  return spy;
}

module.exports = Spy;
