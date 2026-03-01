async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />

          <div className="product-title">
            {product.title}
          </div>

          <div className="product-rating">
            ⭐⭐⭐⭐☆
          </div>

          <div className="product-price">
            ${product.price}
          </div>

          <a
            href={`/products/${product.id}`}
            className="product-btn"
          >
            Add to Cart
          </a>
        </div>
      ))}
    </div>
  );
}