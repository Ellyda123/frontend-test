import { Product } from "@/types/shipments";
import { Product } from "./../../backend/src/types/product";

export async function shipmentProducts(products: Product[]) {
  try {
    const response = await fetch("http://localhost:4000/shipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: products }),
    });
  } catch (error) {
    console.error("Erro ao enviar os produtos:", error);
  }
}
