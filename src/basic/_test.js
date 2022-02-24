import _curry from './_curry.js';

function _test(regexp, str) {
  return typeof str === 'string' && regexp instanceof RegExp ? regexp.test(str) : undefined;
}

export default _curry(_test);