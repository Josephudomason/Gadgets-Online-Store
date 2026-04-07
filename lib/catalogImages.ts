/** Cycles through existing real product images in public/ instead of missing catalog/. */
const existingPhoneImages = [
  "/apple/iphone-16-pro.webp",
  "/apple/iphone-16.webp",
  "/apple/iphone-16e.webp",
  "/products/iphone 12 Gbg 1.webp",
  "/products/iphone 12promax 124gbg 1.webp",
  "/products/Iphone X 256 Gbgb 1.webp",
  "/products/iphone Xsmax 256gbg 1.webp",
  "/products/iphone Xsmax 64 Ggbg 1.webp",
  "/products/Samsung A03 1.webp",
  "/products/Samsung S10 1.webp",
  "/products/Galaxy Note 9 1.webp",
  "/products/Galaxy Note 10+ 1.webp",
  "/xiaomi/xiaomi-15t-pro.webp",
  "/xiaomi/xiaomi-15t.webp",
  "/xiaomi/redmi-15.webp",
  "/xiaomi/redmi-15c.webp",
  "/xiaomi/redmi-15c-5g.webp",
  "/xiaomi/poco-f8-ultra.webp",
  "/xiaomi/poco-f8-pro.webp",
  "/samsung/galaxy-s25-series.webp",
  "/samsung/galaxy-s25-fe.webp",
  "/samsung/galaxy-s26-series.webp",
  "/samsung/galaxy-s24-fe.gif",
  "/google/pixel-10-pro-fold-1.webp",
  "/google/pixel-10-pro-fold-2.webp",
  "/google/pixel-10-pro-fold-3.webp",
  "/google/pixel-10-pro-fold-4.webp",
  "/products/Tecno cmaon 19 1.webp",
  "/products/Google pixel Ga 1.webp",
  "/oppo/find-x8-pro.webp",
  "/oppo/find-x8.webp",
  "/oppo/reno13-pro.webp",
  "/oppo/reno13.webp",
  "/huawei/pura80-ultra.webp",
  "/huawei/pura80-pro.webp",
  "/huawei/mate80-pro.webp",
  "/huawei/mate-x6.webp"
];

const existingWatchImages = [
  "/products/Google pixel watch 1.webp",
  "/iwatches/apple-watch-series-10.png",
  "/iwatches/pixel-watch-3.webp",
  "/huawei/watch-5.webp",
  "/oppo/watch-x2.webp",
  "/oppo/watch-x2-mini.webp"
];

export const applePhoneImages = [
  "/apple/iphone-16-pro.webp",
  "/apple/iphone-16.webp",
  "/apple/iphone-16e.webp",
  "/products/iphone 12 Gbg 1.webp",
  "/products/iphone 12promax 124gbg 1.webp",
  "/products/Iphone X 256 Gbgb 1.webp",
  "/products/iphone Xsmax 256gbg 1.webp",
  "/products/iphone Xsmax 64 Ggbg 1.webp",
] as const;

export const samsungPhoneImages = [
  "/samsung/galaxy-s24-fe.gif",
  "/samsung/galaxy-s25-series.webp",
  "/samsung/galaxy-s25-fe.webp",
  "/samsung/galaxy-s26-series.webp",
  "/products/Samsung S10 1.webp",
  "/products/Galaxy Note 9 1.webp",
  "/products/Galaxy Note 10+ 1.webp",
  "/products/Samsung A03 1.webp",
] as const;

export const xiaomiPhoneImages = [
  "/xiaomi/xiaomi-15t.webp",
  "/xiaomi/xiaomi-15t-pro.webp",
  "/xiaomi/redmi-15.webp",
  "/xiaomi/redmi-15c.webp",
  "/xiaomi/redmi-15c-5g.webp",
  "/xiaomi/poco-f8-pro.webp",
  "/xiaomi/poco-f8-ultra.webp",
  "/xiaomi/poco-c85.webp",
] as const;

export const googlePhoneImages = [
  "/google/pixel-10-pro-fold-1.webp",
  "/google/pixel-10-pro-fold-2.webp",
  "/google/pixel-10-pro-fold-3.webp",
  "/google/pixel-10-pro-fold-4.webp",
  "/google/pixel-10-pro-fold-5.webp",
  "/google/pixel-10-pro-fold-6.webp",
  "/google/pixel-10-pro-fold-7.webp",
  "/google/pixel-10-pro-fold-8.webp",
] as const;

export const huaweiPhoneImages = [
  "/huawei/mate80-pro.webp",
  "/huawei/mate-x7.webp",
  "/huawei/mate-xt-ultimate-design.webp",
  "/huawei/mate-x6.webp",
  "/huawei/pura80-pro.webp",
  "/huawei/pura80-ultra.webp",
  "/huawei/nova14-pro.webp",
] as const;

export const oppoPhoneImages = [
  "/oppo/find-x8-pro.webp",
  "/oppo/find-x8.webp",
  "/oppo/find-n5.webp",
  "/oppo/reno13-pro.webp",
  "/oppo/reno13.webp",
  "/oppo/reno13-f-5g.webp",
] as const;

export const imageAt = (images: readonly string[], index: number) =>
  images[(index - 1) % images.length];

export const phoneImg = (index: number) =>
  existingPhoneImages[(index - 1) % existingPhoneImages.length];

export const watchImg = (index: number) =>
  existingWatchImages[(index - 1) % existingWatchImages.length];

