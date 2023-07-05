"use client";

import { useEffect, useState } from "react";

export default function MeowComponent() {
  const [text, setText] = useState("...로딩중");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);
  return <>{text}</>;
}
