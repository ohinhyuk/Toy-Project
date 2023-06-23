"use client";

import { useRouter } from "next/navigation";

export default function Next() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Next</h1>
    </div>
  );
}
