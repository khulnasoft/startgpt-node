export {};

test('throws if multiple shims are imported', async () => {
  await import('startgpt/shims/node');
  await expect(() => import('startgpt/shims/web')).rejects.toThrow(
    `can't \`import 'startgpt/shims/web'\` after \`import 'startgpt/shims/node'\``,
  );
});
