export class AddJWT {
    static readonly type = '[Client] Add JWT';
    constructor(public payload: string) {}
}

export class AddLogin {
    static readonly type = '[Client] Add Login';
    constructor(public payload: string) {}
}