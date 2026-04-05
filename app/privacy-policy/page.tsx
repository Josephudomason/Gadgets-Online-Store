import Footer from "@/app/footer";
import { NavBar } from "@/app/nav";
import { FooterPage } from "@/components/footer-components/footer-page";
import { footerPages } from "@/components/footer-components/footer-page-data";

const PrivacyPolicyPage = () => {
  const page = footerPages["privacy-policy"];

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <NavBar />
      <FooterPage {...page} />
      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
