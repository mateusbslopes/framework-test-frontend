import { PayloadAction } from "@reduxjs/toolkit";
import { Cart, Product } from "../../types";

export enum Types {
  FETCH = "CART_FETCH",
  FETCH_SUCCESS = "CART_FETCH_SUCCESS",
  FETCH_FAILED = "CART_FETCH_FAILED",
  PUT_PRODUCT = "CART_PUT_PRODUCT", // PUT related to http action so can either update or create.
  SET_PRODUCTS = "CART_SET_PRODUCTS",
}

export const CART_DATA_KEY = "frameworkTest_CART";

interface CartState {
  data: Cart;
  loading: boolean;
  error: string;
}

const initialState: CartState = {
  data: {},
  loading: false,
  error: "",
};

export default (
  state: CartState = initialState,
  { type, payload }: PayloadAction | any
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
        data: payload,
      };
    case Types.FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
        data: {},
      };
    case Types.PUT_PRODUCT:
        const {id, amount} = payload;
      return {
        ...state,
        data: {
          ...state.data,
          [id]: { amount },
        },
      };
    default:
      return state;
  }
};

export const fetch = () => ({
  type: Types.FETCH,
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
