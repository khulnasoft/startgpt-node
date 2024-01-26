import * as shims from 'startgpt/_shims/index';

test('startgpt/shims/node', () => {
  expect(shims.kind).toEqual('node');
});
