"use client";
import { Each } from "@/shared/ui/component";

import { Product } from "@/entities/product/model";
import { ProductCard } from "@/entities/product/ui";

import { useProductFavorite } from "@/features/product/product-favorite/model";

type ProductListProps = {
  data: Product[];
};

function ProductList({ data }: ProductListProps) {
  const { addFavorite, removeFavorite, isFavorite } = useProductFavorite();

  return (
    <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold">Products</h2>
      <div className="flex flex-col divide-y divide-gray-700">
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
      </div>
    </div>
  );
}

export default ProductList;
