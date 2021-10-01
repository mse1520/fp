import go from './go.js';

function pipe(func, ...funcs) {
  return (...args) => go(func(...args), ...funcs);
}

export default pipe;