import { resolve } from 'path';
import { readdir, writeFile } from 'fs/promises';
import filterL from '@lazy/filterL';
import go from '@basic/go';
import mapL from '@lazy/mapL';
import flatMapL from '@lazy/flatMapL';
import head from '@basic/head';
import join from '@basic/join';
import curry from '@basic/curry';

const SRC_PATH = resolve('src');
const INDEX_REGEX = /basic|lazy|concurrency/;
const INDEX_PATH = resolve(SRC_PATH, 'index.ts');

function getFiles(dir: string) {
  return readdir(resolve(SRC_PATH, dir));
}

function makeExportSyntax([dir, files]: [string, Promise<string[]>]): Generator<Promise<string>, void> {
  return go(
    files,
    mapL((file: string) => head(file.split('.'))),
    mapL((name: string) => `export { default as ${name} } from '@${dir}/${name}';`)
  );
}

const _writeFile = curry((path: string, text: string) => {
  writeFile(path, text);
  return text;
});

go(
  readdir(SRC_PATH),
  filterL((v: string) => INDEX_REGEX.test(v)),
  mapL((dir: string) => [dir, getFiles(dir)]),
  flatMapL(makeExportSyntax),
  join('\n'),
  _writeFile(INDEX_PATH),
  () => console.log('Generate index')
);