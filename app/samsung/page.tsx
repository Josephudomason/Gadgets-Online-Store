import BrandCatalogPage from "@/components/brand-catalog-page";
import { samsungGadgets } from "@/lib/samsungGadgets";

const samsungProducts = samsungGadgets.map((product) => ({
  id: product.id,
  name: product.name,
  image: product.image,
  line: "Samsung Galaxy",
  price: product.price,
  summary: `${product.model} in the Samsung lineup${product.storage ? ` with ${product.storage} storage` : ""}.`,
}));

const SamsungPage = () => {
  return (
    <BrandCatalogPage
      eyebrow="Samsung Collection"
      title="Explore Samsung phones"
      description="A dedicated Samsung products page for customers who want to browse Galaxy devices directly from the brand section."
      gradientClassName="bg-linear-to-r from-sky-200 via-cyan-100 to-blue-300"
      accentClassName="text-sky-700"
      products={samsungProducts}
    />
  );
};

export default SamsungPage;
