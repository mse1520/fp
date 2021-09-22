export function _range(start = 0, end, step = 1) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }

  const result = [];

  while (start < end) {
    result.push(start);
    start += step;
  }

  return result;
}

export function* _lRange(start = 0, end, step = 1) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }

  while (start < end) {
    yield start;
    start += step;
  }
}

export const _forEach = _curryRight((iterator, predicate) => {
  iterator = iterator[Symbol.iterator]();

  let next = iterator.next();
  while (!next.done) {
    predicate(next.value);
    next = iterator.next();
  }
});

function releasePromise(target, predicate, ...args) {
  return target instanceof Promise ? target.then(target => predicate(target, ...args)) : predicate(target, ...args);
}

export function _curry(func, arity = func.length) {
  return function curried(...args) {
    return args.length >= arity
      ? func(...args)
      : (...args2) => curried(...args, ...args2);
  };
}

export function _curryRight(func, arity = func.length) {
  return function curried(...args) {
    return args.length >= arity
      ? func(...args)
      : (...args2) => curried(...args2, ...args);
  };
}


export const _map = _curryRight((iterator, predicate) => {
  const result = [];
  iterator = iterator[Symbol.iterator]();

  return function recursive(value) {
    if (arguments.length) result.push(predicate(value));

    let next = iterator.next();
    if (!next.done) return releasePromise(next.value, recursive);

    return result;
  }();
});

export const _lMap = _curryRight(function* (iterator, predicate) {
  iterator = iterator[Symbol.iterator]();

  let next = iterator.next();
  while (!next.done) {
    yield releasePromise(next.value, predicate);
    next = iterator.next();
  }
});

export const _filter = _curryRight((iterator, predicate) => {
  const result = [];

  _forEach(iterator, value => {
    if (predicate(value)) result.push(value);
  });

  return result;
});

export const _lFilter = _curryRight(function* (iterator, predicate) {
  iterator = iterator[Symbol.iterator]();

  let next = iterator.next();
  while (!next.done) {
    if (predicate(next.value)) yield next.value;
    next = iterator.next();
  }
});

function _curryReduce(func) {
  return (first, ...args) => {
    return args.length < 1
      ? iterator => func(iterator, first, ...args)
      : typeof first === 'function'
        ? iterator => func(iterator, first, ...args)
        : func(first, ...args);
  };
}

export const _reduce = _curryReduce(function (iterator, predicate, accumulate) {
  if (arguments.length < 3) {
    iterator = iterator[Symbol.iterator]();
    return _reduce(iterator, predicate, _head(iterator));
  }

  iterator = iterator[Symbol.iterator]();

  return function recursive(accumulate, value) {
    if (arguments.length > 1) accumulate = predicate(accumulate, value);

    let next = iterator.next();
    if (!next.done) return releasePromise(accumulate, recursive, next.value);

    return accumulate;
  }(accumulate);
});

export function _go(first, ...args) {
  return _reduce(args, (acc, func) => func(acc), first);
}

export function _pipe(...funcs) {
  return arg => _go(arg, ...funcs);
}

export const _take = _curryRight((iterator, length) => {
  const result = [];
  iterator = iterator[Symbol.iterator]();

  return function recursive(value) {
    if (arguments.length) {
      result.push(value);
      if (result.length === length) return result;
    }

    let next = iterator.next();
    if (!next.done) return releasePromise(next.value, recursive);

    return result;
  }();
});

export const _takeAll = _curryRight((iterator) => {
  return _take(iterator, Infinity);
});

export function _head(iterator) {
  return _take(iterator, 1)[0];
}