import Image from "next/image";
import Link from "next/link";
import { brands } from "@/lib/brands";

const Brands = () => {
  return (
    <div className="grid w-full gap-4 p-6 grid-cols-6">
      {brands.map((brand, index) => (
        <div key={index} className="min-h-10 bg-white p-3 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-300 p-2">
              {brand.href ? (
                <Link
                  href={brand.href}
                  aria-label={`View ${brand.brandName} products`}
                >
                  <Image
                    src={brand.logo}
                    alt={brand.brandName}
                    width={50}
                    height={50}
                    className="max-h-full max-w-full object-contain transition hover:scale-105"
                  />
                </Link>
              ) : (
                <Image
                  src={brand.logo}
                  alt={brand.brandName}
                  width={50}
                  height={50}
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>
            <p className="mt-2 text-xs font-medium leading-tight text-gray-700">
              {brand.brandName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brands;
