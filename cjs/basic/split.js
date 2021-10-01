const curryRight = require('./curryRight.js');

function split(str, separator) {
  return str.split(separator);
}

;
module.exports = curryRight(split);