type ProductValueProps = {
  value: string;
};

function ProductValue({ value }: ProductValueProps) {
  return (
    <div className="text-right">
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-sm line-through dark:text-gray-600">{value}</p>
    </div>
  );
}

export default ProductValue;
