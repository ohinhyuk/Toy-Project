import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";

export const revalidate = 20;

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
  console.log(slug);
  return (
    <div>
      <Image
        placeholder="blur" // 추가
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" // 추가
        // src={`/img/${product?.image}`}
        // blurDataURL="https://firebasestorage.googleapis.com/v0/b/exalted-stage-387815.appspot.com/o/files%2F14.heic?alt=media&token=5c38c8a1-8c23-4ef2-bb0e-91a87388a8ab"
        src={
          "https://firebasestorage.googleapis.com/v0/b/exalted-stage-387815.appspot.com/o/files%2F04-symbol.jpg?alt=media&token=5cf6b560-2dee-44fd-8a58-676bc230b087"
        }
        width={400}
        height={400}
        alt="imageTest"
      />
      {product?.name} 제품 설명 페이지
    </div>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
