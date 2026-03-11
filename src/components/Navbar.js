"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from "./navbar.module.css";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyStore</div>

      <div className={styles.links}>
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/products">Products</Link>
        <Link className={styles.link} href="/about">About</Link>
        <Link className={styles.link} href="/contact">Contact</Link>

        <Link className={`${styles.link} ${styles.cart}`} href="/cart">
          🛒 Cart
          {totalItems > 0 && (
            <span className={styles.badge}>{totalItems}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}