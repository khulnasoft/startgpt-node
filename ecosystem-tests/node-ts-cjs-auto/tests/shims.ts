import * as shims from 'startgpt/_shims/index';
import * as fd from 'formdata-node';

test('startgpt/shims/node', () => {
  expect(shims.kind).toEqual('node');
  expect(shims.File).toBe(fd.File);
});
