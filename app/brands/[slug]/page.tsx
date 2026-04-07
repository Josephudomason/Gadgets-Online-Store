import { notFound } from "next/navigation";

import BrandCatalogPage from "@/components/brand-catalog-page";
import {
  brandCollections,
  type BrandCollectionSlug,
} from "@/lib/brandCollections";

type BrandCollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  Object.keys(brandCollections).map((slug) => ({ slug }));

const BrandCollectionPage = async ({ params }: BrandCollectionPageProps) => {
  const { slug } = await params;
  const collection = brandCollections[slug as BrandCollectionSlug];

  if (!collection) {
    notFound();
  }

  return <BrandCatalogPage {...collection} />;
};

export default BrandCollectionPage;
