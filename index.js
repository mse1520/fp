import errorNoop from './internal/errorNoop.js';
import catchNoop from './internal/catchNoop.js';
import noopHandler from './internal/noopHandler.js';
import toIterator from './internal/toiterator.js';
import releasePromise from './internal/releasePromise.js';

import _curryRight from './basic/_curryRight.js';
import _3To2CurryRight from './basic/_3To2CurryRight.js';

export { default as _split } from './basic/_split.js';
export { default as _range } from './basic/_range.js';
export { default as _curry } from './basic/_curry.js';
export { default as _curryRight } from './basic/_curryRight.js';
export { default as _identity } from './basic/_identity.js';

export { default as _rangeL } from './lazy/_rangeL.js';

export const _mapL = _curryRight(function* (iterator, predicate) {
  iterator = toIterator(iterator);

  let next, index = -1;
  while (!(index++, next = iterator.next()).done) yield releasePromise(next.value, predicate, index);
});

export const _map = _curryRight((iterator, predicate) => _takeAll(_mapL(iterator, predicate)));

export const _mapC = _curryRight((iterator, predicate) => _takeAllC(_mapL(iterator, predicate)));

export const _forEachL = _curryRight((iterator, predicate) => _mapL(iterator, (value, index) => (predicate(value, index), value)));

export const _forEach = _curryRight((iterator, predicate) =>
  _takeAll(_mapL(iterator, (value, index) => (predicate(value, index), value))));

export const _forEachC = _curryRight((iterator, predicate) =>
  _takeAllC(_mapL(iterator, (value, index) => (predicate(value, index), value))));

export const _mapEntriesL = _curryRight((entries, predicate) => _mapL(entries, ([key, value], index) => [key, predicate(value, index)]));

export const _mapEntries = _curryRight((entries, predicate) =>
  _takeAll(_mapL(entries, ([key, value], index) => [key, predicate(value, index)])));

export const _mapEntriesC = _curryRight((entries, predicate) =>
  _takeAllC(_mapL(entries, ([key, value], index) => [key, predicate(value, index)])));

export const _filterL = _curryRight(function* (iterator, predicate) {
  iterator = toIterator(iterator);

  let next, index = -1;
  while (!(index++, next = iterator.next()).done) {
    next.value instanceof Promise
      ? yield catchNoop(next.value.then(value => predicate(value, index) ? value : Promise.reject(errorNoop)))
      : predicate(next.value, index) ? yield next.value : undefined;
  }
});

export const _filter = _curryRight((iterator, predicate) => _takeAll(_filterL(iterator, predicate)));

export const _filterC = _curryRight((iterator, predicate) => _takeAllC(_filterL(iterator, predicate)));

export const _rejectL = _curryRight((iterator, predicate) => _filterL(iterator, (value, index) => !predicate(value, index)));

export const _reject = _curryRight((iterator, predicate) => _takeAll(_filterL(iterator, (value, index) => !predicate(value, index))));

export const _rejectC = _curryRight((iterator, predicate) => _takeAllC(_filterL(iterator, (value, index) => !predicate(value, index))));

export const _rejectEntriesL = _curryRight((entries, predicate) => _filterL(entries, ([_, value], index) => !predicate(value, index)));

export const _rejectEntries = _curryRight((entries, predicate) =>
  _takeAll(_filterL(entries, ([_, value], index) => !predicate(value, index))));

export const _rejectEntriesC = _curryRight((entries, predicate) =>
  _takeAllC(_filterL(entries, ([_, value], index) => !predicate(value, index))));

export const _reduce = _3To2CurryRight(function (iterator, predicate, accumulate) {
  if (arguments.length < 3) iterator = toIterator(iterator), accumulate = _head(iterator);

  iterator = toIterator(iterator);

  return releasePromise(accumulate, function recursive(accumulate, value, index) {
    if (arguments.length > 1) accumulate = predicate(accumulate, value, index);

    let next, _index = -1;
    while (!(_index++, next = iterator.next()).done) {
      if (next.value instanceof Promise)
        return noopHandler(next.value.then(value => recursive(accumulate, value, _index)), () => recursive(accumulate));
      accumulate = predicate(accumulate, next.value, _index);
      if (accumulate instanceof Promise) return accumulate.then(recursive);
    }

    return accumulate;
  });
});

export const _reduceC = _3To2CurryRight(function (iterator, predicate, accumulate) {
  let _iterator = [...iterator];
  if (arguments.length < 3) _iterator = toIterator(_iterator), accumulate = _head(_iterator);
  return _reduce(_iterator, predicate, accumulate);
});

export const _join = _curryRight((iterator, separator) =>
  _reduce(iterator, (accumulate, value) => `${accumulate}${separator}${value}`));

export const _joinC = _curryRight((iterator, separator) =>
  _reduceC(iterator, (accumulate, value) => `${accumulate}${separator}${value}`));

export function _object(list, values) {
  return arguments.length > 1
    ? _reduce(list, (object, key, index) => (object[key] = values[index], object), {})
    : _reduce(list, (object, [key, value]) => (object[key] = value, object), {})
};

export function _objectC(list, values) {
  return arguments.length > 1
    ? _reduceC(list, (object, key, index) => (object[key] = values[index], object), {})
    : _reduceC(list, (object, [key, value]) => (object[key] = value, object), {})
};

export const _mapObject = _curryRight((object, predicate) => _object(_mapEntriesL(_entriesL(object), predicate)));

export const _pick = _curryRight((object, keys) =>
  _object(_rejectEntriesL(_mapL(keys, key => [key, object[key]]), value => value === undefined)));

export function _go(first, ...args) { return _reduce(args, (acc, func) => func(acc), first); }

export function _pipe(func, ...funcs) { return (...args) => _go(func(...args), ...funcs); }

export const _take = _curryRight((iterator, length) => {
  const result = [];
  iterator = toIterator(iterator);

  return function recursive() {
    let next;
    while (!(next = iterator.next()).done) {
      if (next.value instanceof Promise) return noopHandler(
        next.value.then(value => (result.push(value), result).length === length ? result : recursive()),
        recursive);

      result.push(next.value);
      if (result.length === length) return result;
    }

    return result;
  }();
});

export const _takeC = _curryRight((iterator, predicate) => _take([...iterator], predicate));

export function _takeAll(iterator) { return _take(iterator, Infinity); };

export function _takeAllC(iterator) { return _take([...iterator], Infinity); };

export function _head(iterator) { return releasePromise(_take(iterator, 1), ([value]) => value); }

export function _headC(iterator) { return releasePromise(_takeC(iterator, 1), ([value]) => value); }

export function* _valuesL(object) { for (let key in object) yield object[key]; }

export function _values(object) { return _takeAll(_valuesL(object)) }

export function _valuesC(object) { return _takeAllC(_valuesL(object)) }

export function* _keysL(object) { for (let key in object) yield key; }

export function _keys(object) { return _takeAll(_keysL(object)); }

export function _keysC(object) { return _takeAllC(_keysL(object)); }

export function* _entriesL(object) {
  for (const key in object)
    yield object[key] instanceof Promise ? object[key].then(value => [key, value]) : [key, object[key]];
}

export function _entries(object) { return _takeAll(_entriesL(object)); }

export function _entriesC(object) { return _takeAllC(_entriesL(object)); }