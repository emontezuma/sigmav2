import { createReducer, on } from '@ngrx/store';
import * as sharedActions from './shared.actions';
import { SharedState } from './models/store/shared';

export const initialState: SharedState = {
  screenSize: '',
};

const _sharedReducer = createReducer(
  initialState,
  on(sharedActions.changeScreenSize, (state, { screenSize } ) => ({ ...state, screenSize })),
);

export function sharedReducer(state, action) {
  return _sharedReducer(state, action);
}
  