const keysL = require('../lazy/keysL.js');

const takeAllC = require('./takeAllC.js');

function keysC(object) {
  return takeAllC(keysL(object));
}

module.exports = keysC;