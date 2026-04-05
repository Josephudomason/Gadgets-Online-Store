/** Local stock photos in `public/catalog` (downloaded assets). */
export const phoneImg = (index: number) =>
  `/catalog/p-${String(((index - 1) % 30) + 1).padStart(2, "0")}.jpg`;

export const watchImg = (index: number) =>
  `/catalog/w-${String(((index - 1) % 5) + 1).padStart(2, "0")}.jpg`;
