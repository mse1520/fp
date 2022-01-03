import { resolve } from 'path';
import { readdir, writeFile } from 'fs/promises';

import { SRC_PATH } from './common.js';

import _curry from '../src/basic/_curry.js';
import _go from '../src/basic/_go.js';
import _split from '../src/basic/_split.js';
import _head from '../src/basic/_head.js';
import _reduce from '../src/basic/_reduce.js';
import _regexTest from '../src/basic/_regexTest.js';
import _mapL from '../src/lazy/_mapL.js';
import _filterL from '../src/lazy/_filterL.js';
import _flatMapC from '../src/concurrency/_flatMapC.js';

const INDEX_REGEX = /basic|lazy|concurrency/;
const UTILITY_REGEX = /utility$/;
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

function generteIndex(regex, path, message) {
  return _go(
    readdir(SRC_PATH),
    _filterL(_regexTest(regex)),
    _mapL(dir => [dir, getFiles(dir)]),
    _flatMapC(makeExportSyntax),
    _reduce((acc, value) => `${acc}\n${value}`),
    _writeFile(path),
    _ => console.log(message)
  );
}

generteIndex(INDEX_REGEX, INDEX_PATH, 'Generate index');
generteIndex(UTILITY_REGEX, UTILITY_PATH, 'Generate utility index');