import 'startgpt/shims/web';
import * as shims from 'startgpt/_shims/index';

function typeTests(x: shims.Request) {
  const url: string = x.url;
}

test('startgpt/shims/node', () => {
  expect(shims.kind).toEqual('web');
  expect(shims.File).toBe(File);
});
