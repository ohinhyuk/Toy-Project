interface IProp {
  params: {
    slug: string;
  };
}

export default function PantsPage({ params }: IProp) {
  return <div>{params.slug} pants</div>;
}

// interface Props {
//   params: {
//     slug: string;
//   };
// }

// export default function PantsPage({ params }: Props) {
//   return <h1>{params.slug} 제품 설명 페이지</h1>;
// }

// export function generateStaticParams() {
//   const products = ['pants', 'skirt'];
//   return products.map((product) => ({
//     slug: product,
//   }));
// }
