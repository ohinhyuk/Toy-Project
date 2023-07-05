"use client";

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter((num) => num + 1)}>
        카운터 증가 버튼
      </button>
    </>
  );
}
