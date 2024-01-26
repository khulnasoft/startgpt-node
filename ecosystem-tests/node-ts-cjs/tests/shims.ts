import 'startgpt/shims/node';
import * as shims from 'startgpt/_shims/index';
import * as fd from 'formdata-node';

function typeTests(x: shims.Request) {
  const url: string = x.url;
}

test('startgpt/shims/node', () => {
  expect(shims.kind).toEqual('node');
  expect(shims.File).toBe(fd.File);
});
