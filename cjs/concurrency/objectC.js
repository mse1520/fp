const reduceC = require('./reduceC.js');

function objectC(list, values) {
  return arguments.length > 1 ? reduceC(list, (object, key, index) => (object[key] = values[index], object), {}) : reduceC(list, (object, [key, value]) => (object[key] = value, object), {});
}

;
module.exports = objectC;