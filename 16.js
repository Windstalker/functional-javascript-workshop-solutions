function* getModuleDeps(module = {}) {
  const deps = module.dependencies;

  if (!deps || typeof deps !== 'object') {
    return undefined;
  }

  for (let depName of Object.keys(deps)) {
    const depInfo = deps[depName];
    yield `${depName}@${depInfo.version}`;
    yield* getModuleDeps(depInfo);
  }
}

function getDependencies(tree) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  const depsList = new Set();

  for (let dep of getModuleDeps(tree)) {
    if (typeof dep === 'string') depsList.add(dep);
  }

  return Array.from(depsList).sort((a, b) => {
    if (a === b) return 0;
    return a > b ? 1 : -1;
  });
}

module.exports = getDependencies;
