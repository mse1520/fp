const reduce = require('./reduce.js');

function object(list, values) {
  return arguments.length > 1 ? reduce(list, (object, key, index) => (object[key] = values[index], object), {}) : reduce(list, (object, [key, value]) => (object[key] = value, object), {});
}

;
module.exports = object;