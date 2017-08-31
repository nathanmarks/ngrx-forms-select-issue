import { Action } from '@ngrx/store';
import { FormGroupState, createFormGroupState, formGroupReducer } from 'ngrx-forms';

export interface MyFormValue {
  someSelect: string;
}

const FORM_ID = 'some globally unique string';

const initialFormState = createFormGroupState<MyFormValue>(FORM_ID, {
  someSelect: 'bar',
});

export interface AppState {
  someOtherField: string;
  myForm: FormGroupState<MyFormValue>;
}

const initialState: AppState = {
  someOtherField: '',
  myForm: initialFormState,
};

export interface State {
  app: AppState;
}

export const reducers = {
  app: appReducer
}

export function appReducer(state = initialState, action: Action): AppState {
  const myForm = formGroupReducer(state.myForm, action);
  if (myForm !== state.myForm) {
    state = { ...state, myForm };
  }

  switch (action.type) {
    case 'some action type':
      // modify state
      return state;

    default: {
      return state;
    }
  }
}
