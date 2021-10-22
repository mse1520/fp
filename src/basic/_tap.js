import _curryRight from './_curryRight.js';
import _go from './_go.js';

function _tap(func, ...funcs) {
  return arg => (_go(func(arg), ...funcs), arg);
}

export default _tap;