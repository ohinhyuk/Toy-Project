import { Metadata } from "next";

interface IProp {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: IProp) {
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
}

export default function PantsPage({ params }: IProp) {
  return <div>{params.slug} pants</div>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
