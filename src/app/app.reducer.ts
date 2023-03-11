import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
  } from '@ngrx/store';
  
import { environment } from '../environments/environment';
import { SharedState } from "./shared/models/store/shared";
import { sharedReducer } from './shared/shared.reducer';

export interface AppState {
    shared: SharedState,
}

export const reducers: ActionReducerMap<AppState> = {
    shared: sharedReducer,
};

export function logger(reducer:ActionReducer<any>)
    : ActionReducer<any> {
    return (state, action) => {
        // console.log("state before: ", state);
        // console.log("action", action);

        return reducer(state, action);
    }
}
  
export const metaReducers: MetaReducer<AppState>[] =
    !environment.production ? [logger] : [];
  
  