import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ClientStateModel } from './client-state-model';
import { AddJWT, AddLogin } from '../actions/client-action';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
@State<ClientStateModel>({
    name: 'client',
    defaults: {
        tokenJwt: '',
        login: "",
    }
})

export class ClientState {
    @Selector()
    static getTokenJwt(state: ClientStateModel): string {
        return state.tokenJwt;
    }

    @Selector()
    static getLogin(state: ClientStateModel): string {
        return state.login;
    }

    @Action(AddJWT)
    addJWT( { patchState }: StateContext<ClientStateModel>, { payload }: AddJWT ): void {
        patchState({ tokenJwt: payload });
    }

    @Action(AddLogin)
    addClient( { patchState }: StateContext<ClientStateModel>, { payload }: AddLogin ): void {
        patchState({ login: payload });
    }
}