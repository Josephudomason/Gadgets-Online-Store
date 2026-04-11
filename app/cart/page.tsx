import Footer from "@/app/footer";
import { NavBar } from "@/app/nav";
import Cart from "@/components/cart";

const CartPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-slate-900 dark:text-slate-50">
      <NavBar />

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Shopping cart
          </p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 dark:text-slate-50">
            Review your selected products
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-slate-400">
            Adjust quantities, remove products you do not want, and continue to checkout when you are ready.
          </p>
        </div>

        <Cart />
      </section>

      <Footer />
    </main>
  );
};

export default CartPage;
