import { createCatalogCollection } from "@/lib/catalogFactory";

const oaleProducts = createCatalogCollection({
  prefix: "oale",
  folder: "oale",
  line: "Oale Collection",
  namePrefix: "Oale",
  summary: "An Oale range positioned around accessible pricing, simple design, and dependable everyday use.",
  models: ["Vision 5", "Glow 9", "Core Max", "Nova Air", "Prime 7"],
  priceStart: 110_000,
  priceStep: 5_500,
});

export { oaleProducts };
