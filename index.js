const errorNoop = Symbol('fp.error.noop');

function noop() { }

function catchNoop(target) { return (target.catch(noop), target); }

function noopHandler(target, predicate) {
  return target.catch(error => error === errorNoop ? predicate() : Promise.reject(error));
}

export function _range(start = 0, end, step = 1) {
  if (arguments.length === 1) end = start, start = 0;

  const result = [];
  while (start < end) result.push(start), start += step;
  return result;
}

export function* _lRange(start = 0, end, step = 1) {
  if (arguments.length === 1) end = start, start = 0;
  while (start < end) yield start, start += step;
}

function releasePromise(target, predicate, ...args) {
  return target instanceof Promise ? catchNoop(target.then(target => predicate(target, ...args))) : predicate(target, ...args);
}

export function _curry(func, arity = func.length) {
  return function curried(...args) {
    return args.length >= arity ? func(...args) : (...args2) => curried(...args, ...args2);
  };
}

export function _curryRight(func, arity = func.length) {
  return function curried(...args) {
    return args.length >= arity ? func(...args) : (...args2) => curried(...args2, ...args);
  };
}

function _3To2CurryRight(func) {
  return (first, ...args) => {
    return args.length < 1
      ? iterator => func(iterator, first, ...args)
      : typeof first === 'function'
        ? iterator => func(iterator, first, ...args)
        : func(first, ...args);
  };
}

export const _lMap = _curryRight(function* (iterator, predicate) {
  iterator = iterator[Symbol.iterator]();

  let next = iterator.next();
  while (!next.done) {
    yield releasePromise(next.value, predicate);
    next = iterator.next();
  }
});

export const _map = _curryRight((iterator, predicate) => _takeAll(_lMap(iterator, predicate)));

export const _cMap = _curryRight((iterator, predicate) => _cTakeAll(_lMap(iterator, predicate)));

export const _forEach = _curryRight((iterator, predicate) => _map(iterator, value => (predicate(value), value)));

export const _cForEach = _curryRight((iterator, predicate) => _cMap(iterator, value => (predicate(value), value)));

export const _lFilter = _curryRight(function* (iterator, predicate) {
  iterator = iterator[Symbol.iterator]();

  let next = iterator.next();
  while (!next.done) {
    next.value instanceof Promise
      ? yield catchNoop(next.value.then(value => predicate(value) ? value : Promise.reject(errorNoop)))
      : predicate(next.value) ? yield next.value : undefined;

    next = iterator.next();
  }
});

export const _filter = _curryRight((iterator, predicate) => _takeAll(_lFilter(iterator, predicate)));

export const _cFilter = _curryRight((iterator, predicate) => _cTakeAll(_lFilter(iterator, predicate)));

export const _reduce = _3To2CurryRight(function (iterator, predicate, accumulate) {
  if (arguments.length < 3) iterator = iterator[Symbol.iterator](), accumulate = _head(iterator);

  iterator = iterator[Symbol.iterator]();

  return releasePromise(accumulate, function recursive(accumulate, value) {
    if (arguments.length > 1) accumulate = predicate(accumulate, value);

    let next = iterator.next();
    while (!next.done) {
      if (next.value instanceof Promise)
        return noopHandler(next.value.then(value => recursive(accumulate, value)), () => recursive(accumulate));

      accumulate = predicate(accumulate, next.value);

      if (accumulate instanceof Promise) return accumulate.then(recursive);

      next = iterator.next();
    }

    return accumulate;
  });
});

export const _cReduce = _3To2CurryRight(function (iterator, predicate, accumulate) {
  let _iterator = [...iterator];
  if (arguments.length < 3) _iterator = _iterator[Symbol.iterator](), accumulate = _head(_iterator);
  return _reduce(_iterator, predicate, accumulate);
});

export function _go(first, ...args) { return _reduce(args, (acc, func) => func(acc), first); }

export function _pipe(...funcs) { return arg => _go(arg, ...funcs); }

export const _take = _curryRight((iterator, length) => {
  const result = [];
  iterator = iterator[Symbol.iterator]();

  return function recursive() {
    let next = iterator.next();
    while (!next.done) {
      if (next.value instanceof Promise) return noopHandler(
        next.value.then(value => (result.push(value), result).length === length ? result : recursive()),
        recursive
      );
      result.push(next.value);
      if (result.length === length) return result;

      next = iterator.next();
    }

    return result;
  }();
});

export const _cTake = _curryRight((iterator, predicate) => _take([...iterator], predicate));

export function _takeAll(iterator) { return _take(iterator, Infinity); };

export function _cTakeAll(iterator) { return _take([...iterator], Infinity); };

export function _head(iterator) { return releasePromise(_take(iterator, 1), ([value]) => value); }

export function _cHead(iterator) { return releasePromise(_cTake(iterator, 1), ([value]) => value); }