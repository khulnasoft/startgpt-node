// shouldn't need extension, but Jest's ESM module resolution is broken
import 'startgpt/shims/node.mjs';
import * as shims from 'startgpt/_shims/index';

test('startgpt/shims/node', () => {
  expect(shims.kind).toEqual('node');
});
