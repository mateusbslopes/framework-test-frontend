import axios from "axios";
import { Product } from "../types";

export default class Products {
  static async getProducts(search: string): Promise<Product[]> {
    const { data } = await axios.get("http://localhost:5000/products", {
      params: {
        search,
      },
    });
    return data;
  }

  static async getProduct(id: number): Promise<Product> {
    const { data } = await axios.get(`http://localhost:5000/products/${id}`);
    return data;
  }
}
