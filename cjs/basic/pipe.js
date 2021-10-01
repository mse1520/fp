const go = require('./go.js');

function pipe(func, ...funcs) {
  return (...args) => go(func(...args), ...funcs);
}

module.exports = pipe;