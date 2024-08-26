const apiUrl = "http://localhost:3000/pensadoria";

async function fetchProducts() {
  try {
    const response = await fetch(`${apiUrl}/`);
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
}

export default fetchProducts();
