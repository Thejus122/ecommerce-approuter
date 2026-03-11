"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <div style={{ padding: "30px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item: any) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px"
          }}
        >
          <img src={item.thumbnail} alt={item.title} width="80" />

          <div style={{ flex: 1 }}>
            <h3>{item.title}</h3>
            <p>₹ {item.price}</p>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button onClick={() => decreaseQty(item.id)}>-</button>

            <span>{item.qty}</span>

            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
}