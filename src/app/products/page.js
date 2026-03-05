"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function Page() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        setProducts(data.products); // important
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h1>Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">

            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />

            <h4>{product.title}</h4>

            <p>${product.price}</p>

            <div className="card-buttons">
              <Link href={`/products/${product.id}`}>
                <button className="view-btn">View</button>
              </Link>

              <button
                className="cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}