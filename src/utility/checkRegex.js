import _curry from '../basic/_curry.js';

function checkRegex(regex, target) {
  return regex.test(target);
}

export default _curry(checkRegex);