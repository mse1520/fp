import _go from './_go.js';

function _pipe(func, ...funcs) {
  return (...args) => _go(func(...args), ...funcs);
}

export default _pipe;