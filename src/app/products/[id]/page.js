export default async function ProductDetail({ params }) {

  const { id } = params;

  const res = await fetch(
    `https://dummyjson.com/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await res.json();

  return (
    <div style={{ padding: "40px" }}>z
      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "200px" }}
      />

      <p>{product.description}</p>

      <h3>${product.price}</h3>
    </div>
  );
}