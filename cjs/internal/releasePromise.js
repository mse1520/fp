const catchNoop = require('./catchNoop.js');

function releasePromise(target, predicate, ...args) {
  return target instanceof Promise ? catchNoop(target.then(target => predicate(target, ...args))) : predicate(target, ...args);
}

module.exports = releasePromise;