import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ClientStateModel } from './client-state-model';
import { AddJWT, AddClient } from '../actions/client-action';
import { Client } from '../../models/Client';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
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
    static getClient(state: ClientStateModel): Client {
        return state.client;
    }

    @Action(AddJWT)
    addJWT( { patchState }: StateContext<ClientStateModel>, { payload }: AddJWT ): void {
        patchState({ tokenJwt: payload });
    }

    @Action(AddClient)
    addClient( { patchState }: StateContext<ClientStateModel>, { payload }: AddClient ): void {
        patchState({ client: payload });
    }
}