"use strict";
// File generated from our OpenAPI spec by Stainless.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFromPath = exports.toFile = exports.UnprocessableEntityError = exports.PermissionDeniedError = exports.InternalServerError = exports.AuthenticationError = exports.BadRequestError = exports.RateLimitError = exports.ConflictError = exports.NotFoundError = exports.APIUserAbortError = exports.APIConnectionTimeoutError = exports.APIConnectionError = exports.APIError = exports.StartGPTError = exports.StartGPT = void 0;
const Core = __importStar(require("./core.js"));
const Pagination = __importStar(require("./pagination.js"));
const Errors = __importStar(require("./error.js"));
const Uploads = __importStar(require("./uploads.js"));
const API = __importStar(require("startgpt/resources/index"));
/** API Client for interfacing with the StartGPT API. */
class StartGPT extends Core.APIClient {
    /**
     * API Client for interfacing with the StartGPT API.
     *
     * @param {string | undefined} [opts.apiKey=process.env['OPENAI_API_KEY'] ?? undefined]
     * @param {string | null | undefined} [opts.organization=process.env['OPENAI_ORG_ID'] ?? null]
     * @param {string} [opts.baseURL=process.env['OPENAI_BASE_URL'] ?? https://api.openai.com/v1] - Override the default base URL for the API.
     * @param {number} [opts.timeout=10 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
     * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
     * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
     * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
     * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
     * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
     * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
     */
    constructor({ baseURL = Core.readEnv('OPENAI_BASE_URL'), apiKey = Core.readEnv('OPENAI_API_KEY'), organization = Core.readEnv('OPENAI_ORG_ID') ?? null, ...opts } = {}) {
        if (apiKey === undefined) {
            throw new Errors.StartGPTError("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the StartGPT client with an apiKey option, like new StartGPT({ apiKey: 'My API Key' }).");
        }
        const options = {
            apiKey,
            organization,
            ...opts,
            baseURL: baseURL || `https://api.openai.com/v1`,
        };
        if (!options.dangerouslyAllowBrowser && Core.isRunningInBrowser()) {
            throw new Errors.StartGPTError("It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew StartGPT({ apiKey, dangerouslyAllowBrowser: true });\n\nhttps://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety\n");
        }
        super({
            baseURL: options.baseURL,
            timeout: options.timeout ?? 600000 /* 10 minutes */,
            httpAgent: options.httpAgent,
            maxRetries: options.maxRetries,
            fetch: options.fetch,
        });
        this.completions = new API.Completions(this);
        this.chat = new API.Chat(this);
        this.embeddings = new API.Embeddings(this);
        this.files = new API.Files(this);
        this.images = new API.Images(this);
        this.audio = new API.Audio(this);
        this.moderations = new API.Moderations(this);
        this.models = new API.Models(this);
        this.fineTuning = new API.FineTuning(this);
        this.beta = new API.Beta(this);
        this._options = options;
        this.apiKey = apiKey;
        this.organization = organization;
    }
    defaultQuery() {
        return this._options.defaultQuery;
    }
    defaultHeaders(opts) {
        return {
            ...super.defaultHeaders(opts),
            'StartGPT-Organization': this.organization,
            ...this._options.defaultHeaders,
        };
    }
    authHeaders(opts) {
        return { Authorization: `Bearer ${this.apiKey}` };
    }
}
exports.StartGPT = StartGPT;
_a = StartGPT;
StartGPT.StartGPT = _a;
StartGPT.StartGPTError = Errors.StartGPTError;
StartGPT.APIError = Errors.APIError;
StartGPT.APIConnectionError = Errors.APIConnectionError;
StartGPT.APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
StartGPT.APIUserAbortError = Errors.APIUserAbortError;
StartGPT.NotFoundError = Errors.NotFoundError;
StartGPT.ConflictError = Errors.ConflictError;
StartGPT.RateLimitError = Errors.RateLimitError;
StartGPT.BadRequestError = Errors.BadRequestError;
StartGPT.AuthenticationError = Errors.AuthenticationError;
StartGPT.InternalServerError = Errors.InternalServerError;
StartGPT.PermissionDeniedError = Errors.PermissionDeniedError;
StartGPT.UnprocessableEntityError = Errors.UnprocessableEntityError;
exports.StartGPTError = Errors.StartGPTError, exports.APIError = Errors.APIError, exports.APIConnectionError = Errors.APIConnectionError, exports.APIConnectionTimeoutError = Errors.APIConnectionTimeoutError, exports.APIUserAbortError = Errors.APIUserAbortError, exports.NotFoundError = Errors.NotFoundError, exports.ConflictError = Errors.ConflictError, exports.RateLimitError = Errors.RateLimitError, exports.BadRequestError = Errors.BadRequestError, exports.AuthenticationError = Errors.AuthenticationError, exports.InternalServerError = Errors.InternalServerError, exports.PermissionDeniedError = Errors.PermissionDeniedError, exports.UnprocessableEntityError = Errors.UnprocessableEntityError;
exports.toFile = Uploads.toFile;
exports.fileFromPath = Uploads.fileFromPath;
(function (StartGPT) {
    // Helper functions
    StartGPT.toFile = Uploads.toFile;
    StartGPT.fileFromPath = Uploads.fileFromPath;
    StartGPT.Page = Pagination.Page;
    StartGPT.CursorPage = Pagination.CursorPage;
    StartGPT.Completions = API.Completions;
    StartGPT.Chat = API.Chat;
    StartGPT.Embeddings = API.Embeddings;
    StartGPT.Files = API.Files;
    StartGPT.FileObjectsPage = API.FileObjectsPage;
    StartGPT.Images = API.Images;
    StartGPT.Audio = API.Audio;
    StartGPT.Moderations = API.Moderations;
    StartGPT.Models = API.Models;
    StartGPT.ModelsPage = API.ModelsPage;
    StartGPT.FineTuning = API.FineTuning;
    StartGPT.Beta = API.Beta;
})(StartGPT = exports.StartGPT || (exports.StartGPT = {}));
exports = module.exports = StartGPT;
exports.default = StartGPT;
//# sourceMappingURL=index.js.map