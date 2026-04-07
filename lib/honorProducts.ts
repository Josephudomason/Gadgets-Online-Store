import { createCatalogCollection } from "@/lib/catalogFactory";

const honorProducts = createCatalogCollection({
  prefix: "honor",
  folder: "honor",
  line: "Honor Collection",
  namePrefix: "Honor",
  summary: "An Honor device range pairing premium design cues with strong cameras and modern Android features.",
  models: ["Magic 6", "X9b", "90 Smart", "Pad X9", "200 Pro"],
  priceStart: 255_000,
  priceStep: 10_000,
});

export { honorProducts };
