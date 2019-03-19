import * as storage from '@store/sessions/sessions.storage';

export interface SessionState {
    token: string;
}

export interface SessionToken {
    token: string;
}

export class InitialSessionState {
    static create(): SessionToken {
        return { token: null, ...storage.getSession() };
    }
}
