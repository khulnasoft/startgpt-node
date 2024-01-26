// shouldn't need extension, but Jest's ESM module resolution is broken
import 'startgpt/shims/web.mjs';
import * as shims from 'startgpt/_shims/index';

function typeTests(x: shims.Request) {
  const url: string = x.url;
}

test('startgpt/shims/node', () => {
  expect(shims.kind).toEqual('web');
  expect(shims.File).toEqual(File);
});
