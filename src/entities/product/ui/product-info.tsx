type ProductInfoProps = {
  name: string;
};

function ProductInfo({ name }: ProductInfoProps) {
  return (
    <div className="space-y-1">
      <h3 className="text-lg font-semibold leadi sm:pr-8">{name}</h3>
      <p className="text-sm dark:text-gray-400">Classic</p>
    </div>
  );
}

export default ProductInfo;
