import Footer from "@/app/footer";
import { NavBar } from "@/app/nav";
import BrandProductGrid from "@/components/brand-product-grid";

type BrandCatalogProduct = {
  id: string;
  name: string;
  image: string;
  line: string;
  price: string;
  summary: string;
};

type BrandCatalogPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  gradientClassName: string;
  accentClassName: string;
  products: readonly BrandCatalogProduct[];
};

const BrandCatalogPage = ({
  eyebrow,
  title,
  description,
  gradientClassName,
  accentClassName,
  products,
}: BrandCatalogPageProps) => {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950 dark:bg-slate-900 dark:text-slate-50">
      <NavBar />

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className={`overflow-hidden rounded-[2rem] p-8 text-slate-950 shadow-xl ${gradientClassName}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-900/70">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-900/80">
            {description}
          </p>
        </div>

        <div className="mt-8">
          <BrandProductGrid products={products} accentClassName={accentClassName} />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BrandCatalogPage;
