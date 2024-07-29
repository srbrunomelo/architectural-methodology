"use client";

import { Product } from "@/entities/products/model";
import ProductCard from "@/entities/products/ui/product-card";
import { Each } from "@/shared/ui/components";
import useFavoriteProducts from "@/features/products/model/use-favorite-products";

type ProductListProps = {
  data: Product[];
};

function ProductList({ data }: ProductListProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteProducts();

  return (
    <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold">Products</h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        <Each
          items={data}
          render={(product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={isFavorite(product.id)}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />
          )}
        />
      </ul>
    </div>
  );
}

export default ProductList;
