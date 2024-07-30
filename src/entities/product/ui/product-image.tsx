type ProductImageProps = {
  src: string;
  alt: string;
};

function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <img
      className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
      src={src}
      alt={alt}
    />
  );
}

export default ProductImage;
