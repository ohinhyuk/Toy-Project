import path from "path";
import { promises as fs } from "fs";

// Product의 타입을 정의
export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  //return type : 프라미스 객체[] (asycn가 있으므로 프라미스 객체 배열 리턴)
  const filePath = path.join(process.cwd(), "data", "products.json"); // 파일 경로
  const data = await fs.readFile(filePath, "utf-8"); // 파일 읽기
  return JSON.parse(data); // 프라미스 객체 json으로 파싱하여 반환
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts(); // 프라미스 객체이기 때문에
  return products.find((product) => product.id === id);
}
