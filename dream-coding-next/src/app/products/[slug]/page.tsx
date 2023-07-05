import { getProduct, getProducts } from "@/service/products";
import { Metadata } from "next";

type IProp = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: IProp) {
  return {
    title: `제품의 이름 : ${slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: IProp) {
  const product = await getProduct(slug);

  return <div>{product?.name} 제품 설명 페이지</div>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
