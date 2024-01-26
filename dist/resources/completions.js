"use strict";
// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Completions = void 0;
const resource_1 = require("startgpt/resource");
class Completions extends resource_1.APIResource {
    create(body, options) {
        return this._client.post('/completions', { body, ...options, stream: body.stream ?? false });
    }
}
exports.Completions = Completions;
(function (Completions) {
})(Completions = exports.Completions || (exports.Completions = {}));
//# sourceMappingURL=completions.js.map