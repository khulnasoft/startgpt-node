// File generated from our OpenAPI spec by Stainless.
import { APIResource } from 'startgpt/resource';
import { isRequestOptions } from 'startgpt/core';
import * as MessagesAPI from 'startgpt/resources/beta/threads/messages/messages';
import * as FilesAPI from 'startgpt/resources/beta/threads/messages/files';
import { CursorPage } from 'startgpt/pagination';
export class Messages extends APIResource {
    constructor() {
        super(...arguments);
        this.files = new FilesAPI.Files(this._client);
    }
    /**
     * Create a message.
     */
    create(threadId, body, options) {
        return this._client.post(`/threads/${threadId}/messages`, {
            body,
            ...options,
            headers: { 'StartGPT-Beta': 'assistants=v1', ...options?.headers },
        });
    }
    /**
     * Retrieve a message.
     */
    retrieve(threadId, messageId, options) {
        return this._client.get(`/threads/${threadId}/messages/${messageId}`, {
            ...options,
            headers: { 'StartGPT-Beta': 'assistants=v1', ...options?.headers },
        });
    }
    /**
     * Modifies a message.
     */
    update(threadId, messageId, body, options) {
        return this._client.post(`/threads/${threadId}/messages/${messageId}`, {
            body,
            ...options,
            headers: { 'StartGPT-Beta': 'assistants=v1', ...options?.headers },
        });
    }
    list(threadId, query = {}, options) {
        if (isRequestOptions(query)) {
            return this.list(threadId, {}, query);
        }
        return this._client.getAPIList(`/threads/${threadId}/messages`, ThreadMessagesPage, {
            query,
            ...options,
            headers: { 'StartGPT-Beta': 'assistants=v1', ...options?.headers },
        });
    }
}
export class ThreadMessagesPage extends CursorPage {
}
(function (Messages) {
    Messages.ThreadMessagesPage = MessagesAPI.ThreadMessagesPage;
    Messages.Files = FilesAPI.Files;
    Messages.MessageFilesPage = FilesAPI.MessageFilesPage;
})(Messages || (Messages = {}));
//# sourceMappingURL=messages.mjs.map