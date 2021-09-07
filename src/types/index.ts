import { Action } from "./store";

export type Product = {
  id: number;
  name: string;
  price: number;
  photoUrl?: string;
};

export type CartType = {
  amount: number;
};

export type Cart = {
  [key: number]: CartType;
};

export type { Action };
