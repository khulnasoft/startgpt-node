// File generated from our OpenAPI spec by Stainless.
import { APIResource } from 'startgpt/resource';
export class Moderations extends APIResource {
    /**
     * Classifies if text violates StartGPT's Content Policy
     */
    create(body, options) {
        return this._client.post('/moderations', { body, ...options });
    }
}
(function (Moderations) {
})(Moderations || (Moderations = {}));
//# sourceMappingURL=moderations.mjs.map