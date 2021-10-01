const curryRight = require('./curryRight.js');

const _object = require('./object.js');

const mapL = require('../lazy/mapL.js');

const entriesL = require('../lazy/entriesL.js');

function mapObject(object, predicate) {
  return _object(mapL(entriesL(object), ([key, value], index) => [key, predicate(value, index)]));
}

;
module.exports = curryRight(mapObject);