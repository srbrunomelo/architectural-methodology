export type Product = {
  name: string;
  value: string;
  photo: string;
  category_id: number;
  id: string;
};

export type productListReturn = {
  error: boolean;
  data: {
    items: Product[];
  };
};
