const _map = require('../basic/_map.js');

const _reject = require('../basic/_reject.js');

const _curryRight = require('../basic/_curryRight.js');

const _go = require('../basic/_go.js');

const _join = require('../basic/_join.js');

const _replace = require('../basic/_replace.js');

const _test = require('../basic/_test.js');

function replaceHead(value, index) {
  return index === 0 ? value === '.' ? '' : value : value === '+' || value === '-' ? '' : value;
}

const findPointIndex = _curryRight((iterator, predicate) => {
  let index = 0;

  for (let value of iterator) {
    if (value === '.' && _test(/[0-9]/, iterator[index - 1])) {
      predicate(index);
      break;
    }

    index++;
  }

  return iterator;
});

function floatFormatter(value) {
  let pointIndex = -1;
  return _go(value, _replace(/[^0-9|+|\-|.]/g, ''), _map(replaceHead), findPointIndex(i => pointIndex = i), _reject((v, i) => pointIndex !== i && v === '.'), _join(''), _replace(undefined, ''));
}

module.exports = floatFormatter;