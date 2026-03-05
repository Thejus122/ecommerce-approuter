"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}