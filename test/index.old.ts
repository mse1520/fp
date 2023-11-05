// import {
//   curry, curryRight, deepFlat, deepFlatL, delay, entries, entriesL, filter, filterC, filterL, flat, flatL, flatMap,
//   flatMapL, forEach, forEachC, forEachL, go, groupBy, head, identity, join, keys, keysL, last, map, mapC, mapL, object,
//   objectC, pipe, range, rangeL, reduce, reduceC, reject, rejectC, rejectL, take, takeAll, takeAllC, takeC, takeL, tap, values, valuesL
// } from '../src';

// (async () => {
//   // curry
//   (() => {
//     const add = (a: number, b: number, c: number) => `a: ${a}, b: ${b}, c:${c}`;
//     const curring = curry(add);

//     console.log('------- curry --------');
//     console.log(curring(1, 2, 3));
//     console.log(curring(1, 2)(3));
//     console.log(curring(1)(2, 3));
//     console.log(curring(1)(2)(3));
//     console.log('------- curry --------');
//   })();

//   // curryRight
//   (() => {
//     const add = (a: number, b: number, c: number) => `a: ${a}, b: ${b}, c:${c}`;
//     const curring = curryRight(add);

//     console.log('------- curryRight --------');
//     console.log(curring(1, 2, 3));
//     console.log(curring(2, 3)(1));
//     console.log(curring(3)(1, 2));
//     console.log(curring(3)(2)(1));
//     console.log('------- curryRight --------');
//   })();

//   // take
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = take(data, 5);

//     console.log('take', result);
//   })();

//   // takeAll
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = takeAll(filterL(data, v => v % 2));

//     console.log('takeAll', result);
//   })();

//   // head
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = head(data);

//     console.log('head', result);
//   })();

//   // map
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = map(data, v => v + 1);

//     console.log('map:', result);
//   })();

//   // forEach
//   (() => {
//     const data = [1, 2, 3];

//     console.log('------- forEach --------');
//     const result = forEach(data, v => console.log(v + 1));
//     console.log(result);
//     console.log('------- forEach --------');
//   })();

//   // filter
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = filter(data, v => v % 2);

//     console.log('filter', result);
//   })();

//   // reject
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = reject(data, v => v % 2);

//     console.log('reject', result);
//   })();

//   // reduce
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = reduce(data, (acc, cur) => acc + cur);

//     console.log('reduce', result);
//   })();

