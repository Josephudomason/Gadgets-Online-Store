import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import Footer from "@/app/footer";
import { NavBar } from "@/app/nav";
import AddToCartButton from "@/components/add-to-cart-button";
import { getProductById, products } from "@/lib/productCatalog";

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

  return (
    <main className="min-h-screen bg-gray-100">
      <NavBar />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.05fr_1fr] md:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/"
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

          <div className="flex min-h-80 items-center justify-center rounded-2xl bg-gray-50 p-6">
            <Image
              src={product.image}
              alt={product.name}
              width={420}
              height={420}
              className="h-auto max-h-90 w-full max-w-sm object-contain"
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Product details
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900">{product.name}</h1>

          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="rounded-full bg-gray-100 px-3 py-1">
              Model: {product.model}
            </span>
            {product.storage ? (
              <span className="rounded-full bg-gray-100 px-3 py-1">
                Storage: {product.storage}
              </span>
            ) : null}
          </div>

          {product.price ? (
            <p className="mt-6 text-2xl font-bold text-gray-900">{product.price}</p>
          ) : null}

          <AddToCartButton product={product} />

          <p className="mt-6 text-base leading-7 text-gray-600">{product.description}</p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">Specifications</h2>
            <div className="mt-4 space-y-3">
              {Object.entries(product.Specifications).map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm font-medium capitalize text-gray-500">
                    {label.replace(/([A-Z])/g, " $1")}
                  </span>
                  <span className="text-sm text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductInfoPage;
