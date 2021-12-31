import _curry from './_curry.js';

function regexTest(regex, str) {
  return regex.test(str);
}

export default _curry(regexTest);