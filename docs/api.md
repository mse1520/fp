# API
- [시작하기](../README.md)
- [Basic](#basic)
  - [_go](#go)
  - [_pipe](#pipe)
  - [_curry](#curry)
  - [_curryRight](#curryright)
  - [_map](#map)
  - [_filter](#filter)
  - [_reduce](#reduce)
  - [_take](#take)
  - [_takeAll](#takeall)
  - [_identity](#identity)
- [Lazy](#lazy)
- [Concurrency](#concurrency)

## Basic
### _go
첫 번째 인자로 데이터를 받고, 두 번째 인자부터 함수를 받는다. 첫 번째 인자로 받은 값을 두 번째 인자 함수에 대입하여 실행하며 실행한 결과값을 다음 함수의 인자로 계속해서 전달한다.
```javascript
const add1 = data => data + 1;
const add2 = data => data + 2;
const add3 = data => data + 3;

const result = _go(
  1,
  add1,
  add2,
  add3
);

console.log(result); // 7
```

### _pipe
인자로 함수들을 받으며 결과값으로 첫 번째 인자로 받은 함수의 인자를 받는 함수를 리턴한다. 리턴된 함수를 실행하면 인자로 받아두었던 함수를 차례로 실행하며 각 함수의 리턴값을 다음 함수의 인자로 부여한다.
```javascript
const add1 = data => data + 1;
const add2 = data => data + 2;
const add3 = data => data + 3;

const result = _pipe(
  add1,
  add2,
  add3
);

console.log(result(1)); // 7
```

### _curry
여러 인수을 갖는 함수를 단일 인수를 갖는 함수들의 함수열로 바꾼다. 이를 currying이라 부른다.
```javascript
let add = (a, b, c) => `a: ${a}, b: ${b}, c:${c}`;
add = _curry(add);

console.log(add(1, 2, 3)); // a: 1, b: 2, c:3
console.log(add(1, 2)(3)); // a: 1, b: 2, c:3
console.log(add(1)(2, 3)); // a: 1, b: 2, c:3
console.log(add(1)(2)(3)); // a: 1, b: 2, c:3
```

### _curryRight
currying이 되어 인자를 입력받는 순서가 오른쪽부터 입력받는다.
```javascript
let add = (a, b, c) => `a: ${a}, b: ${b}, c:${c}`;
add = _curryRight(add);

console.log(add(1, 2, 3)); // a: 1, b: 2, c:3
console.log(add(2, 3)(1)); // a: 1, b: 2, c:3
console.log(add(3)(1, 2)); // a: 1, b: 2, c:3
console.log(add(3)(2)(1)); // a: 1, b: 2, c:3
```
### _map
첫 번째 인자의 각 값을 모두 순회하면서 두 번째 인자의 함수를 실행한 결과값을 반환한다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _map(data, v => v + 1);

console.log(result); // [2, 3, 4, 5, 6]
```

### _filter
첫 번째 인자의 각 값을 모두 순회하면서 두 번째 인자의 함수를 실행하여 참인 값만을 리턴한다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _filter(data, v => v % 2);

console.log(result); // [1, 3, 5]
```

### _reduce
첫 번째 인자의 각 값을 모두 순회하면서 두 번째 인자의 함수를 실행한 리턴값을 누적한다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _reduce(data, (acc, val) => acc + val);

console.log(result); // 15
```

### _take
첫 번째 인자의 각 값중 두 번째 인자의 개수만큼 리턴합니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _take(data, 3);

console.log(result); // [1, 2, 3]
```

### _takeAll
인자의 모든 값을 리턴합니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _takeAll(data);

console.log(result); // [1, 2, 3, 4, 5]
```

### _identity
인자로 받은 값을 리턴합니다.
```javascript
const data = [1, 2, 3, 4, 5];
const result = _identity(data);

console.log(result); // [1, 2, 3, 4, 5]
```

### _range
입력인자: ([start=0], end, [step=1])
첫 번째 인자 값부터 두 번째 인자 값까지 세 번째 인자 값의 단계만큼 이동하면서 범위 값을 리턴합니다.
```javascript
console.log(_range(5)); // [0, 1, 2, 3, 4]
console.log(_range(-5)); // [0, -1, -2, -3, -4]
console.log(_range(5, 10)); // [5, 6, 7, 8, 9]
console.log(_range(10, 5)); // [10, 9, 8, 7, 6]
console.log(_range(0, 5, 2)); // [0, 2, 4]
```

## Lazy
## Concurrency
[목차](#api)