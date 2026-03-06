import Link from "next/link";
import Image from "next/image";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products; // DummyJSON returns { products: [] }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to MyShop 🛍️</h1>
          <p>Discover the best trending products</p>

          <Link href="/products" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </div>

      <h2 className="section-title">Trending Products</h2>

      <div className="products-grid">
        {products.map((product: any) => (
          <div key={product.id} className="product-card">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={200}
            />

            <div>{product.title}</div>
            <div>${product.price}</div>

            <Link href={`/products/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}