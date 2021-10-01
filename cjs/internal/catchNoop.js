const noop = require('./noop.js');

function catchNoop(target) {
  return target.catch(noop), target;
}

module.exports = catchNoop;