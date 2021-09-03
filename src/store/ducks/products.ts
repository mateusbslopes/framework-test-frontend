import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

export enum Types {
  FETCH = "FETCH",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILED = "FETCH_FAILED",
}

interface ProductsState {
  list: Product[];
  loading: boolean;
  error: string;
}

const initialState: ProductsState = {
  list: [],
  loading: false,
  error: "",
};

export default (
  state: ProductsState = initialState,
  { type, payload }: PayloadAction
) => {
  switch (type) {
    case Types.FETCH:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        list: payload,
      };
    case Types.FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
        list: [],
      };
    default:
      return state;
  }
};

export interface FetchPayload {
  search: string;
}

export const fetch = (payload: FetchPayload) => ({
  type: Types.FETCH,
  payload,
});

export interface FetchSuccessPayload {
  products: Product[];
}

export const fetchSuccess = (payload: FetchSuccessPayload) => ({
  type: Types.FETCH_SUCCESS,
  payload,
});

export interface FetchFailedPayload {
  error: string;
}

export const fetchFailed = (payload: FetchFailedPayload) => ({
  type: Types.FETCH_FAILED,
  payload,
});
