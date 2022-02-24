import _curry from './_curry.js';

function _match(regexp, str) {
  return typeof str === 'string' && regexp instanceof RegExp ? str.match(regexp) : undefined;
}

export default _curry(_match);