const takeAll = require('./takeAll.js');

const keysL = require('../lazy/keysL.js');

function keys(object) {
  return takeAll(keysL(object));
}

module.exports = keys;