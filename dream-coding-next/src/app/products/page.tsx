import MeowComponent from "@/components/MeowComponent";
import { getProducts } from "@/service/products";
import Link from "next/link";

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      <ul>
        {products?.map(({ id, name, image }, index: number) => (
          <Link key={index} href={`products/${id}`}>
            <li>{name}</li>
          </Link>
        ))}
      </ul>
      <MeowComponent />
    </div>
  );
}
