# API
- [시작하기](../README.md)
- [Basic](#basic)
  - [_go](#go)
  - [_pipe](#pipe)

## Basic
### _go
첫 번째 인자로 데이터를 받고, 두 번째 인자부터 함수를 받는다. 첫 번째 인자로 받은 값을 두 번째 인자 함수에 대입하여 실행하며 실행한 결과값을 다음 함수의 인자로 계속해서 전달한다
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
인자로 함수들을 받으며 결과값으로 첫 번째 인자로 받은 함수의 인자를 받는 함수를 리턴한다. 리턴된 함수를 실행하면 인자로 받아두었던 함수를 차례로 실행하며 각 함수의 리턴값을 다음 함수의 인자로 부여한다
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