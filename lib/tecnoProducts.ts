import { createCatalogCollection } from "@/lib/catalogFactory";

const tecnoProducts = createCatalogCollection({
  prefix: "tecno",
  folder: "tecno",
  line: "Tecno Collection",
  namePrefix: "Tecno",
  summary: "A Tecno catalog focused on bright displays, big batteries, and affordable everyday performance.",
  models: ["Camon 30", "Spark 20", "Phantom V", "Pova 6", "Pop 9"],
  priceStart: 210_000,
  priceStep: 9_000,
});

export { tecnoProducts };
