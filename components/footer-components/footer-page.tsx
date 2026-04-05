import type { ReactNode } from "react";
import Link from "next/link";

type FooterPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: ReadonlyArray<{
    heading: string;
    body: ReadonlyArray<string>;
  }>;
  cta?: {
    label: string;
    href: string;
  };
  aside?: ReactNode;
};

export const FooterPage = ({
  eyebrow,
  title,
  description,
  sections,
  cta,
  aside,
}: FooterPageProps) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-[#6B52F1] p-8 text-white shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
            {description}
          </p>

          {cta ? (
            <Link
              href={cta.href}
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#6B52F1] transition hover:bg-violet-50"
            >
              {cta.label}
            </Link>
          ) : null}
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-slate-600 dark:text-slate-400"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}

          {aside ? (
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              {aside}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
