const _curry = require('../basic/_curry.js');

function checkRegex(regex, target) {
  return regex.test(target);
}

module.exports = _curry(checkRegex);