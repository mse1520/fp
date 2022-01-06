import _map from '../basic/_map.js';
import _reject from '../basic/_reject.js';
import _curryRight from '../basic/_curryRight.js';
import _go from '../basic/_go.js';
import _join from '../basic/_join.js';
import _replace from '../basic/_replace.js';
import _regexTest from '../basic/_regexTest.js';

function replaceHead(value, index) {
  return index === 0
    ? value === '.' ? '' : value
    : value === '+' || value === '-' ? '' : value;
}

const findPointIndex = _curryRight((iterator, predicate) => {
  let index = 0;
  for (let value of iterator) {
    if (value === '.' && _regexTest(/[0-9]/, iterator[index - 1])) {
      predicate(index);
      break;
    }

    index++;
  }

  return iterator;
});

function floatFormatter(value) {
  let pointIndex = -1;

  return _go(
    value,
    _replace(/[^0-9|+|\-|.]/g, ''),
    _map(replaceHead),
    findPointIndex(i => pointIndex = i),
    _reject((v, i) => pointIndex !== i && v === '.'),
    _join(''),
    _replace(undefined, '')
  );
}

export default floatFormatter;