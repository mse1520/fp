import path from 'path';
import { readdir, writeFile } from 'fs/promises';

import _go from '../src/basic/_go.js';
import _split from '../src/basic/_split.js';
import _head from '../src/basic/_head.js';
import _reduce from '../src/basic/_reduce.js';
import _mapL from '../src/lazy/_mapL.js';
import _rejectL from '../src/lazy/_rejectL.js';
import _flatMapC from '../src/concurrency/_flatMapC.js';

const ROOT_PATH = path.resolve('src');
const INDEX_PATH = path.resolve(ROOT_PATH, 'index.js');
const FILE_REGEX = /(internal|.j(s|son)$)/;

function getFiles(dir) {
  return readdir(path.resolve(ROOT_PATH, dir));
}

function makeExportSyntax([dir, files]) {
  return _go(
    files,
    _mapL(file => _head(_split(file, '.'))),
    _mapL(name => `export { default as ${name} } from './${dir}/${name}.js';`),
  );
}

function writeFileIndex(text) {
  writeFile(INDEX_PATH, text);
  return text;
}

_go(
  readdir(ROOT_PATH),
  _rejectL(file => FILE_REGEX.test(file)),
  _mapL(dir => [dir, getFiles(dir)]),
  _flatMapC(makeExportSyntax),
  _reduce((acc, value) => `${acc}\n${value}`),
  writeFileIndex,
  console.log
);