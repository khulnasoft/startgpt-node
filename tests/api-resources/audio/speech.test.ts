// File generated from our OpenAPI spec by Stainless.

import StartGPT from 'startgpt';

const startgpt = new StartGPT({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource speech', () => {
  // binary tests are currently broken
  test.skip('create: required and optional params', async () => {
    const response = await startgpt.audio.speech.create({
      input: 'string',
      model: 'string',
      voice: 'alloy',
      response_format: 'mp3',
      speed: 0.25,
    });
  });
});
