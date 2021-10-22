import {
  _curry,
  _curryRight, _filterL, _flat, _flatC, _flatDeep, _flatDeepC, _flatDeepL, _flatL, _flatMapC, _forEach, _forEachL, _go, _identity, _last, _map,
  _mapL, _mapObject, _range, _rangeL, _take, _takeAll, _takeAllC, _takeC, _takeL, _takeUntil, _takeUntilC, _takeUntilL, _takeWhile, _takeWhileC, _takeWhileL
} from '../src/index.js';
import toIterator from '../src/internal/toiterator.js';

function delay(value) {
  return new Promise((resolve, reject) => setTimeout(() => value < 0 ? reject('error~') : resolve(value), 1000));
}

function identity(value) {
  return new Promise(resolve => resolve(value));
}

const obj = { prop1: 1, prop2: 2, prop3: 3, prop4: 4, prop5: 5 };
const objDelay = { prop1: delay(1), prop2: delay(2), prop3: delay(3), prop4: delay(4), prop5: delay(5) };

function add(a, b) { return a + b; }
function add10(value) { return value + 10; }

const users = [
  { id: 1, name: 'a', age: 10 },
  { id: 2, name: 'b', age: 38 },
  { id: 3, name: 'c', age: 20 },
  { id: 4, name: 'd', age: 30 },
  { id: 5, name: 'e', age: 21 },
  { id: 6, name: 'f', age: 18 }
];

const arr = [[delay(0), delay(1), delay(2), delay(3), delay(4)], delay(5), 6, delay([7, delay(8), 9]), delay(10)];
const arr1 = [delay(0), delay(1), delay(2), delay(3), delay(4)];
const arr2 = [[..._range(2), _range(5)], ..._range(2), _range(3), 1, 2];
const arr3 = [0, 0, 0, 0, 0, 0, 0, 1, 2];
const arr4 = [1, 2, 3, 4, 5, 6, 0, 1, 2];

console.time('')
_go(
  arr3,
  // _mapL(delay),
  _forEachL(console.log),
  _takeUntilC(_identity),
  // _takeWhileC(_identity),
  value => (console.timeEnd(''), value),
  console.log
);

function* _concatL(iterator, others) {
  iterator = toIterator(iterator);
  others = toIterator(others);

  yield* iterator;

  let next;
  while (!(next = others.next()).done) {
    next.value = toIterator(next.value);
    yield* next.value;
  }
}
_concatL = _curryRight(_concatL);

function _pushL(iterator, args) {
  return _concatL(iterator, [args]);
}
_pushL = _curryRight(_pushL);