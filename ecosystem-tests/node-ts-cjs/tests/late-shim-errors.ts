export {};

test('throws if shims are imported after startgpt', async () => {
  await import('startgpt');
  await expect(() => import('startgpt/shims/web')).rejects.toThrow(
    `you must \`import 'startgpt/shims/web'\` before importing anything else from startgpt`,
  );
});
