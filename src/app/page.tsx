import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=5", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>

      

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-content">
          
          <h1>Welcome to MyShop 🛍️</h1>
          <p>Discover the best trending products at unbeatable prices</p>
          <Link href="/products" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </div>

      {/* TRENDING PRODUCTS */}
      <h2 className="section-title">Trending Products</h2>
      <div className="products-grid">
        {products.map((product: any) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />

            <div className="product-title">
              {product.title}
            </div>

            <div className="product-price">
              ${product.price}
            </div>

            <Link
              href={`/products/${product.id}`}
              className="product-btn"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      

    </div>
  );
}