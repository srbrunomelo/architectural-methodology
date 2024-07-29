import { HTTPRequest } from "@/app/adapters/";
import { productListReturn } from "@/entities/products/model/types";

export async function productList(): Promise<productListReturn> {
  try {
    const { data } = await HTTPRequest.get("/products");

    return { error: false, data };
  } catch (error) {
    return {
      error: true,
    } as productListReturn;
  }
}
