import { APIResource } from 'startgpt/resource';
import * as SpeechAPI from 'startgpt/resources/audio/speech';
import * as TranscriptionsAPI from 'startgpt/resources/audio/transcriptions';
import * as TranslationsAPI from 'startgpt/resources/audio/translations';
export declare class Audio extends APIResource {
    transcriptions: TranscriptionsAPI.Transcriptions;
    translations: TranslationsAPI.Translations;
    speech: SpeechAPI.Speech;
}
export declare namespace Audio {
    export import Transcriptions = TranscriptionsAPI.Transcriptions;
    export import Transcription = TranscriptionsAPI.Transcription;
    export import TranscriptionCreateParams = TranscriptionsAPI.TranscriptionCreateParams;
    export import Translations = TranslationsAPI.Translations;
    export import Translation = TranslationsAPI.Translation;
    export import TranslationCreateParams = TranslationsAPI.TranslationCreateParams;
    export import Speech = SpeechAPI.Speech;
    export import SpeechCreateParams = SpeechAPI.SpeechCreateParams;
}
//# sourceMappingURL=audio.d.ts.map