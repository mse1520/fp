const takeAll = require('./takeAll.js');

const valuesL = require('../lazy/valuesL.js');

function values(object) {
  return takeAll(valuesL(object));
}

module.exports = values;