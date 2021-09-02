import { PayloadAction } from "@reduxjs/toolkit";

export enum Types {
  AUTHENTICATE = "AUTHENTICATE",
  AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS",
  AUTHENTICATE_FAILED = "AUTHENTICATE_FAILED",
}

interface AuthState {
  token?: string;
}

const initialState: AuthState = {
  token: undefined,
};

export default (state: AuthState = initialState, action: PayloadAction) => {
  switch (action.type) {
    case Types.AUTHENTICATE_SUCCESS:
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
