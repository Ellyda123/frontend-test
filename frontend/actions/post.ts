export const createShipment = async (
  products: { id: string; name: string }[]
) => {
  try {
    const response = await fetch("http://localhost:4000/shipments", {
      method: "POST",
      body: JSON.stringify({ products }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Erro ao criar envio");
    }
  } catch (error) {
    console.error(error);
  }
};
