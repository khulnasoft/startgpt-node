// File generated from our OpenAPI spec by Stainless.
import { APIResource } from 'startgpt/resource';
import { ChatCompletionRunner } from 'startgpt/lib/ChatCompletionRunner';
export { ChatCompletionRunner } from 'startgpt/lib/ChatCompletionRunner';
import { ChatCompletionStreamingRunner, } from 'startgpt/lib/ChatCompletionStreamingRunner';
export { ChatCompletionStreamingRunner, } from 'startgpt/lib/ChatCompletionStreamingRunner';
export { ParsingFunction, ParsingToolFunction, } from 'startgpt/lib/RunnableFunction';
import { ChatCompletionStream } from 'startgpt/lib/ChatCompletionStream';
export { ChatCompletionStream } from 'startgpt/lib/ChatCompletionStream';
export class Completions extends APIResource {
    runFunctions(body, options) {
        if (body.stream) {
            return ChatCompletionStreamingRunner.runFunctions(this._client.chat.completions, body, options);
        }
        return ChatCompletionRunner.runFunctions(this._client.chat.completions, body, options);
    }
    runTools(body, options) {
        if (body.stream) {
            return ChatCompletionStreamingRunner.runTools(this._client.chat.completions, body, options);
        }
        return ChatCompletionRunner.runTools(this._client.chat.completions, body, options);
    }
    /**
     * Creates a chat completion stream
     */
    stream(body, options) {
        return ChatCompletionStream.createChatCompletion(this._client.chat.completions, body, options);
    }
}
//# sourceMappingURL=completions.mjs.map