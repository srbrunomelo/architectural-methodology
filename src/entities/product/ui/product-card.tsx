import { Product } from "@/entities/product/model";

import ProductValue from "./product-value";
import ProductImage from "./product-image";
import ProductInfo from "./product-info";
import ProductActions from "./product-actions";

type ProductCardProps = {
  product: Product;
  isFavorite: boolean;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

function ProductCard({
  product,
  isFavorite,
  addFavorite,
  removeFavorite,
}: ProductCardProps) {
  return (
    <div className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <ProductImage src={product.photo} alt={product.name} />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <ProductInfo name={product.name} />
            <ProductValue value={product.value} />
          </div>
          <ProductActions
            id={product.id}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            isFavorite={isFavorite}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
