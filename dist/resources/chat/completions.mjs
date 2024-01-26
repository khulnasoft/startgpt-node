// File generated from our OpenAPI spec by Stainless.
import { APIResource } from 'startgpt/resource';
export class Completions extends APIResource {
    create(body, options) {
        return this._client.post('/chat/completions', { body, ...options, stream: body.stream ?? false });
    }
}
(function (Completions) {
})(Completions || (Completions = {}));
//# sourceMappingURL=completions.mjs.map