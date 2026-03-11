import "./globals.css";
import Link from "next/link";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "MyShop",
  description: "Ecommerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />

          <main className="container">{children}</main>

          <footer className="footer">
            <div className="footer-container">
              <div className="footer-section">
                <h3>MyShop</h3>
                <p>Your one-stop shop for trending products.</p>
              </div>

              <div className="footer-section">
                <h4>Quick Links</h4>
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/cart">Cart</Link>
              </div>

              <div className="footer-section">
                <h4>Contact</h4>
                <p>Email: support@myshop.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Location: India</p>
              </div>
            </div>

            <div className="footer-bottom">
              © 2026 MyShop. All rights reserved.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}