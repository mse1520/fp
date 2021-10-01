const entriesL = require('../lazy/entriesL.js');

const takeAllC = require('./takeAllC.js');

function entriesC(object) {
  return takeAllC(entriesL(object));
}

module.exports = entriesC;