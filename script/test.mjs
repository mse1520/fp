import path from 'path';
import { watch } from 'fs';
import { readdir } from 'fs/promises';
import { spawn } from 'child_process';

import toIterator from '../src/internal/toiterator.js';
import _curryRight from '../src/basic/_curryRight.js';
import _identity from '../src/basic/_identity.js';
import _last from '../src/basic/_last.js';
import _go from '../src/basic/_go.js';
import _map from '../src/basic/_map.js';
import _forEach from '../src/basic/_forEach.js';
import _reject from '../src/basic/_reject.js';
import _takeAll from '../src/basic/_takeAll.js';
import _mapL from '../src/lazy/_mapL.js';
import _rejectL from '../src/lazy/_rejectL.js';
import _forEachC from '../src/concurrency/_forEachC.js';

const SRC_PATH = path.resolve('src');
const TEST_PATH = path.resolve('test');
const FILE_REGEX = /(internal|.j(s|son)$)/;

function watchDirectory(dir) {
  const stack = [];

  watch(path.resolve(SRC_PATH, dir), (type, file) => {
    const data = _last(stack);

    if (type === 'change') {
      if (data?.type === type && data?.file === file) {
        console.log(`event type: ${type}`);
        console.log(file ? `file name: ${file}` : 'file name not provided');

        runProcess('npm.cmd', 'test');
        stack.pop();
      } else {
        stack.push({ type, file });
      }
    } else {
      console.log(`event type: ${type}`);
      console.log(file ? `file name: ${file}` : 'file name not provided');

      runProcess('npm.cmd', 'test');
    }
  });
}

function runProcess(command, ...args) {
  const process = spawn(command, args);

  process.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
  });

  process.stderr.on('data', data => {
    console.error(`stderr: ${data}`);
  });

  process.on('close', code => {
    console.log(`child process exited with code ${code}`);
  });
}

function* _concatL(iterator, ...others) {
  iterator = toIterator(iterator);

  let next;
  while (!(next = iterator.next()).done) yield next.value;

  let index = -1;
  while ((index++, index < others.length)) {
    others[index] = toIterator(others[index]);

    while (!(next = others[index].next()).done) yield next.value;
  }
}

// function _pushL(...args) {
//   return _curryRight(_concatL, 2)(args);
// }

function _pushL(iterator, ...args) {
  return _concatL(iterator, args);
}

_pushL = _curryRight(_pushL, 2);

_go(
  readdir(SRC_PATH),
  _rejectL(file => FILE_REGEX.test(file)),
  _mapL(dir => path.resolve(SRC_PATH, dir)),
  _pushL(TEST_PATH),
  _takeAll,
  // _forEachC(watchDirectory),
  console.log
);