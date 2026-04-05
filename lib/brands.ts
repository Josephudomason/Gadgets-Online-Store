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
  }
];

export { brands };
export type { BrandItem };
