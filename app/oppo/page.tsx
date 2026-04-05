import BrandCatalogPage from "@/components/brand-catalog-page";
import { oppoProducts } from "@/lib/oppoProducts";

const OppoPage = () => {
  return (
    <BrandCatalogPage
      eyebrow="Oppo Collection"
      title="Explore Oppo products"
      description="A dedicated Oppo products page built from the official Oppo product assets already downloaded into the project."
      gradientClassName="bg-linear-to-r from-lime-200 via-emerald-100 to-green-300"
      accentClassName="text-green-700"
      products={oppoProducts}
    />
  );
};

export default OppoPage;
