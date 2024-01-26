// File generated from our OpenAPI spec by Stainless.
import { APIResource } from 'startgpt/resource';
import * as SpeechAPI from 'startgpt/resources/audio/speech';
import * as TranscriptionsAPI from 'startgpt/resources/audio/transcriptions';
import * as TranslationsAPI from 'startgpt/resources/audio/translations';
export class Audio extends APIResource {
    constructor() {
        super(...arguments);
        this.transcriptions = new TranscriptionsAPI.Transcriptions(this._client);
        this.translations = new TranslationsAPI.Translations(this._client);
        this.speech = new SpeechAPI.Speech(this._client);
    }
}
(function (Audio) {
    Audio.Transcriptions = TranscriptionsAPI.Transcriptions;
    Audio.Translations = TranslationsAPI.Translations;
    Audio.Speech = SpeechAPI.Speech;
})(Audio || (Audio = {}));
//# sourceMappingURL=audio.mjs.map