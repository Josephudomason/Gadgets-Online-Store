import BrandCatalogPage from "@/components/brand-catalog-page";
import { xiaomiProducts } from "@/lib/xiaomiProducts";

const XiaomiPage = () => {
  return (
    <BrandCatalogPage
      eyebrow="Xiaomi Collection"
      title="Explore Xiaomi, Redmi, and POCO products"
      description="A dedicated Xiaomi products page for customers who want to browse Xiaomi family devices directly from the brand section."
      gradientClassName="bg-linear-to-r from-orange-500 via-orange-400 to-amber-300"
      accentClassName="text-orange-600"
      products={xiaomiProducts}
    />
  );
};

export default XiaomiPage;
