import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav style={{ padding: 20, background: "#eee" }}>
          <Link href="/">Home | </Link>
          <Link href="/products">Products | </Link>
          <Link href="/cart">Cart | </Link>
          <Link href="/about">About | </Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div style={{ padding: 20 }}>{children}</div>
      </body>
    </html>
  );
}