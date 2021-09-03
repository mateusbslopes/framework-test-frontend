import { PayloadAction } from "@reduxjs/toolkit";

export enum Types {
  AUTHENTICATE = "AUTHENTICATE",
  AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS",
  AUTHENTICATE_FAILED = "AUTHENTICATE_FAILED",
}

const TOKEN_LOCALS_STORAGE_KEY = "frameworkTest";

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem(TOKEN_LOCALS_STORAGE_KEY),
};

export default (
  state: AuthState = initialState,
  action: PayloadAction<any>
) => {
  switch (action.type) {
    case Types.AUTHENTICATE_SUCCESS:
      localStorage.setItem(TOKEN_LOCALS_STORAGE_KEY, action.payload);
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export interface AuthenticatePayload {
  user: string;
  password: string;
  history: any;
}

export const authenticate = (payload: AuthenticatePayload) => ({
  type: Types.AUTHENTICATE,
  payload,
});
