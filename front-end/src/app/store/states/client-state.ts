import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ClientStateModel } from './client-state-model';
import { AddJWT, AddClient } from '../actions/client-action';
import { Client } from '../../models/Client';

@State<ClientStateModel>({
    name: 'client',
    defaults: {
        tokenJwt: '',
        infos: null,
    }
})

export class ClientState {
    @Selector()
    static getTokenJwt(state: ClientStateModel): string {
        return state.tokenJwt;
    }

    @Selector()
    static getClient(state: ClientStateModel): Client {
        return state.infos;
    }

    @Action(AddJWT)
    addJWT( { patchState }: StateContext<ClientStateModel>, { payload }: AddJWT ): void {
        patchState({ tokenJwt: payload });
    }

    @Action(AddClient)
    addClient( { patchState }: StateContext<ClientStateModel>, { payload }: AddClient ): void {
        patchState({ infos: payload });
    }
}