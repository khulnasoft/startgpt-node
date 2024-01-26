// File generated from our OpenAPI spec by Stainless.
import { APIResource } from 'startgpt/resource';
import { isRequestOptions } from 'startgpt/core';
import * as StepsAPI from 'startgpt/resources/beta/threads/runs/steps';
import { CursorPage } from 'startgpt/pagination';
export class Steps extends APIResource {
    /**
     * Retrieves a run step.
     */
    retrieve(threadId, runId, stepId, options) {
        return this._client.get(`/threads/${threadId}/runs/${runId}/steps/${stepId}`, {
            ...options,
            headers: { 'StartGPT-Beta': 'assistants=v1', ...options?.headers },
        });
    }
    list(threadId, runId, query = {}, options) {
        if (isRequestOptions(query)) {
            return this.list(threadId, runId, {}, query);
        }
        return this._client.getAPIList(`/threads/${threadId}/runs/${runId}/steps`, RunStepsPage, {
            query,
            ...options,
            headers: { 'StartGPT-Beta': 'assistants=v1', ...options?.headers },
        });
    }
}
export class RunStepsPage extends CursorPage {
}
(function (Steps) {
    Steps.RunStepsPage = StepsAPI.RunStepsPage;
})(Steps || (Steps = {}));
//# sourceMappingURL=steps.mjs.map