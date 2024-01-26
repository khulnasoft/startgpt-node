#!/usr/bin/env -S npm run tsn -T

import StartGPT from 'startgpt';

// The name of your Azure StartGPT Resource.
// https://learn.microsoft.com/en-us/azure/cognitive-services/startgpt/how-to/create-resource?pivots=web-portal#create-a-resource
const resource = '<your resource name>';

// Corresponds to your Model deployment within your StartGPT resource, e.g. my-gpt35-16k-deployment
// Navigate to the Azure StartGPT Studio to deploy a model.
const model = '<your model>';

// https://learn.microsoft.com/en-us/azure/ai-services/startgpt/reference#rest-api-versioning
const apiVersion = '2023-06-01-preview';

const apiKey = process.env['AZURE_OPENAI_API_KEY'];
if (!apiKey) {
  throw new Error('The AZURE_OPENAI_API_KEY environment variable is missing or empty.');
}

// Azure StartGPT requires a custom baseURL, api-version query param, and api-key header.
const startgpt = new StartGPT({
  apiKey,
  baseURL: `https://${resource}.startgpt.azure.com/startgpt/deployments/${model}`,
  defaultQuery: { 'api-version': apiVersion },
  defaultHeaders: { 'api-key': apiKey },
});

async function main() {
  console.log('Non-streaming:');
  const result = await startgpt.chat.completions.create({
    model,
    messages: [{ role: 'user', content: 'Say hello!' }],
  });
  console.log(result.choices[0]!.message?.content);

  console.log();
  console.log('Streaming:');
  const stream = await startgpt.chat.completions.create({
    model,
    messages: [{ role: 'user', content: 'Say hello!' }],
    stream: true,
  });

  for await (const part of stream) {
    process.stdout.write(part.choices[0]?.delta?.content ?? '');
  }
  process.stdout.write('\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
