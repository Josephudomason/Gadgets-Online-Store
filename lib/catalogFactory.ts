export type CatalogCollectionProduct = {
  id: string;
  name: string;
  image: string;
  line: string;
  price: string;
  summary: string;
};

type CatalogFactoryOptions = {
  prefix: string;
  folder: string;
  line: string;
  summary: string;
  models: readonly string[];
  namePrefix?: string;
  variantLabel?: string;
  priceStart?: number;
  priceStep?: number;
  count?: number;
};

const formatNaira = (amount: number) =>
  `N ${new Intl.NumberFormat("en-NG").format(amount)}`;

const createCatalogCollection = ({
  prefix,
  folder,
  line,
  summary,
  models,
  namePrefix,
  variantLabel = "Edition",
  priceStart = 120_000,
  priceStep = 7_500,
  count = 20,
}: CatalogFactoryOptions): CatalogCollectionProduct[] =>
  Array.from({ length: count }, (_, index) => {
    const slot = index + 1;
    const model = models[index % models.length];
    const displayName = namePrefix ? `${namePrefix} ${model}` : model;

    return {
      id: `${prefix}-${String(slot).padStart(2, "0")}`,
      name: displayName,
      image: `/${folder}/${prefix}-${String(slot).padStart(2, "0")}.webp`,
      line,
      price: formatNaira(priceStart + index * priceStep),
      summary: `${summary} ${variantLabel} ${String(slot).padStart(2, "0")} is ready for checkout.`,
    };
  });

export { createCatalogCollection };
