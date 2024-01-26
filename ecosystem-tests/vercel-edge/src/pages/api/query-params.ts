import { NextRequest, NextResponse } from 'next/server';
import StartGPT from 'startgpt';

export const config = {
  runtime: 'edge',
  unstable_allowDynamic: [
    // This is currently required because `qs` uses `side-channel` which depends on this.
    //
    // Warning: Some features may be broken at runtime because of this.
    '/node_modules/function-bind/**',
  ],
};

export default async (request: NextRequest) => {
  const startgpt = new StartGPT();

  const result = await startgpt.beta.assistants.list({ limit: 10 });

  return NextResponse.json(result);
};
