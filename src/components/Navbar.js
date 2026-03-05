"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {

  const { cart } = useCart();

  return (
    <nav className="navbar">

      <h2 className="logo">MyShop</h2>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart">Cart ({cart.length})</Link>
      </div>

    </nav>
  );
}