//   // go
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = go(
//       data,
//       filterL((v: number) => v % 2),
//       map((v: number) => v.toString())
//     );

//     console.log('go', result);
//   })();

//   // pipe
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result: (data: number[]) => string[] = pipe(
//       filterL((v: number) => v % 2),
//       map((v: number) => v.toString())
//     );

//     console.log('pipe', result(data));
//   })();

//   // tap
//   (() => {
//     const data = [1, 2, 3, 4, 5];

//     console.log('------- tap --------');
//     go(
//       data,
//       tap(
//         filter((v: number) => v % 2),
//         (v: any) => console.log(v)
//       ),
//       reject((v: number) => v % 2),
//       (v: any) => console.log(v)
//     );
//     console.log('------- tap --------');
//   })();

//   // join
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = join(data, ',');

//     console.log('join', result);
//   })();

//   // last
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = last(data);

//     console.log('last', result);
//   })();

//   // identity
//   (() => {
//     const data = 'data!!';
//     const result = identity(data);

//     console.log('identity', result);
//   })();

//   // range
//   (() => {
//     console.log('------- range --------');
//     console.log(range(10));
//     console.log(range(0, 10));
//     console.log(range(0, 10, 2));
//     console.log(range(-10));
//     console.log(range(0, -10));
//     console.log(range(0, -10, 2));
//     console.log('------- range --------');
//   })();

//   // delay
//   await (async () => {
//     const value = await delay('data!!', 500);

//     console.log('delay', value);
//   })();

//   // flat
//   (() => {
//     const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];

//     console.log('------- flat --------');
//     console.log(flat(data));
//     console.log(flat(data, 2));
//     console.log('------- flat --------');
//   })();

//   // deepFlat
//   (() => {
//     const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];
//     const result = deepFlat(data);

//     console.log('deepFlat', result);
//   })();

//   // flatMap
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = flatMap(data, v => [v, v * 2]);

//     console.log('flatMap', result);
//   })();

//   // keys
//   (() => {
//     const data = { arg1: 1, arg2: 2 };
//     const result = keys(data);
//     console.log('keys', result);
//   })();

//   // values
//   (() => {
//     const data = { arg1: 1, arg2: 2 };
//     const result = values(data);
//     console.log('values', result);
//   })();

//   // entries
//   (() => {
//     const data = { arg1: 1, arg2: 2 };
//     const result = entries(data);
//     console.log('entries', result);
//   })();

//   // object
//   (() => {
//     const data: [string, number][] = [['arg1', 1], ['arg2', 2]];
//     const result = object(data);
//     console.log('object', result);
//   })();

//   // groupBy
//   (() => {
//     const data: [string, number][] = [['arg1', 1], ['arg2', 1], ['arg3', 2]];
//     const result = groupBy(data, ([, v]) => v);
//     console.log('groupBy', result);
//   })();

//   // takeL
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = takeL(data, 3);

//     console.log('takeL', ...result);
//   })();

//   // mapL
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = mapL(data, v => v + 1);

//     console.log('------- mapL --------');
//     console.log(result.next());
//     console.log(result.next());
//     console.log(...result);
//     console.log('------- mapL --------');
//   })();

//   // forEachL
//   (() => {
//     const data = [1, 2, 3];

//     console.log('------- forEachL --------');
//     const result = forEachL(data, v => console.log(v + 1));
//     result.next();
//     result.next();
//     console.log(result);
//     console.log('------- forEachL --------');
//   })();

//   // filterL
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = filterL(data, v => v % 2);

//     console.log('filterL', ...result);
//   })();

//   // rejectL
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = rejectL(data, v => v % 2);

//     console.log('rejectL', ...result);
//   })();

//   // rangeL
//   (() => {
//     console.log('------- rangeL --------');
//     console.log(...rangeL(10));
//     console.log(...rangeL(0, 10));
//     console.log(...rangeL(0, 10, 2));
//     console.log(...rangeL(-10));
//     console.log(...rangeL(0, -10));
//     console.log(...rangeL(0, -10, 2));
//     console.log('------- rangeL --------');
//   })();

//   // flatL
//   (() => {
//     const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];

//     console.log('------- flatL --------');
//     console.log(...flatL(data));
//     console.log(...flatL(data, 2));
//     console.log('------- flatL --------');
//   })();

//   // deepFlatL
//   (() => {
//     const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];
//     const result = deepFlatL(data);

//     console.log('deepFlatL', ...result);
//   })();

//   // flatMapL
//   (() => {
//     const data = [1, 2, 3, 4, 5];
//     const result = flatMapL(data, v => [v, v * 2]);

//     console.log('flatMapL', ...result);
//   })();

//   // keysL
//   (() => {
//     const data = { arg1: 1, arg2: 2 };
//     const result = keysL(data);
//     console.log('keysL', ...result);
//   })();

//   // valuesL
//   (() => {
//     const data = { arg1: 1, arg2: 2 };
//     const result = valuesL(data);
//     console.log('valuesL', ...result);
//   })();

//   // entriesL
//   (() => {
//     const data = { arg1: 1, arg2: 2 };
//     const result = entriesL(data);
//     console.log('entriesL', ...result);
//   })();

//   // takeC
//   await (async () => {
//     console.log('------- takeC --------');
//     await testC('take', take(Infinity));
//     await testC('takeC', takeC(Infinity));
//     console.log('------- takeC --------');
//   })();

//   // takeAllC
//   (() => {
//     const data = [1, 2, 3, 4, 5];

//     console.log('------- takeAllC --------');
//     console.log('takeC', takeC(data, 3));
//     console.log('takeAllC', takeAllC(data));
//     console.log('------- takeAllC --------');
//   })();

//   // mapC
//   await (async () => {
//     console.log('------- mapC --------');
//     await testC('map', map((v: number) => v + 1));
//     await testC('mapC', mapC((v: number) => v + 1));
//     console.log('------- mapC --------');
//   })();

//   // forEachC
//   await (async () => {
//     console.log('------- forEachC --------');
//     await testC('forEach', forEach(identity));
//     await testC('forEachC', forEachC(identity));
//     console.log('------- forEachC --------');
//   })();

//   // filterC
//   await (async () => {
//     console.log('------- filterC --------');
//     await testC('filter', filter((v: number) => v % 2));
//     await testC('filterC', filterC((v: number) => v % 2));
//     console.log('------- filterC --------');
//   })();

//   // rejectC
//   await (async () => {
//     console.log('------- rejectC --------');
//     await testC('reject', reject((v: number) => v % 2));
//     await testC('rejectC', rejectC((v: number) => v % 2));
//     console.log('------- rejectC --------');
//   })();

//   // reduceC
//   await (async () => {
//     console.log('------- reduceC --------');
//     await testC('reduce', reduce((acc: number, cur: number) => acc + cur));
//     await testC('reduceC', reduceC((acc: number, cur: number) => acc + cur));
//     console.log('------- reduceC --------');
//   })();

//   // objectC
//   await (async () => {
//     function test(key: string, func: Function) {
//       console.time(key);
//       return go(
//         rangeL(5),
//         mapL((v: number) => [`arg${v}`, v]),
//         mapL(delay(500)),
//         func,
//         (v: any) => console.log(key, v),
//         () => console.timeEnd(key)
//       );
//     }

//     console.log('------- objectC --------');
//     await test('object', object);
//     await test('objectC', objectC);
//     console.log('------- objectC --------');
//   })();
// })();

// function testC(key: string, func: Function, time = 500) {
//   console.time(key);
//   return go(
//     rangeL(5),
//     mapL(delay(time)),
//     func,
//     (v: any) => console.log(key, v),
//     () => console.timeEnd(key)
//   );
// }