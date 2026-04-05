import Image from "next/image";
import { NavBar } from "../nav";
import Footer from "../footer";

type NoticeGroup = {
  id: string;
  title: string;
  badge: string;
  description: string;
  items: string[];
  tone: string;
};

const noticeGroups: NoticeGroup[] = [
  {
    id: "discount-sales",
    title: "Discount Sales",
    badge: "Priority",
    description:
      "Active markdown campaigns and limited-time offers currently live.",
    items: [
      "Weekend flash discount on smartphone accessories",
      "Bundled charger and case promo gaining traction",
      "Premium headphones reduced for 48-hour clearance",
    ],
    tone: "border-emerald-200 bg-emerald-50",
  },
  {
    id: "top-sales",
    title: "Top Sales",
    badge: "High demand",
    description: "Best-performing products based on current purchase momentum.",
    items: [
      "Samsung A-series inventory moving fastest this week",
      "iPhone refurbished line remains top revenue segment",
      "Mid-range gaming phones driving repeat purchases",
    ],
    tone: "border-sky-200 bg-sky-50",
  },
  {
    id: "new-added",
    title: "New Added Gadgets",
    badge: "New",
    description:
      "Recently added devices now visible in the storefront catalog.",
    items: [
      "Xiaomi flagship line added with updated camera modules",
      "New Redmi 5G variants now available for browsing",
      "Foldable showcase section refreshed with latest models",
    ],
    tone: "border-violet-200 bg-violet-50",
  },
  {
    id: "trending",
    title: "Trending Gadgets",
    badge: "Trending",
    description:
      "Products gaining unusual visibility and engagement this cycle.",
    items: [
      "Large-display phones with premium finishes are peaking",
      "Portable speakers and audio bundles trending upward",
      "Affordable 5G devices seeing sustained clicks and saves",
    ],
    tone: "border-fuchsia-200 bg-fuchsia-50",
  },
  {
    id: "out-of-stock",
    title: "Out Of Stock",
    badge: "Attention",
    description: "Items unavailable in inventory and pending restock action.",
    items: [
      "Battery accessories sold out after promo campaign",
      "Best-selling color options currently unavailable",
      "High-demand budget devices awaiting supplier update",
    ],
    tone: "border-rose-200 bg-rose-50",
  },
  {
    id: "deleted",
    title: "Deleted Gadgets",
    badge: "Archived",
    description: "Products removed from active listing due to catalog cleanup.",
    items: [
      "Legacy phone models moved to archive collection",
      "Older product cards removed from homepage sections",
      "Discontinued SKUs disabled from customer search",
    ],
    tone: "border-slate-300 bg-slate-100",
  },
  {
    id: "company-news",
    title: "General News From Gadget Companies",
    badge: "News",
    description: "Brand-level updates influencing shopper behavior and demand.",
    items: [
      "Foldable launches increasing customer comparison sessions",
      "Camera-first marketing campaigns improving click-through",
      "Competitive pricing updates driving value-focused traffic",
    ],
    tone: "border-amber-200 bg-amber-50",
  },
];

const bannerProducts = [
  {
    id: "xiaomi-15t-pro",
    name: "Xiaomi 15T Pro",
    image: "/xiaomi/xiaomi-15t-pro.webp",
  },
  {
    id: "pixel-fold",
    name: "Google Pixel Fold",
    image: "/google/pixel-10-pro-fold-1.webp",
  },
  {
    id: "jbl-speaker",
    name: "JBL Speaker",
    image: "/products/JBL speaker 1.webp",
  },
  {
    id: "sony-ps4",
    name: "Sony PS4 Console",
    image: "/products/Sony Ps4 Console 1.webp",
  },
];

const NotificationPage = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <NavBar />
      <section className="mx-auto max-w-2xl px-4 py-10 md:px-8 lg:py-12">
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">
            Notification Center
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
            Gadget Activity Overview
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            A consolidated feed for discount activity, demand movement, stock
            changes, catalog updates, and market-level brand news.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {bannerProducts.map((product) => (
              <article
                key={product.id}
                className="group relative h-40 overflow-hidden rounded-xl border border-slate-200 bg-linear-to-b from-slate-50 to-white"
              >
                <div className="absolute inset-x-4 top-3 h-px bg-slate-200" />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-900/75 to-transparent px-3 py-2">
                  <p className="text-xs font-medium tracking-wide text-white">
                    {product.name}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {noticeGroups.map((group) => (
            <article
              key={group.id}
              className={`rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${group.tone}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-900">
                  {group.title}
                </h2>
                <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  {group.badge}
                </span>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                {group.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-800">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotificationPage;
