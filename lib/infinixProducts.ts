import { createCatalogCollection } from "@/lib/catalogFactory";

const infinixProducts = createCatalogCollection({
  prefix: "infinix",
  folder: "infinix",
  line: "Infinix Collection",
  namePrefix: "Infinix",
  summary: "An Infinix lineup built around gaming energy, fast charging, and budget-friendly Android options.",
  models: ["Note 40", "Hot 50", "Zero Flip", "GT 20", "Smart 9"],
  priceStart: 205_000,
  priceStep: 8_500,
});

export { infinixProducts };
