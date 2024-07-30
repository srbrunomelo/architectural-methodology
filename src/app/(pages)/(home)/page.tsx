import dynamic from "next/dynamic";
import { productList } from "@/entities/product/api";

// https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#skipping-ssr
// https://nextjs.org/docs/messages/react-hydration-error

const ProductList = dynamic(
  () => import("@/features/product/product-list/ui/product-list"),
  { ssr: false }
);

export default async function Home() {
  const { data, error } = await productList();

  if (!error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ProductList data={data.items} />
      </main>
    );
  }

  return <p>Page With Error</p>;
}
