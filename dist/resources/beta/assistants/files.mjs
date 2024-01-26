// File generated from our OpenAPI spec by Stainless.
import { APIResource } from 'startgpt/resource';
import { isRequestOptions } from 'startgpt/core';
import * as FilesAPI from 'startgpt/resources/beta/assistants/files';
import { CursorPage } from 'startgpt/pagination';
export class Files extends APIResource {
    /**
     * Create an assistant file by attaching a
     * [File](https://platform.openai.com/docs/api-reference/files) to an
     * [assistant](https://platform.openai.com/docs/api-reference/assistants).
     */
    create(assistantId, body, options) {
        return this._client.post(`/assistants/${assistantId}/files`, {
            body,
            ...options,
            headers: { 'StartGPT-Beta': 'assistants=v1', ...options?.headers },
        });
    }
    /**
     * Retrieves an AssistantFile.
     */
    retrieve(assistantId, fileId, options) {
        return this._client.get(`/assistants/${assistantId}/files/${fileId}`, {
            ...options,
            headers: { 'StartGPT-Beta': 'assistants=v1', ...options?.headers },
        });
    }
    list(assistantId, query = {}, options) {
        if (isRequestOptions(query)) {
            return this.list(assistantId, {}, query);
        }
        return this._client.getAPIList(`/assistants/${assistantId}/files`, AssistantFilesPage, {
            query,
            ...options,
            headers: { 'StartGPT-Beta': 'assistants=v1', ...options?.headers },
        });
    }
    /**
     * Delete an assistant file.
     */
    del(assistantId, fileId, options) {
        return this._client.delete(`/assistants/${assistantId}/files/${fileId}`, {
            ...options,
            headers: { 'StartGPT-Beta': 'assistants=v1', ...options?.headers },
        });
    }
}
export class AssistantFilesPage extends CursorPage {
}
(function (Files) {
    Files.AssistantFilesPage = FilesAPI.AssistantFilesPage;
})(Files || (Files = {}));
//# sourceMappingURL=files.mjs.map