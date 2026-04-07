import { createCatalogCollection } from "@/lib/catalogFactory";

const nokiaProducts = createCatalogCollection({
  prefix: "nokia",
  folder: "nokia",
  line: "Nokia Collection",
  namePrefix: "Nokia",
  summary: "A Nokia collection mixing classic reliability, clean software, and sturdy hardware presentation.",
  models: ["G42", "X30", "C32", "T21", "XR21"],
  priceStart: 185_000,
  priceStep: 8_000,
});

export { nokiaProducts };
