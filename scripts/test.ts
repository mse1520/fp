import { resolve } from 'path';
import { watch } from 'fs';
import { readdir } from 'fs/promises';
import { spawn } from 'child_process';
import _go from '@basic/_go';
import _rejectL from '@lazy/_rejectL';
import _mapL from '@lazy/_mapL';
import _forEachC from '@concurrency/_forEachC';
import _takeC from '@concurrency/_takeC';
import _rejectC from '@concurrency/_rejectC';
import _reject from '@basic/_reject';
import _takeAllC from '@concurrency/_takeAllC';
import _curryRight from '@basic/_curryRight';
import _head from '@basic/_head';
import _last from '@basic/_last';
import _filterC from '@concurrency/_filterC';
import _map from '@basic/_map';

const SRC_PATH = resolve('src_v2');
const GENERATE_INDEX_COMMAND = ['npm.cmd', 'run', 'generate-index'];
const LIVE_SERVER_COMMAND = ['npx.cmd', 'live-server', '--open=./test'];

function runProcess(command: string, ...args: string[]) {
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

const watchAndRun = _curryRight((dir: string, ...commands: string[]) => {
  const stack: any[] = [];

  watch(resolve(SRC_PATH, dir), (type, file) => {
    const data = _last(stack);

    if (type === 'change') {
      if (data?.type !== type && data?.file !== file) return stack.push({ type, file });
      stack.pop();
    }

    console.log(`event type: ${type}`);
    console.log(file ? `file name: ${file}` : 'file name not provided');

    const command = _head(commands);
    const args = _filterC(commands, (_, i) => i === 0 ? false : true);
    if (!(command instanceof Promise) && !(args instanceof Promise)) runProcess(command, ...args);
  });
}, 4);

_go(
  readdir(resolve(SRC_PATH)),
  _rejectL((v: string) => /(internal|.ts$)/.test(v)),
  _map((dir: string) => resolve(SRC_PATH, dir)),
  // _forEachC(watchAndRun(...GENERATE_INDEX_COMMAND)),
  (paths: string[]) => console.log('Ready to generate index:', paths)
);

// runProcess(...LIVE_SERVER_COMMAND);