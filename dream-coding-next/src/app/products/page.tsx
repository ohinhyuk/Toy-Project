import Link from "next/link";

export default function Products() {
  return (
    <div>
      <ul>
        <Link href="/products/cloth">
          <li>cloth</li>
        </Link>
        <Link href="/products/sock">
          <li>sock</li>
        </Link>
        <Link href="/products/pants">
          <li>pants</li>
        </Link>
      </ul>
      <p>Products</p>
    </div>
  );
}
