import { createCatalogCollection } from "@/lib/catalogFactory";

const vivoProducts = createCatalogCollection({
  prefix: "vivo",
  folder: "vivo",
  line: "vivo Collection",
  namePrefix: "vivo",
  summary: "A vivo lineup highlighting portrait cameras, sleek finishes, and polished midrange performance.",
  models: ["V40", "Y28", "X100", "Y200", "V30 Lite"],
  priceStart: 240_000,
  priceStep: 9_500,
});

export { vivoProducts };
