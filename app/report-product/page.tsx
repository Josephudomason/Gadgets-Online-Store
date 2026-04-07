import Image from "next/image";

import Footer from "@/app/footer";
import { NavBar } from "@/app/nav";
import { FooterPage } from "@/components/footer-components/footer-page";
import { footerPages } from "@/components/footer-components/footer-page-data";

const ReportProductPage = () => {
  const page = footerPages["report-product"];

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <NavBar />
      <FooterPage
        {...page}
        aside={
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-sm">
              <Image
                src="/page/editorial/report-product-hero.jpg"
                alt="Customer support and product review workspace"
                width={1600}
                height={900}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="rounded-[1.75rem] bg-white/80 p-5 text-sm leading-7 text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300">
              If a listing looks incorrect, incomplete, or misleading, this page gives customers a clear route to flag it so the store can be reviewed and improved quickly.
            </div>
          </div>
        }
      />
      <Footer />
    </main>
  );
};

export default ReportProductPage;
