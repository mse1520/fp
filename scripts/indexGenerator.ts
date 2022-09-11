import { resolve } from 'path';
import { readdir, writeFile } from 'fs/promises';
import filterL from '@lazy/filterL';
import _go from 'src/basic/_go';
import mapL from '@lazy/mapL';
import _flatL from 'src/lazy/_flatL';
import _flatMapL from '@lazy/flatMapL';
import head from '@basic/head';
import _join from 'src/basic/_join';
import _curry from 'src/basic/_curry';

const SRC_PATH = resolve('src');
const INDEX_REGEX = /basic|lazy|concurrency/;
const INDEX_PATH = resolve(SRC_PATH, 'index.ts');

function getFiles(dir: string) {
  return readdir(resolve(SRC_PATH, dir));
}

function makeExportSyntax([dir, files]: [string, Promise<string[]>]): Generator<Promise<string>, void> {
  return _go(
    files,
    mapL((file: string) => head(file.split('.'))),
    mapL((name: string) => `export { default as ${name} } from '@${dir}/${name}';`)
  );
}

const _writeFile = _curry((path: string, text: string) => {
  writeFile(path, text);
  return text;
});

_go(
  readdir(SRC_PATH),
  filterL((v: string) => INDEX_REGEX.test(v)),
  mapL((dir: string) => [dir, getFiles(dir)]),
  _flatMapL(makeExportSyntax),
  _join('\n'),
  _writeFile(INDEX_PATH),
  () => console.log('Generate index')
);