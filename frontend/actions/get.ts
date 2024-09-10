"use server";

export async function getProducts() {
  return (
    await fetch("http://localhost:4000/products", {
      next: {
        tags: ["products"],
      },
    })
  ).json();
}

export async function getShipment() {
  return (
    await fetch("http://localhost:4000/shipments/:id", {
      next: {
        tags: ["shipment"],
      },
    })
  ).json();
}
