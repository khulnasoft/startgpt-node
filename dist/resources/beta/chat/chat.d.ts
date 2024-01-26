import { APIResource } from 'startgpt/resource';
import * as CompletionsAPI from 'startgpt/resources/beta/chat/completions';
export declare class Chat extends APIResource {
    completions: CompletionsAPI.Completions;
}
export declare namespace Chat {
    export import Completions = CompletionsAPI.Completions;
}
//# sourceMappingURL=chat.d.ts.map