/**
 * @jest-environment jsdom
 */

export {};

test('startgpt/shims/web throws if globals are missing', async () => {
  await expect(() => import('startgpt/shims/web')).rejects.toThrow(
    `this environment is missing the following Web Fetch API type: fetch is not defined. You may need to use polyfills`,
  );
});
