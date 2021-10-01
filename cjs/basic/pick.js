const curryRight = require('./curryRight.js');

const _object = require('./object.js');

const mapL = require('../lazy/mapL.js');

const filterL = require('../lazy/filterL.js');

function pick(object, keys) {
  return _object(filterL(mapL(keys, key => [key, object[key]]), ([_, value]) => !(value === undefined)));
}

module.exports = curryRight(pick);