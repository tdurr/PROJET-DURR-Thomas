import { Client } from '../modeles/Client';

export class AddJWT {
    static readonly type = '[Client] Add JWT';
    constructor(public payload: string) {}
}

export class AddClient {
    static readonly type = '[Client] Add Client';
    constructor(public payload: Client) {}
}