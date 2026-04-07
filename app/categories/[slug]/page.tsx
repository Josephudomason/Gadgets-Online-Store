import { notFound } from "next/navigation";

import BrandCatalogPage from "@/components/brand-catalog-page";
import {
  categoryCollections,
  type CategoryCollectionSlug,
} from "@/lib/category";

type CategoryCollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  Object.keys(categoryCollections).map((slug) => ({ slug }));

const CategoryCollectionPage = async ({
  params,
}: CategoryCollectionPageProps) => {
  const { slug } = await params;
  const collection = categoryCollections[slug as CategoryCollectionSlug];

  if (!collection) {
    notFound();
  }

  return <BrandCatalogPage {...collection} />;
};

export default CategoryCollectionPage;
