const valuesL = require('../lazy/valuesL.js');

const takeAllC = require('./takeAllC.js');

function valuesC(object) {
  return takeAllC(valuesL(object));
}

module.exports = valuesC;