import path from 'path';
import { watch } from 'fs';
import { readdir } from 'fs/promises';
import { spawn } from 'child_process';

import _curryRight from '../src/basic/_curryRight.js';
import _last from '../src/basic/_last.js';
import _go from '../src/basic/_go.js';
import _mapL from '../src/lazy/_mapL.js';
import _rejectL from '../src/lazy/_rejectL.js';
import _forEachC from '../src/concurrency/_forEachC.js';

const SRC_PATH = path.resolve('src');
const FILE_REGEX = /(internal|.j(s|son)$)/;

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

  watch(path.resolve(SRC_PATH, dir), (type, file) => {
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
  _rejectL(file => FILE_REGEX.test(file)),
  _mapL(dir => path.resolve(SRC_PATH, dir)),
  _forEachC(watchAndRun('npm.cmd', 'run', 'generate-index')),
  paths => console.log('Ready to generate index:', paths)
);

runProcess('npx.cmd', 'live-server', '--open=./test');