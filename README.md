# underbarjs
![npm](https://img.shields.io/npm/v/underbarjs)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/underbarjs)
![npm](https://img.shields.io/npm/dt/underbarjs)
![NPM](https://img.shields.io/npm/l/underbarjs)

underbarjs는 함수형 프로그래밍을 연습하면서 만들게 된 라이브러리입니다
- [API](./docs/api.md)

## 시작하기
#### 브라우저
```html
<script src="https://mse1520.github.io/underbarjs/dist/underbarjs.min.js"></script>
```
- 사용법
  ```html
  <script>
  _go(
    _range(5),
    _map(a => a * a),
    console.log
  );

  U.ipFormatter('12323.23.23ddd2222323');
  </script>
  ```

#### node.js
```
npm install underbarjs
```
- CommonJS
  ```javascript
  const { _go, _range, _map, _takeAll } = require('uderbarjs');
  const { ipFormatter } = require('uderbarjs/utility');
  
  _go(
    _range(5),
    _map(a => a * a),
    console.log
  );
  ```
- ES6 Module
  ```javascript
  import { _go, _range, _map, _takeAll } from 'uderbarjs';
  import { ipFormatter } = from 'uderbarjs/utility';
  
  _go(
    _range(5),
    _map(a => a * a),
    console.log
  );
  ```