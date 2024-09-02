export async function shipmentProducts(products: any) {
  try {
    const response = await fetch("http://localhost:4000/shipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: products }),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar os produtos");
    }

    const data = await response.json();
    console.log("Produtos enviados com sucesso:", data);
  } catch (error) {
    console.error("Erro ao enviar os produtos:", error);
  }
}
