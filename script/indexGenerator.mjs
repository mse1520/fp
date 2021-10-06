import path from 'path';
import { readdir, writeFile } from 'fs/promises';

import _go from '../src/basic/_go.js';
import _split from '../src/basic/_split.js';
import _take from '../src/basic/_take.js';
import _reduce from '../src/basic/_reduce.js';
import _mapL from '../src/lazy/_mapL.js';
import _rejectL from '../src/lazy/_rejectL.js';
import _mapC from '../src/concurrency/_mapC.js';
import _flatC from '../src/concurrency/_flatC.js';

const ROOT_PATH = 'src';
const FILE_REGEX = /(internal|.j(s|son)$)/;

function makeExportSyntax(dir, files) {
  return _go(
    files,
    _mapL(file => _take(_split(file, '.'), 1)),
    _mapC(([name]) => `export { default as ${name} } from './${dir}/${name}.js';`),
  );
}

_go(
  readdir(path.resolve(ROOT_PATH)),
  _rejectL(file => FILE_REGEX.test(file)),
  _mapL(dir => [dir, readdir(path.resolve(ROOT_PATH, dir))]),
  _mapL(([dir, files]) => makeExportSyntax(dir, files)),
  _flatC,
  _reduce((acc, value) => `${acc}\n${value}`),
  result => writeFile(path.resolve(ROOT_PATH, 'index.js'), result)
);