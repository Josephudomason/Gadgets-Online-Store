import { createCatalogCollection } from "@/lib/catalogFactory";

const itelProducts = createCatalogCollection({
  prefix: "itel",
  folder: "itel",
  line: "Itel Collection",
  namePrefix: "Itel",
  summary: "An Itel device range tailored for value seekers who want dependable daily-use smartphones.",
  models: ["S24", "A80", "P55", "RS4", "City 100"],
  priceStart: 120_000,
  priceStep: 6_000,
});

export { itelProducts };
