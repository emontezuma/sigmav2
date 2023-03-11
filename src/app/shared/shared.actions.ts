import { createAction, props } from '@ngrx/store';

export const changeScreenSize = createAction(
    '[Shared] ChangeScreenSize',
    props<{ screenSize: string }>()
);