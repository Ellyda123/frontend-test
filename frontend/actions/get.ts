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
  fetch("http://localhost:4000/shipments/:id")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Número de remessa:", data.shipmentNumber);
    })
    .catch((error) => {
      console.error("Houve um problema com a requisição:", error);
    });
}
