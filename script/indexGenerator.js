import { resolve } from 'path';
import { readdir, writeFile } from 'fs/promises';

import { SRC_PATH } from './common.js';

import _curry from '../src/basic/_curry.js';
import _go from '../src/basic/_go.js';
import _split from '../src/basic/_split.js';
import _head from '../src/basic/_head.js';
import _reduce from '../src/basic/_reduce.js';
import _mapL from '../src/lazy/_mapL.js';
import _filterL from '../src/lazy/_filterL.js';
import _rejectL from '../src/lazy/_rejectL.js';
import _flatMapC from '../src/concurrency/_flatMapC.js';
import checkRegex from '../src/utility/checkRegex.js';

const EXCEPT_REGEX = /(utility|internal|.j(s|son)$)/;
const UTILITY_REGEX = /utility/;
const INDEX_PATH = resolve(SRC_PATH, 'index.js');
const UTILITY_PATH = resolve(SRC_PATH, 'utility.js');

function getFiles(dir) {
  return readdir(resolve(SRC_PATH, dir));
}

function makeExportSyntax([dir, files]) {
  return _go(
    files,
    _mapL(file => _head(_split(file, '.'))),
    _mapL(name => `export { default as ${name} } from './${dir}/${name}.js';`),
  );
}

const _writeFile = _curry((path, text) => {
  writeFile(path, text);
  return text;
});

_go(
  readdir(SRC_PATH),
  _rejectL(checkRegex(EXCEPT_REGEX)),
  _mapL(dir => [dir, getFiles(dir)]),
  _flatMapC(makeExportSyntax),
  _reduce((acc, value) => `${acc}\n${value}`),
  _writeFile(INDEX_PATH),
  _ => console.log('Generate index')
);

_go(
  readdir(SRC_PATH),
  _filterL(checkRegex(UTILITY_REGEX)),
  _mapL(dir => [dir, getFiles(dir)]),
  _flatMapC(makeExportSyntax),
  _reduce((acc, value) => `${acc}\n${value}`),
  _writeFile(UTILITY_PATH),
  _ => console.log('Generate utility index')
);