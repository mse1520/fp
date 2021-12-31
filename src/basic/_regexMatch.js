import _curry from './_curry.js';

function _regexMatch(pattern, str) {
  return typeof str === 'string' ? str.match(pattern) : null;
}

export default _curry(_regexMatch);