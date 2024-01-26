// File generated from our OpenAPI spec by Stainless.

import StartGPT, { toFile } from 'startgpt';
import { Response } from 'node-fetch';

const startgpt = new StartGPT({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  test('create: only required params', async () => {
    const responsePromise = startgpt.files.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      purpose: 'fine-tune',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await startgpt.files.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      purpose: 'fine-tune',
    });
  });

  test('retrieve', async () => {
    const responsePromise = startgpt.files.retrieve('string');
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
    await expect(startgpt.files.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      StartGPT.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = startgpt.files.list();
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
    await expect(startgpt.files.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      StartGPT.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      startgpt.files.list({ purpose: 'string' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(StartGPT.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = startgpt.files.del('string');
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
    await expect(startgpt.files.del('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      StartGPT.NotFoundError,
    );
  });

  test('content: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(startgpt.files.content('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      StartGPT.NotFoundError,
    );
  });

  test('retrieveContent', async () => {
    const responsePromise = startgpt.files.retrieveContent('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveContent: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      startgpt.files.retrieveContent('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(StartGPT.NotFoundError);
  });
});
