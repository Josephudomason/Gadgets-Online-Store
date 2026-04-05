import { phoneImg } from "@/lib/catalogImages";

type SamsungGadget = {
  id: string;
  name: string;
  model: string;
  storage: string | null;
  price: string;
  image: string;
};

const samsungGadgets: SamsungGadget[] = [
  {
    id: "galaxy-s24-fe",
    name: "Samsung Galaxy S24 FE",
    model: "Galaxy S24 FE",
    storage: "256 GB",
    price: "N 1,180,000",
    image: "/samsung/galaxy-s24-fe.gif",
  },
  {
    id: "galaxy-s25-series",
    name: "Samsung Galaxy S25 Series",
    model: "Galaxy S25 Series",
    storage: "256 GB",
    price: "N 1,780,000",
    image: "/samsung/galaxy-s25-series.webp",
  },
  {
    id: "galaxy-s25-fe",
    name: "Samsung Galaxy S25 FE",
    model: "Galaxy S25 FE",
    storage: "256 GB",
    price: "N 1,420,000",
    image: "/samsung/galaxy-s25-fe.webp",
  },
  {
    id: "galaxy-s26-series",
    name: "Samsung Galaxy S26 Series",
    model: "Galaxy S26 Series",
    storage: "512 GB",
    price: "N 2,050,000",
    image: "/samsung/galaxy-s26-series.webp",
  },
  {
    id: "galaxy-note-10-plus-1",
    name: "Samsung Galaxy Note 10+",
    model: "Galaxy Note 10+",
    storage: null,
    price: "N 420,000",
    image: "/products/Galaxy Note 10+ 1.webp",
  },
  {
    id: "galaxy-note-9-1",
    name: "Samsung Galaxy Note 9",
    model: "Galaxy Note 9",
    storage: null,
    price: "N 350,000",
    image: "/products/Galaxy Note 9 1.webp",
  },
  {
    id: "samsung-a03-1",
    name: "Samsung A03",
    model: "Samsung A03",
    storage: null,
    price: "N 145,000",
    image: "/products/Samsung A03 1.webp",
  },
  {
    id: "samsung-s10-1",
    name: "Samsung S10",
    model: "Samsung S10",
    storage: null,
    price: "N 310,000",
    image: "/products/Samsung S10 1.webp",
  },
  {
    id: "galaxy-z-fold-6",
    name: "Samsung Galaxy Z Fold 6",
    model: "Galaxy Z Fold 6",
    storage: "512 GB",
    price: "N 2,280,000",
    image: phoneImg(8),
  },
  {
    id: "galaxy-z-flip-6",
    name: "Samsung Galaxy Z Flip 6",
    model: "Galaxy Z Flip 6",
    storage: "256 GB",
    price: "N 1,350,000",
    image: phoneImg(9),
  },
  {
    id: "galaxy-a55",
    name: "Samsung Galaxy A55",
    model: "Galaxy A55",
    storage: "128 GB",
    price: "N 385,000",
    image: phoneImg(10),
  },
  {
    id: "galaxy-a35",
    name: "Samsung Galaxy A35",
    model: "Galaxy A35",
    storage: "128 GB",
    price: "N 295,000",
    image: phoneImg(11),
  },
  {
    id: "galaxy-s23-fe",
    name: "Samsung Galaxy S23 FE",
    model: "Galaxy S23 FE",
    storage: "256 GB",
    price: "N 980,000",
    image: phoneImg(12),
  },
  {
    id: "galaxy-m55",
    name: "Samsung Galaxy M55",
    model: "Galaxy M55",
    storage: "256 GB",
    price: "N 410,000",
    image: phoneImg(13),
  },
  {
    id: "galaxy-f55",
    name: "Samsung Galaxy F55",
    model: "Galaxy F55",
    storage: "256 GB",
    price: "N 365,000",
    image: phoneImg(14),
  },
  {
    id: "galaxy-tab-s9",
    name: "Samsung Galaxy Tab S9",
    model: "Galaxy Tab S9",
    storage: "256 GB",
    price: "N 890,000",
    image: phoneImg(15),
  },
  {
    id: "galaxy-buds-3-pro",
    name: "Samsung Galaxy Buds3 Pro",
    model: "Galaxy Buds3 Pro",
    storage: null,
    price: "N 185,000",
    image: phoneImg(16),
  },
  {
    id: "galaxy-watch-7",
    name: "Samsung Galaxy Watch 7",
    model: "Galaxy Watch 7",
    storage: null,
    price: "N 310,000",
    image: phoneImg(17),
  },
  {
    id: "galaxy-fit-3",
    name: "Samsung Galaxy Fit 3",
    model: "Galaxy Fit 3",
    storage: null,
    price: "N 95,000",
    image: phoneImg(18),
  },
  {
    id: "galaxy-xcover-7",
    name: "Samsung Galaxy XCover 7",
    model: "Galaxy XCover 7",
    storage: "128 GB",
    price: "N 520,000",
    image: phoneImg(19),
  },
  ...Array.from({ length: 10 }, (_, index) => {
    const slot = index + 21;

    return {
      id: `samsung-line-${slot}`,
      name: `Samsung Galaxy Line ${slot}`,
      model: `Galaxy ${slot}`,
      storage: index % 2 === 0 ? "256 GB" : "128 GB",
      price: `N ${(320 + index * 15) * 1000}`,
      image: phoneImg(slot),
    };
  }),
];

export { samsungGadgets };
export type { SamsungGadget };
