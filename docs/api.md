# API
- [시작하기](../README.md)
- [Basic](#basic)
  - [isString](#isString)
  - [isArray](#isArray)
  - [isIterable](#isIterable)
  - [toIterator](#toIterator)
  - [noop](#noop)
  - [curry](#curry)
  - [curryRight](#curryright)
  - [take](#take)
  - [takeAll](#takeall)
  - [takeWhile](#takewhile)
  - [chunk](#chunk)
  - [head](#head)
  - [map](#map)
  - [forEach](#foreach)
  - [filter](#filter)
  - [reject](#reject)
  - [reduce](#reduce)
  - [go](#go)
  - [pipe](#pipe)
  - [tap](#tap)
  - [join](#join)
  - [last](#last)
  - [identity](#identity)
  - [flat](#flat)
  - [deepFlat](#deepFlat)
  - [flatMap](#flatMap)
  - [keys](#keys)
  - [values](#values)
  - [entries](#entries)
  - [fronEntries](#fronEntries)
  - [groupBy](#groupBy)
- [Lazy](#lazy)
  - [takeL](#takel)
  - [takeWhileL](#takewhilel)
  - [chunkL](#chunkl)
  - [mapL](#mapl)
  - [forEachL](#foreachl)
  - [filterL](#filterl)
  - [rejectL](#rejectl)
  - [rangeL](#rangel)
  - [flatL](#flatl)
  - [deepFlatL](#deepflatl)
  - [flatMapL](#flatmapl)
  - [keysL](#keysl)
  - [valuesL](#valuesl)
  - [entriesL](#entriesl)
- [Concurrency](#concurrency)
  - [takeC](#takec)
  - [takeAllC](#takeallc)
  - [takeWhileC](#takewhilec)
  - [chunkC](#chunkc)
  - [mapC](#mapc)
  - [forEachC](#foreachc)
  - [filterC](#filterc)
  - [rejectC](#rejectc)
  - [reduceC](#reducec)
  - [fronEntriesC](#fronEntriesc)

## Basic

### isString
입력값의 타입이 String인지 체크한 결과를 반환힙니다.
```javascript
const num = 1;
const str = 'string';
const arr = [1, 2, 3];

console.log('------- isString --------');
console.log(isString(num)); // false
console.log(isString(str)); // true
console.log(isString(arr)); // false
console.log('------- isString --------');
```
### isArray
입력값의 타입이 Array인지 체크한 결과를 반환힙니다.
```javascript
const num = 1;
const str = 'string';
const arr = [1, 2, 3];

console.log('------- isArray --------');
console.log(isArray(num)); // false
console.log(isArray(str)); // false
console.log(isArray(arr)); // true
console.log('------- isArray --------');
```
### isIterable
입력값의 타입이 Iterable인지 체크한 결과를 반환힙니다.
```javascript
const num = 1;
const str = 'string';
const arr = [1, 2, 3];

console.log('------- isIterable --------');
console.log(isIterable(num)); // false
console.log(isIterable(str)); // true
console.log(isIterable(arr)); // true
console.log('------- isIterable --------');
```
### toIterator
입력값을 Iterator 타입으로 변환합니다.
```javascript
const num = 1;
const str = 'string';
const arr = [1, 2, 3];

console.log('------- toIterator --------');
console.log(toIterator(num)); // Generator
console.log(toIterator(str)); // StringIterator
console.log(toIterator(arr)); // Array Iterator
console.log('------- toIterator --------');
```

### noop
아무것도 실행하지 않습니다.
```javascript
console.log('noop', noop()); // undefined
```

### curry
입력값의 타입이 String인지 체크한 결과를 반환힙니다.
```javascript
let add = (a, b, c) => `a: ${a}, b: ${b}, c:${c}`;
add = _.curry(add);

console.log(add(1, 2, 3)); // a: 1, b: 2, c:3
console.log(add(1, 2)(3)); // a: 1, b: 2, c:3
console.log(add(1)(2, 3)); // a: 1, b: 2, c:3
console.log(add(1)(2)(3)); // a: 1, b: 2, c:3
```

### curryRight
currying이 되어 인자를 입력받는 순서가 오른쪽부터 입력받는다.
```javascript
let add = (a, b, c) => `a: ${a}, b: ${b}, c:${c}`;
add = _.curryRight(add);

console.log(add(1, 2, 3)); // a: 1, b: 2, c:3
console.log(add(2, 3)(1)); // a: 1, b: 2, c:3
console.log(add(3)(1, 2)); // a: 1, b: 2, c:3
console.log(add(3)(2)(1)); // a: 1, b: 2, c:3
```

### take
첫 번째 인자로 iterable한 값을 받으며, 각 값중 두 번째 인자의 개수만큼 구성된 배열을 반환한다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.take(data, 3);

console.log(result); // [1, 2, 3]
```

### takeAll
인자의 모든 값을 반환합니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.takeAll(data);

console.log(result); // [1, 2, 3, 4, 5]
```

### takeWhile
첫 번째 인자로 iterable한 값을 받으며, 두번째 인자로 받은 함수를 반복마다 실행하여 falsy한 값이 나올때까지의 값을 배열로 반환합니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.takeWhile(data, v => v < 4);

console.log(result); // [1, 2, 3]
```

### chunk
첫번째 인자로 iterable한 값을 받으며, 두번째 인잘 받은 길이로 분할된 새로운 배열을 반환합니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.chunk(data, 2);

console.log(result); // [[1, 2], [3, 4], [5]]
```

### head
인자의 모든 값중 첫번째 값을 반환합니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.head(data);

console.log(result); // 1
```

### map
첫 번째 인자의 각 값을 모두 순회하면서 두 번째 인자의 함수를 실행한 결과값으로 구성된 배열을 반환한다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.map(data, v => v + 1);

console.log(result); // [2, 3, 4, 5, 6]
```

### forEach
첫 번째 인자의 각 값을 모두 순회하면서 두 번째 인자의 함수를 실행하고 첫 번째 인자를 반환한다.
```javascript
const data = [1, 2, 3];
// 2
// 3
// 4
const result = forEach(data, v => console.log(v + 1));

console.log(result); // [1, 2, 3]
```

### filter
첫 번째 인자의 각 값을 모두 순회하면서 두 번째 인자의 함수를 실행하여 반환된 값이 참인 값으로 구성된 배열을 반환한다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.filter(data, v => v % 2);

console.log(result); // [1, 3, 5]
```

### reject
첫 번째 인자의 각 값을 모두 순회하면서 두 번째 인자의 함수를 실행하여 반환된 값이 거짓인 값으로 구성된 배열을 반환한다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.reject(data, v => v % 2);

console.log(result); // [2, 4]
```

### reduce
첫 번째 인자의 각 값을 모두 순회하면서 두 번째 인자의 함수를 실행한 리턴값을 누적한다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.reduce(data, (acc, val) => acc + val);

console.log(result); // 15
```

### go
첫 번째 인자로 데이터를 받고, 두 번째 인자부터 함수를 받는다. 첫 번째 인자로 받은 값을 두 번째 인자 함수에 대입하여 실행하며 실행한 결과값을 다음 함수의 인자로 계속해서 전달한다.
```javascript
const add1 = data => data + 1;
const add2 = data => data + 2;
const add3 = data => data + 3;

const result = _.go(
  1,
  add1,
  add2,
  add3
);

console.log(result); // 7
```

### pipe
하나의 인자를 받는 함수들을 인자로 받으며 결과값을 다음 함수의 인자값으로 연속해서 전달합니다. 첫번째 인자로 받은 함수의 인자를 받는 함수를 리턴합니다.
```javascript
const add1 = data => data + 1;
const add2 = data => data + 2;
const add3 = data => data + 3;

const result = _.pipe(
  add1,
  add2,
  add3
);

console.log(result(1)); // 7
```

### tap
pipe와 같은 기능을 하지만 차이점은 전달받은 인자의 값을 그대로 반환합니다.
```javascript
// 7
const result = _.tap(
  add1,
  add2,
  add3,
  v => (console.log(v), v)
);

console.log(result(1)) // 1

```

### join
첫 번째 인자의 각 값을 모두 순회하면서 두 번째 인자의 값으로 결합한 문자열을 리턴합니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.join(data, ',');

console.log(result); // '1,2,3,4,5'
```

### last
인자의 모든 값중 마지막 값을 반환합니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.last(data);

console.log(result); // 5
```

### identity
인자로 받은 값을 리턴합니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.identity(data);

console.log(result); // [1, 2, 3, 4, 5]
```

### range
첫 번째 인자 값부터 두 번째 인자 값까지 세 번째 인자 값의 단계만큼 이동하면서 범위 값을 배열로 리턴합니다.
```javascript
console.log(_.range(5)); // [0, 1, 2, 3, 4]
console.log(_.range(-5)); // [0, -1, -2, -3, -4]
console.log(_.range(5, 10)); // [5, 6, 7, 8, 9]
console.log(_.range(10, 5)); // [10, 9, 8, 7, 6]
console.log(_.range(0, 5, 2)); // [0, 2, 4]
```

### delay
첫 변째로 받은 인자를 두 번째로 받은 인자의 시간(ms)만큼 뒤에 반환한다.
```javascript
async function excute() {
  const value = await _.delay('data', 1000);

  console.log('delay', value); // data
}

excute();
```

### flat
첫 번째 인자로 받은 값을 두 번째 인자 값의 깊이만큼 flat하게 만든 새로운 배열을 반환합니다.
```javascript
const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];

console.log(_.flat(data)); // [1, 2, 3, 4, 5, 6, 7, [8, 9], 10]
console.log(_.flat(data, 2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### deepFlat
첫 번째 인자로 받은 값을 모든 깊이만큼 flat하게 만든 새로운 배열을 반환합니다.
```javascript
const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];
const result = _.deepFlat(data);

console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### flatMap
map 함수와 flat 함수가 결함한 형태.
```javascript
const data = [1, 2, 3];
const result = _.flatMap(data, v => [v, v * 2]);

console.log(result); // [1, 2, 2, 4, 3, 6]
```

### keys
[key, value] 형태의 object에서 key 값을 배열로 반환합니다.
```javascript
const data = { arg1: 1, arg2: 2 };
const result = _.keys(data);
console.log(result); // ['arg1', 'arg2']
```

### values
[key, value] 형태의 object에서 value 값을 배열로 반환합니다.
```javascript
const data = { arg1: 1, arg2: 2 };
const result = keys(data);
console.log(result); // [1, 2]
```

### entries
[key, value] 형태의 object에서 [key, value]의 배열로 반환합니다.
```javascript
const data = { arg1: 1, arg2: 2 };
const result = _.entries(data);
console.log(result); // [['arg1', 1], ['arg2', 2]]
```

### fromEntries
[key, value]의 배열에서 [key, value] 형태의 object로 반환합니다.
```javascript
const data = [['arg1', 1], ['arg2', 2]];
const result = _.fromEntries(data);
console.log(result); // { arg1: 1, arg2: 2 }
```

### groupBy
첫 번째 인자를 두 번째 인자로 받은 함수를 실행하여 반환된 값을 key로하는 그룹을 생성합니다.
```javascript
const data = [
  { name: 'a', value: 1 }, 
  { name: 'a', value: 1 }, 
  { name: 'a', value: 2 }, 
  { name: 'a', value: 2 }, 
  { name: 'a', value: 3 }, 
  { name: 'b', value: 2 }, 
  { name: 'c', value: 2 }
];
const result1 = _.groupBy(data, name => v.name);
const result2 = _.groupBy(data, [name => v.name, name => v.value]);

console.log(result1);
// { 
//   a: [
//     { name: 'a', value: 1 }, 
//     { name: 'a', value: 1 },
//     { name: 'a', value: 2 }, 
//     { name: 'a', value: 2 },
//     { name: 'a', value: 3 }
//   ], 
//   b: [
//     { name: 'b', value: 2 }
//   ]
//   c: [
//     { name: 'c', value: 2 }
//   ]
// }
console.log(result2); 
// { 
//   a: {
//     1: [
//       { name: 'a', value: 1 }, 
//       { name: 'a', value: 1 }
//     ],
//     2: [
//       { name: 'a', value: 2 }, 
//       { name: 'a', value: 2 }
//     ],
//     3: [
//       { name: 'a', value: 3 }
//     ]
//   }, 
//   b: {
//     2: { name: 'b', value: 2 }
//   } 
//   c: {
//     2: { name: 'c', value: 2 }
//   }
// }
```

## Lazy
모든 Lazy 함수는 함수명 뒤에 L자가 붙어있으며, Generator 타입을 리턴합니다. 내장된 take 함수를 통해 배열로 받을 수 있습니다.

### takeL
take 함수의 Lazy 버전입니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.takeL(data, 3);

console.log(...result); // 1 2 3
```

### takeWhileL
takeWhile 함수의 Lazy 버전입니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.takeWhileL(data, v => v < 4);

console.log(...result); // 1 2 3
```

### chunkL
chunk 함수의 Lazy 버전입니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.chunkL(data, 2);

console.log(...result); // [1, 2] [2, 4] [5]
```

### mapL
map 함수의 Lazy 버전입니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.mapL(data, v => v + 1);

console.log(result.next()); // { value: 2, done: false }
console.log(result.next()); // { value: 3, done: false }
console.log(...result); // 4 5 6
```

### forEachL
forEach 함수의 Lazy 버전입니다.
```javascript
const data = [1, 2, 3];

const result = _.forEachL(data, v => console.log(v + 1));
result.next(); // 1
result.next(); // 2
console.log(result); // Generator
```

### filterL
filter 함수의 Lazy 버전입니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.filterL(data, v => v % 2);

console.log(...result); // 1 3 5
```

### rejectL
reject 함수의 Lazy 버전입니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _.rejectL(data, v => v % 2);

console.log(...result); // 2 4
```

### rangeL
range 함수의 Lazy 버전입니다.
```javascript
console.log(..._.rangeL(10)); // 0 1 2 3 4 5 6 7 8 9
console.log(..._.rangeL(0, 10)); // 0 1 2 3 4 5 6 7 8 9
console.log(..._.rangeL(0, 10, 2)); // 0 2 4 6 8
console.log(..._.rangeL(-10)); // 0 -1 -2 -3 -4 -5 -6 -7 -8 -9
console.log(..._.rangeL(0, -10)); // 0 -1 -2 -3 -4 -5 -6 -7 -8 -9
console.log(..._.rangeL(0, -10, 2)); // 0 -2 -4 -6 -8
```

### flatL
flat 함수의 Lazy 버전입니다.
```javascript
const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];

console.log(..._.flatL(data)); // 1 2 3 4 5 6 7 [8, 9] 10
console.log(..._.flatL(data, 2)); // 1 2 3 4 5 6 7 8 9 10
```

### deepFlatL
deepFlat 함수의 Lazy 버전입니다.
```javascript
const data = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];
const result = _.deepFlatL(data);

console.log(...result); // 1 2 3 4 5 6 7 8 9 10
```

### flatMapL
flatMap 함수의 Lazy 버전입니다.
```javascript
const data = [1, 2, 3];
const result = _.flatMapL(data, v => [v, v * 2]);

console.log(...result); // 1 2 2 4 3 6
```

### keysL
keys 함수의 Lazy 버전입니다.
```javascript
const data = { arg1: 1, arg2: 2 };
const result = _.keysL(data);
console.log(...result); // arg1 arg2
```

### valuesL
values 함수의 Lazy 버전입니다.
```javascript
const data = { arg1: 1, arg2: 2 };
const result = _.valuesL(data);
console.log(...result); // 1 2
```

### entriesL
entries 함수의 Lazy 버전입니다.
```javascript
const data = { arg1: 1, arg2: 2 };
const result = _.entriesL(data);
console.log(...result); // [['arg1', 1], ['arg2', 2]]
```

## Concurrency
- 모든 Concurrency 함수는 함수명 뒤에 C자가 붙어있습니다.
- 내장된 Lazy 함수와 함께 사용시 결과를 도출하는 과정에서 동시성을 갖습니다.
- 이해를 돕기위해 아래의 함수를 정의하고 다음의 예제를 시작하겠습니다.

### testC 함수
Concurrency 함수를 정확히 이해하기 위해 함수가 평가되는 시간을 측정하는 예제 함수입니다.
```javascript
function testC(key: string, func: Function, time = 500) {
  console.time(key);
  return go(
    rangeL(5),
    mapL(delay(time)),
    func,
    (v: any) => console.log(key, v),
    () => console.timeEnd(key)
  );
}
```

### takeC
take 함수의 Concurrency 버전입니다.
```javascript
async function excute() {
  await testC('take', _.take(3));
  await testC('takeC', _.takeC(3));

  // ----- excute result -----
  // take [0, 1, 2]
  // take: 1500 ms
  // takeC [0, 1, 2]
  // takeC: 500 ms
}

excute();
```

### takeAllC
takeAll 함수의 Concurrency 버전입니다.
```javascript
async function excute() {
  await testC('takeAll', _.takeAll);
  await testC('takeAllC', _.takeAllC);

  // ----- excute result -----
  // takeAll [0, 1, 2, 3, 4]
  // takeAll: 2500 ms
  // takeAllC [0, 1, 2, 3, 4]
  // takeAllC: 500 ms
}

excute();
```

### chunkC
chunk 함수의 Concurrency 버전입니다.
```javascript
async function excute() {
  await testC('chunk', _.chunk(2));
  await testC('chunkC', _.chunkC(2));

  // ----- excute result -----
  // chunk [[0, 1] , [2, 3], [4]]
  // chunk: 1500 ms
  // chunkC [[0, 1], [2, 3], [4]]
  // chunkC: 500 ms
}

excute();
```

### takeWhileC
takeWhile 함수의 Concurrency 버전입니다.
```javascript
async function excute() {
  await testC('takeWhile', _.takeWhile(v => v < 4));
  await testC('takeWhileC', _.takeWhileC(v => v < 4));

  // ----- excute result -----
  // takeWhile [0, 1, 2, 3, 4]
  // takeWhile: 2500 ms
  // takeWhileC [0, 1, 2, 3, 4]
  // takeWhileC: 500 ms
}

excute();
```

### mapC
map 함수의 Concurrency 버전입니다.
```javascript
async function excute() {
  await testC('map', map(v => v + 1));
  await testC('mapC', mapC(v => v + 1));

  // ----- excute result -----
  // map [1, 2, 3, 4, 5]
  // map: 2500 ms
  // mapC [1, 2, 3, 4, 5]
  // mapC: 500 ms
}

excute();
```

### forEachC
forEach 함수의 Concurrency 버전입니다.
```javascript
async function excute() {
  await testC('forEach', forEach(v => v + 1));
  await testC('forEachC', forEachC(v => v + 1));

  // ----- excute result -----
  // forEach [0, 1, 2, 3, 4]
  // forEach: 2500 ms
  // forEachC [0, 1, 2, 3, 4]
  // forEachC: 500 ms
}

excute();
```

### filterC
filter 함수의 Concurrency 버전입니다.
```javascript
async function excute() {
  await testC('filter', filter(v => v % 2));
  await testC('filterC', filterC(v => v % 2));

  // ----- excute result -----
  // filter [1, 3]
  // filter: 2500 ms
  // filterC [1, 3]
  // filterC: 500 ms
}

excute();
```

### rejectC
reject 함수의 Concurrency 버전입니다.
```javascript
async function excute() {
  await testC('reject', reject(v => v % 2));
  await testC('rejectC', rejectC(v => v % 2));

  // ----- excute result -----
  // reject [0, 2, 4]
  // reject: 2500 ms
  // rejectC [0, 2, 4]
  // rejectC: 500 ms
}

excute();
```

### reduceC
reduce 함수의 Concurrency 버전입니다.
```javascript
async function excute() {
  await testC('reduce', reduce(v => v % 2));
  await testC('reduceC', reduceC(v => v % 2));

  // ----- excute result -----
  // reduce 10
  // reduce: 2500 ms
  // reduceC 10
  // reduceC: 500 ms
}

excute();
```

### fromEntriesC
fromEntriesC 함수의 Concurrency 버전입니다.
```javascript
async function excute() {
  function test(key: string, func: Function) {
    console.time(key);
    return go(
      rangeL(5),
      mapL((v: number) => [`arg${v}`, v]),
      mapL(delay(500)),
      func,
      (v: any) => console.log(key, v),
      () => console.timeEnd(key)
    );
  }

  await test('fromEntries', fromEntries);
  await test('fromEntriesC', fromEntriesC);

  // ----- excute result -----
  // fromEntries { arg0: 0, arg1: 1, arg2: 2, arg3: 3, arg4: 4 }
  // fromEntries: 2500 ms
  // fromEntriesC { arg0: 0, arg1: 1, arg2: 2, arg3: 3, arg4: 4 }
  // fromEntriesC: 500 ms
}

excute();
```

[목차](#api)