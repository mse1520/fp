# underbarjs
![npm](https://img.shields.io/npm/v/underbarjs)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/underbarjs)
![npm](https://img.shields.io/npm/dt/underbarjs)
![NPM](https://img.shields.io/npm/l/underbarjs)

underbarjs는 함수형 프로그래밍을 연습하면서 만들게 된 라이브러리입니다  
- [API](./docs/api.md)

## 시작하기
#### 브라우저
cdn 방식은 과거의 버전을 지원하지 않습니다 npm을 통해 번들파일을 받아 사용하세요
```html
<script src="https://mse1520.github.io/underbarjs/dist/underbarjs.min.js"></script>
```
- 사용법
  ```html
  <script>
  _.go(
    _.range(5),
    _.map(a => a * a),
    console.log
  );
  </script>
  ```

#### node.js
```
npm install underbarjs
```
- CommonJS
  ```javascript
  const _ = require('uderbarjs');
  
  _.go(
    _.range(5),
    _.map(a => a * a),
    console.log
  );
  ```
- ES6 Module
  ```javascript
  import _ from 'uderbarjs';
  
  _.go(
    _.range(5),
    _.map(a => a * a),
    console.log
  );
  ```