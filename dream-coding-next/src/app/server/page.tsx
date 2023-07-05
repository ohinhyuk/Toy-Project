import Counter from "@/components/Counter";
import os from "os"; // 노드 APIs
// import { useState } from 'react';

//기본적으로 서버 컴포넌트

export default function page() {
  console.log("안녕!"); // 서버 컴포넌트 이므로 터미널에서만 보임 (브라우저 X)
  console.log(os.hostname()); // 노드 api 사용 가능

  // const [name , setName] = useState(''); // 브라우저 위에서의 상태 관리 불가능
  return (
    <>
      <h1>홈페이지다!</h1>
      <Counter />
    </>
  );
}
