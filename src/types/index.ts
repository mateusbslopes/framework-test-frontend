import { Action } from "./store";

export type Product = {
    id: number;
    name: string;
    price: number;
    photoUrl?: string;
}

export type { Action };
