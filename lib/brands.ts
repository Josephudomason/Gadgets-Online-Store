interface BrandItem {
  logo: string;
  brandName: string;
  href?: string;
}

const brands: BrandItem[] = [
  {
    logo: "/brands/Apple.webp",
    brandName: "Apple",
    href: "/apple",
  },
  {
    logo: "/brands/Samsung.webp",
    brandName: "Samsung",
    href: "/samsung",
  },
  {
    logo: "/brands/Xiaomi.webp",
    brandName: "Xiaomi",
    href: "/xiaomi",
  },
  {
    logo: "/brands/Google.webp",
    brandName: "Google",
    href: "/google",
  },
  {
    logo: "/brands/Huawei.webp",
    brandName: "Huawei",
    href: "/huawei",
  },
  {
    logo: "/brands/Oppo.webp",
    brandName: "Oppo",
    href: "/oppo",
  },
  {
    logo: "/brands/Tecno.svg",
    brandName: "Tecno",
    href: "/brands/tecno",
  },
  {
    logo: "/brands/Infinix.png",
    brandName: "Infinix",
    href: "/brands/infinix",
  },
  {
    logo: "/brands/Itel.svg",
    brandName: "Itel",
    href: "/brands/itel",
  },
  {
    logo: "/brands/Nokia.svg",
    brandName: "Nokia",
    href: "/brands/nokia",
  },
  {
    logo: "/brands/Gionee.png",
    brandName: "Gionee",
    href: "/brands/gionee",
  },
  {
    logo: "/brands/Vivo.svg",
    brandName: "vivo",
    href: "/brands/vivo",
  },
  {
    logo: "/brands/Honor.svg",
    brandName: "Honor",
    href: "/brands/honor",
  },
  {
    logo: "/brands/Oale.png",
    brandName: "Oale",
    href: "/brands/oale",
  },
];

export { brands };
export type { BrandItem };
