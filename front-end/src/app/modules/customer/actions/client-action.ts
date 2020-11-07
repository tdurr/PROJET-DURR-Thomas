import { Client } from '../modeles/Client';

export class RegisterJWT {
    static readonly type = '[Client] Add JWT';
    constructor(public payload: string) {}
}

export class RegisterClient {
    static readonly type = '[Client] Add Client';
    constructor(public payload: Client) {}
}