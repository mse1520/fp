import {
  curry, curryRight, deepFlat, deepFlatL, delay, entries, entriesL, filter, filterC, filterL, flat, flatL, flatMap, flatMapL, forEach, forEachC, forEachL,
  fromEntries, fromEntriesC, go, groupBy, groupByC, head, identity, isArray, isIterable, isString, join, joinC, keys, keysL, last, leave, map, mapC, mapL, noop, pipe,
  range, rangeL, reduce, reduceC, reject, rejectC, rejectL, take, takeAll, takeAllC, takeC, takeL, tap, toIterator, values, valuesL
} from '../src';

const testC = (key: string, func: Function, data?: any, time = 500) => {
  console.time(key);
  return go(
    !data ? rangeL(5) : data,
    mapL(delay(time)),
    func,
    (v: any) => console.log(key, v),
    () => console.timeEnd(key)
  );
};

(async () => {

  // isString
  (() => {
    const num = 1;
    const str = 'string';
    const arr = [1, 2, 3];

    console.log('------- isString --------');
    console.log(isString(num));
    console.log(isString(str));
    console.log(isString(arr));
    console.log('------- isString --------');
  })();

  // isArray
  (() => {
    const num = 1;
    const str = 'string';
    const arr = [1, 2, 3];

    console.log('------- isArray --------');
    console.log(isArray(num));
    console.log(isArray(str));
    console.log(isArray(arr));
    console.log('------- isArray --------');
  })();

  // isIterable
  (() => {
    const num = 1;
    const str = 'string';
    const arr = [1, 2, 3];

    console.log('------- isIterable --------');
    console.log(isIterable(num));
    console.log(isIterable(str));
    console.log(isIterable(arr));
    console.log('------- isIterable --------');
  })();

  // toIterator
  (() => {
    const num = 1;
    const str = 'string';
    const arr = [1, 2, 3];

    console.log('------- toIterator --------');
    console.log(toIterator(num).next());
    console.log(toIterator(str).next());
    console.log(toIterator(arr).next());
    console.log('------- toIterator --------');
  })();

  // noop
  (() => {
    console.log('noop', noop());
  })();

  // identity
  (() => {
    const data = 'data!!';
    const result = identity(data);

    console.log('identity', result);
  })();

  // delay
  await (async () => {
    const value = await delay(Promise.resolve('data!!'), 500);

    console.log('delay', value);
  })();

  // curry
  (() => {
    const add = (a: number, b: number, c: number) => `a: ${a}, b: ${b}, c:${c}`;
    const curring = curry(add);

    console.log('------- curry --------');
    console.log(curring(1, 2, 3));
    console.log(curring(1, 2)(3));
    console.log(curring(1)(2, 3));
    console.log(curring(1)(2)(3));
    console.log('------- curry --------');
  })();

  // curryRight
  (() => {
    const add = (a: number, b: number, c: number) => `a: ${a}, b: ${b}, c:${c}`;
    const curring = curryRight(add);

    console.log('------- curryRight --------');
    console.log(curring(1, 2, 3));
    console.log(curring(2, 3)(1));
    console.log(curring(3)(1, 2));
    console.log(curring(3)(2)(1));
    console.log('------- curryRight --------');
  })();

  // take
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[] = take(data, 3);

    console.log('take', result);
  })();

  // takeAll
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[] = takeAll(filterL(data, v => v % 2));

    console.log('takeAll', result);
  })();

  // head
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number = head(data);

    console.log('head', result);
  })();

  // last
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number = last(data);

    console.log('last', result);
  })();

  // range
  (() => {
    console.log('------- range --------');
    console.log(range(10));
    console.log(range(0, 10));
    console.log(range(0, 10, 2));
    console.log(range(-10));
    console.log(range(0, -10));
    console.log(range(0, -10, 2));
    console.log('------- range --------');
  })();

  // map
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = map(data, v => v + 1);

    console.log('map', result);
  })();

  // forEach
  (() => {
    const data = [1, 2, 3];

    console.log('------- forEach --------');
    const result: number[] = forEach(data, v => console.log(v + 1));
    console.log(result);
    console.log('------- forEach --------');
  })();

  // filter
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[] = filter(data, v => v % 2);

    console.log('filter', result);
  })();

  // reject
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[] = reject(data, v => v % 2);

    console.log('reject', result);
  })();

  // reduce
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number = reduce(data, (acc: number, cur) => acc + cur);

    console.log('reduce', result);
  })();

  // go
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: string[] = go(
      data,
      filterL((v: number) => v % 2),
      map((v: number) => v.toString())
    );

    console.log('go', result);
  })();

  // pipe
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: (data: number[]) => string[] = pipe(
      filterL((v: number) => v % 2),
      map((v: number) => v.toString())
    );

    console.log('pipe', result(data));
  })();

  // tap
  (() => {
    const data = [1, 2, 3, 4, 5];

    console.log('------- tap --------');
    go(
      data,
      tap(
        filter((v: number) => v % 2),
        (v: any) => console.log(v)
      ),
      reject((v: number) => v % 2),
      (v: any) => console.log(v)
    );
    console.log('------- tap --------');
  })();

  // groupBy
  (() => {
    const data = [
      ['arg1', 1],
      ['arg2', 1],
      ['arg3', 2],
    ];
    const result: Record<number, [string, number][]> = groupBy(data, ([, v]) => v);
    console.log('groupBy', result);
  })();

  // join
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: string = join(data, ',');

    console.log('join', result);
  })();

  // entries
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result: Record<string, number> = entries(data);
    console.log('entries', result);
  })();

  // fromEntries
  (() => {
    const data = [
      ['arg1', 1],
      ['arg2', 2],
    ];

    const result: Record<string, number> = fromEntries(data);
    console.log('fromEntries', result);
  })();

  // keys
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result: string[] = keys(data);
    console.log('keys', result);
  })();

  // values
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result: number[] = values(data);
    console.log('values', result);
  })();

  // flat
  (() => {
    const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];

    console.log('------- flat --------');
    console.log(flat(data));
    console.log(flat(data, 2));
    console.log('------- flat --------');
  })();

  // deepFlat
  (() => {
    const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];
    const result: number[] = deepFlat(data);

    console.log('deepFlat', result);
  })();

  // flatMap
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result: number[] = flatMap(data, v => [v, v * 2]);

    console.log('flatMap', result);
  })();

  // takeL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = takeL(data, 3);

    console.log('takeL', ...result);
  })();

  // rangeL
  (() => {
    console.log('------- rangeL --------');
    console.log(...rangeL(10));
    console.log(...rangeL(0, 10));
    console.log(...rangeL(0, 10, 2));
    console.log(...rangeL(-10));
    console.log(...rangeL(0, -10));
    console.log(...rangeL(0, -10, 2));
    console.log('------- rangeL --------');
  })();

  // mapL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = mapL(data, (v: number) => v + 1);

    console.log('------- mapL --------');
    console.log(result.next());
    console.log(result.next());
    console.log(...result);
    console.log('------- mapL --------');
  })();

  // forEachL
  (() => {
    const data = [1, 2, 3];

    console.log('------- forEachL --------');
    const result = forEachL(data, v => console.log(v + 1));
    console.log(...result);
    console.log('------- forEachL --------');
  })();

  // filterL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = filterL(data, v => v % 2);

    console.log('filterL', ...result);
  })();

  // rejectL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = rejectL(data, v => v % 2);

    console.log('rejectL', ...result);
  })();

  // entriesL
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result = entriesL(data);
    console.log('entriesL', ...result);
  })();

  // keysL
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result = keysL(data);
    console.log('keysL', ...result);
  })();

  // valuesL
  (() => {
    const data = { arg1: 1, arg2: 2 };
    const result = valuesL(data);
    console.log('valuesL', ...result);
  })();

  // flatL
  (() => {
    const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];

    console.log('------- flatL --------');
    console.log(...flatL(data));
    console.log(...flatL(data, 2));
    console.log('------- flatL --------');
  })();

  // deepFlatL
  (() => {
    const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];
    const result = deepFlatL(data);

    console.log('deepFlatL', ...result);
  })();

  // flatMapL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = flatMapL(data, v => [v, v * 2]);

    console.log('flatMapL', ...result);
  })();

  // takeC
  await (async () => {
    console.log('------- takeC --------');
    await testC('take', take(Infinity));
    await testC('takeC', takeC(Infinity));
    console.log('------- takeC --------');
  })();

  // takeAllC
  (() => {
    const data = [1, 2, 3, 4, 5];

    console.log('------- takeAllC --------');
    console.log('takeC', takeC(data, 3));
    console.log('takeAllC', takeAllC(data));
    console.log('------- takeAllC --------');
  })();

  // mapC
  await (async () => {
    console.log('------- mapC --------');
    await testC('map', map((v: number) => v + 1));
    await testC('mapC', mapC((v: number) => v + 1));
    console.log('------- mapC --------');
  })();

  // filterC
  await (async () => {
    console.log('------- filterC --------');
    await testC('filter', filter((v: number) => v % 2));
    await testC('filterC', filterC((v: number) => v % 2));
    console.log('------- filterC --------');
  })();

  // rejectC
  await (async () => {
    console.log('------- rejectC --------');
    await testC('reject', reject((v: number) => v % 2));
    await testC('rejectC', rejectC((v: number) => v % 2));
    console.log('------- rejectC --------');
  })();

  // forEachC
  await (async () => {
    console.log('------- forEachC --------');
    await testC('forEach', forEach(identity));
    await testC('forEachC', forEachC(identity));
    console.log('------- forEachC --------');
  })();

  // reduceC
  await (async () => {
    console.log('------- reduceC --------');
    await testC('reduce', reduce((acc: number, cur: number) => acc + cur));
    await testC('reduceC', reduceC((acc: number, cur: number) => acc + cur));
    console.log('------- reduceC --------');
  })();

  // groupByC
  await (async () => {
    const data = [
      ['arg1', 1],
      ['arg2', 1],
      ['arg3', 2],
      ['arg4', 2],
      ['arg5', 3],
    ];

    console.log('------- groupByC --------');
    await testC('groupBy', groupBy(([, v]: [string, number]) => v), data);
    await testC('groupByC', groupByC(([, v]: [string, number]) => v), data);
    console.log('------- groupByC --------');
  })();

  // joinC
  await (async () => {
    console.log('------- joinC --------');
    await testC('join', join(','));
    await testC('joinC', joinC(','));
    console.log('------- joinC --------');
  })();

  // fromEntriesC
  await (async () => {
    const data = [
      ['arg1', 1],
      ['arg2', 2],
      ['arg3', 3],
      ['arg4', 4],
      ['arg5', 5],
    ];

    console.log('------- fromEntriesC --------');
    await testC('fromEntries', fromEntries, data);
    await testC('fromEntriesC', fromEntriesC, data);
    console.log('------- fromEntriesC --------');
  })();

})();

// (async () => {
//   console.log('------- leave --------');
//   console.time('leave')
//   await go(
//     rangeL(Infinity),
//     mapL(delay(0)),
//     // filterL((v: number) => v % 2),
//     forEachL((v: number, i) => {
//       // console.log(v, i)
//       const body = document.querySelector('body');
//       if (body instanceof HTMLBodyElement) {
//         body.innerHTML = v + '';
//       }
//       // if (i === 4) console.timeEnd('leave')
//     }),
//     takeAll,
//     // leave,
//     // console.log
//   )
//   console.log('------- leave --------');
// })();