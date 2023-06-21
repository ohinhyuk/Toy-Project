import animationData from "../headerLottie.json";
import Lottie from "lottie-react";

export default function HeaderLottie() {
  return <Lottie animationData={animationData} style={{ width: "50px" }} />;
}
