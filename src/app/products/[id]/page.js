export default async function ProductDetail({ params }) {

  const { id } = await params;

  const res = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    { cache: "no-store" }
  );

  const product = await res.json();

  return (
    <div style={{ padding: "40px" }}>
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px" }}
      />

      <p>{product.description}</p>

      <h3>${product.price}</h3>
    </div>
  );
}