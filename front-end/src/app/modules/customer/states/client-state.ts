import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ClientStateModel } from './client-state-model';
import { RegisterJWT, RegisterClient } from '../actions/client-action';
import { Client } from '../modeles/Client';
import { Injectable } from '@angular/core';

@State<ClientStateModel>({
    name: 'client',
    defaults: {
        tokenJwt: '',
        client: null,
    }
})

export class ClientState {
    @Selector()
    static getTokenJwt(state: ClientStateModel): string {
        return state.tokenJwt;
    }

    @Selector()
    static getAccount(state: ClientStateModel): Client {
        return state.client;
    }

    @Action(RegisterJWT)
    addJWT( { patchState }: StateContext<ClientStateModel>, { payload }: RegisterJWT ): void {
        patchState({ tokenJwt: payload });
    }

    @Action(RegisterClient)
    addClient( { patchState }: StateContext<ClientStateModel>, { payload }: RegisterClient ): void {
        patchState({ client: payload });
    }
}