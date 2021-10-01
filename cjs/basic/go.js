const reduce = require('./reduce.js');

function go(first, ...args) {
  return reduce(args, (accumulate, func) => func(accumulate), first);
}

module.exports = go;