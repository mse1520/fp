import { resolve } from 'path';
import { watch } from 'fs';
import { readdir } from 'fs/promises';
import { spawn } from 'child_process';

import { SRC_PATH } from './common.js';

import _curryRight from '../src/basic/_curryRight.js';
import _last from '../src/basic/_last.js';
import _go from '../src/basic/_go.js';
import _regexTest from '../src/basic/_regexTest.js';
import _mapL from '../src/lazy/_mapL.js';
import _rejectL from '../src/lazy/_rejectL.js';
import _forEachC from '../src/concurrency/_forEachC.js';

const EXCEPT_REGEX = /(internal|.j(s|son)$)/;
const GENERATE_INDEX_COMMAND = ['npm.cmd', 'run', 'generate-index'];
const LIVE_SERVER_COMMAND = ['npx.cmd', 'live-server', '--open=./test'];

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

function watchAndRun(dir, ...commands) {
  const stack = [];

  watch(resolve(SRC_PATH, dir), (type, file) => {
    const data = _last(stack);

    if (type === 'change') {
      if (data?.type !== type && data?.file !== file) return stack.push({ type, file });
      stack.pop();
    }

    console.log(`event type: ${type}`);
    console.log(file ? `file name: ${file}` : 'file name not provided');

    runProcess(...commands);
  });
}

watchAndRun = _curryRight(watchAndRun, 4);

_go(
  readdir(SRC_PATH),
  _rejectL(_regexTest(EXCEPT_REGEX)),
  _mapL(dir => resolve(SRC_PATH, dir)),
  _forEachC(watchAndRun(...GENERATE_INDEX_COMMAND)),
  paths => console.log('Ready to generate index:', paths)
);

runProcess(...LIVE_SERVER_COMMAND);