export default async function ProductDetail({ params }) {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${params.id}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    const product = await res.json();

    return (
      <div style={{ padding: "40px" }}>
        <div style={{ display: "flex", gap: "40px" }}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "300px", objectFit: "contain" }}
          />

          <div>
            <h1>{product.title}</h1>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <h1>Product not found ❌</h1>;
  }
}