import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";

type FavoriteProductsActions = {
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

type FavoriteProductsState = {
  favorites: string[];
};

const useFavoriteProducts = create<
  FavoriteProductsActions & FavoriteProductsState
>()(
  //@ts-ignore
  persist(
    (set, get) => ({
      favorites: [],

      isFavorite: (id: string) => {
        const { favorites } = get();

        return favorites.includes(id);
      },

      addFavorite: (id: string) => {
        const { isFavorite } = get();
        if (!isFavorite(id)) {
          set((state) => ({
            favorites: [...state.favorites, id],
          }));
        }
      },

      removeFavorite: (id: string) =>
        set((state) => ({
          favorites: state.favorites.filter((row) => row !== id),
        })),
    }),

    {
      name: "use-favorite-products",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFavoriteProducts;
