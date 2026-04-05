import BrandCatalogPage from "@/components/brand-catalog-page";
import { googleProducts } from "@/lib/googleProducts";

const GooglePage = () => {
  return (
    <BrandCatalogPage
      eyebrow="Google Collection"
      title="Explore Google devices"
      description="A dedicated Google products page built from the Pixel assets already in the project so the Google brand card leads somewhere useful."
      gradientClassName="bg-linear-to-r from-slate-200 via-emerald-100 to-sky-200"
      accentClassName="text-emerald-700"
      products={googleProducts}
    />
  );
};

export default GooglePage;
