const takeAll = require('./takeAll.js');

const entriesL = require('../lazy/entriesL.js');

function entries(object) {
  return takeAll(entriesL(object));
}

module.exports = entries;