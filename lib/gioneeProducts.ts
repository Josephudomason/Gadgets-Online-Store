import { createCatalogCollection } from "@/lib/catalogFactory";

const gioneeProducts = createCatalogCollection({
  prefix: "gionee",
  folder: "gionee",
  line: "Gionee Collection",
  namePrefix: "Gionee",
  summary: "A Gionee catalog centered on slim styling, media-ready screens, and practical battery life.",
  models: ["M15", "P12", "F10", "Max Pro", "S11 Lite"],
  priceStart: 150_000,
  priceStep: 6_500,
});

export { gioneeProducts };
