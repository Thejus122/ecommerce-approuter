"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from "./products.module.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Products</h1>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            
            <Link href={`/products/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className={styles.image}
              />
            </Link>

            <h3 className={styles.title}>{product.title}</h3>

            <p className={styles.price}>₹ {product.price}</p>

            <button
              className={styles.btn}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}