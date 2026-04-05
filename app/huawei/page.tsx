import BrandCatalogPage from "@/components/brand-catalog-page";
import { huaweiProducts } from "@/lib/huaweiProducts";

const HuaweiPage = () => {
  return (
    <BrandCatalogPage
      eyebrow="Huawei Collection"
      title="Explore Huawei products"
      description="A dedicated Huawei products page built from the Huawei product assets available in the project, including phones and selected smart devices."
      gradientClassName="bg-linear-to-r from-rose-300 via-red-200 to-orange-200"
      accentClassName="text-rose-700"
      products={huaweiProducts}
    />
  );
};

export default HuaweiPage;
