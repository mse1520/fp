const _reduce = require('./_reduce.js');

function _object(list, values) {
  return arguments.length > 1 ? _reduce(list, (object, key, index) => (object[key] = values[index], object), {}) : _reduce(list, (object, [key, value]) => (object[key] = value, object), {});
}

;
module.exports = _object;