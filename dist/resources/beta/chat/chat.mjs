// File generated from our OpenAPI spec by Stainless.
import { APIResource } from 'startgpt/resource';
import * as CompletionsAPI from 'startgpt/resources/beta/chat/completions';
export class Chat extends APIResource {
    constructor() {
        super(...arguments);
        this.completions = new CompletionsAPI.Completions(this._client);
    }
}
(function (Chat) {
    Chat.Completions = CompletionsAPI.Completions;
})(Chat || (Chat = {}));
//# sourceMappingURL=chat.mjs.map