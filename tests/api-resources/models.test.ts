// File generated from our OpenAPI spec by Stainless.

import StartGPT from 'startgpt';
import { Response } from 'node-fetch';

const startgpt = new StartGPT({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource models', () => {
  test('retrieve', async () => {
    const responsePromise = startgpt.models.retrieve('gpt-3.5-turbo');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      startgpt.models.retrieve('gpt-3.5-turbo', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(StartGPT.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = startgpt.models.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(startgpt.models.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      StartGPT.NotFoundError,
    );
  });

  test('del', async () => {
    const responsePromise = startgpt.models.del('ft:gpt-3.5-turbo:acemeco:suffix:abc123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      startgpt.models.del('ft:gpt-3.5-turbo:acemeco:suffix:abc123', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(StartGPT.NotFoundError);
  });
});
