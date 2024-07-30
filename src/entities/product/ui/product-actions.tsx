import { IF } from "@/shared/ui/component";
import { LoveIcon, TrashIcon } from "@/shared/ui/icon";

type ProductActionsProps = {
  id: string;
  isFavorite: boolean;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

function ProductActions({
  isFavorite,
  id,
  addFavorite,
  removeFavorite,
}: ProductActionsProps) {
  return (
    <div className="flex text-sm divide-x">
      <IF condition={isFavorite}>
        <button
          type="button"
          className="flex items-center px-2 py-1 pl-0 space-x-1"
          onClick={() => removeFavorite(id)}
        >
          <TrashIcon />
          <span>Remove from favorites</span>
        </button>
      </IF>
      <IF condition={!isFavorite}>
        <button
          type="button"
          className="flex items-center py-1 space-x-1"
          onClick={() => addFavorite(id)}
        >
          <LoveIcon />
          <span>Add to favorites</span>
        </button>
      </IF>
    </div>
  );
}

export default ProductActions;
