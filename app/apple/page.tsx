import BrandCatalogPage from "@/components/brand-catalog-page";
import { appleGadgets } from "@/lib/appleGadgets";

const appleProducts = appleGadgets.map((product) => ({
  id: product.id,
  name: product.name,
  image: product.image,
  line: "Apple iPhone",
  price: product.price,
  summary: `${product.model}${product.storage ? ` with ${product.storage} storage` : ""} in the Apple collection.`,
}));

const ApplePage = () => {
  return (
    <BrandCatalogPage
      eyebrow="Apple Collection"
      title="Explore Apple iPhones"
      description="A dedicated Apple products page for shoppers who want to browse iPhone options directly from the brand section."
      gradientClassName="bg-linear-to-r from-slate-200 via-white to-slate-300"
      accentClassName="text-slate-600"
      products={appleProducts}
    />
  );
};

export default ApplePage;
