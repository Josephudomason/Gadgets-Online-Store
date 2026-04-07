import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import Footer from "@/app/footer";
import { NavBar } from "@/app/nav";
import AddToCartButton from "@/components/add-to-cart-button";
import ProductFeedback from "@/components/product-feedback";
import RelatedProducts from "@/components/related-products";
import { Button } from "@/components/ui/button";
import { getProductById, getRelatedProducts, products } from "@/lib/productCatalog";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export const generateStaticParams = () =>
  products.map((product) => ({
    id: product.id,
  }));

const ProductInfoPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-slate-950 dark:text-slate-50">
      <NavBar />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.05fr_1fr] md:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/products"
              className="text-sm font-medium text-violet-600 transition hover:text-violet-700"
            >
              Back to products
            </Link>
            {product.brand ? (
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
                {product.brand}
              </span>
            ) : null}
          </div>

          <div className="flex min-h-80 items-center justify-center rounded-2xl bg-gray-50 p-6 dark:bg-slate-950">
            <Image
              src={product.image}
              alt={product.name}
              width={420}
              height={420}
              sizes="(max-width: 768px) 100vw, 420px"
              unoptimized={product.image.endsWith(".gif")}
              className="h-auto max-h-90 w-full max-w-sm object-contain"
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Product details
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 dark:text-slate-50">{product.name}</h1>

          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600 dark:text-slate-300">
            <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-slate-950">
              Model: {product.model}
            </span>
            {product.storage ? (
              <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-slate-950">
                Storage: {product.storage}
              </span>
            ) : null}
          </div>

          {product.price ? (
            <p className="mt-6 text-2xl font-bold text-gray-900 dark:text-slate-50">{product.price}</p>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-3">
            <AddToCartButton product={product} />
            <Button
              asChild
              className="bg-violet-600 px-5 text-white hover:bg-violet-700"
            >
              <Link href="/checkout">Proceed to checkout</Link>
            </Button>
          </div>

          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-slate-300">{product.description}</p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-50">Specifications</h2>
            <div className="mt-4 space-y-3">
              {Object.entries(product.Specifications).map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm font-medium capitalize text-gray-500 dark:text-slate-400">
                    {label.replace(/([A-Z])/g, " $1")}
                  </span>
                  <span className="text-sm text-gray-900 dark:text-slate-100">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductFeedback productId={product.id} productName={product.name} />

      {relatedProducts.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pb-10 md:px-8">
          <div className="rounded-lg bg-white p-5 shadow-sm dark:bg-slate-900 sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-slate-50">
                Related products
              </h2>
            </div>
            <RelatedProducts products={relatedProducts} />
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  );
};

export default ProductInfoPage;
