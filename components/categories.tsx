import Image from "next/image";
import { category } from "@/lib/category";

const Categories = () => {
  return (
    <div className="grid w-full grid-cols-6 gap-4 p-6">
      {category.map((product, index) => (
        <div key={index} className="min-h-10 bg-white p-3 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-300">
              <Image
                src={product.Image}
                alt={product.Name}
                width={50}
                height={50}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="mt-2 text-xs font-medium leading-tight text-gray-700">
              {product.Name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
