import { delay, filter, filterL, head, map, mapL, range, rangeL, reduce, take, takeAll, takeC, takeL } from '../src';

// const testC = (key: string, func: Function, time = 500) => {
//   console.time(key);
//   return go(
//     rangeL(5),
//     mapL(delay(time)),
//     func,
//     (v: any) => console.log(key, v),
//     () => console.timeEnd(key)
//   );
// };

(async () => {
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
    const result = mapL(data, v => v + 1);

    console.log('------- mapL --------');
    console.log(result.next());
    console.log(result.next());
    console.log(...result);
    console.log('------- mapL --------');
  })();

  // filterL
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = filterL(data, v => v % 2);

    console.log('filterL', ...result);
  })();

  // take
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = take(data, 3);

    console.log('take', result);
  })();

  // takeAll
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = takeAll(filterL(data, v => v % 2));

    console.log('takeAll', result);
  })();

  // head
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = head(data);

    console.log('head', result);
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

  // delay
  await (async () => {
    const value = await delay('data!!', 500);

    console.log('delay', value);
  })();

  // map
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = map(data, v => v + 1);

    console.log('map:', result);
  })();

  // filter
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = filter(data, v => v % 2);

    console.log('filter', result);
  })();

  // reduce
  (() => {
    const data = [1, 2, 3, 4, 5];
    const result = reduce(data, (acc: number, cur) => acc + cur);

    console.log('reduce', result);
  })();

  // takeC
  // await (async () => {
  //   console.log('------- takeC --------');
  //   await testC('take', take(Infinity));
  //   await testC('takeC', takeC(Infinity));
  //   console.log('------- takeC --------');
  // })();

  // reduceC
  // await (async () => {
  //   console.log('------- reduceC --------');
  //   await testC('reduce', reduce((acc: number, cur: number) => acc + cur));
  //   await testC('reduceC', reduceC((acc: number, cur: number) => acc + cur));
  //   console.log('------- reduceC --------');
  // })();


  // const chain = <T>(iterable: Iterable<T>) => {
  //   const chain = Promise.resolve(iterable);

  //   return {
  //     mapL<U>(predicate: (value: T, index: number) => U) {
  //       chain.then(mapL(predicate));
  //       return this;
  //     },
  //     then: (pred: any) => chain.then(pred),
  //   }
  // };

  // chain([1, 2, 3, 4, 5])
  //   .mapL(v => v + 1)
  //   .mapL(v => v + 1)
  //   .then((v: any) => console.log([...v]))
})();
