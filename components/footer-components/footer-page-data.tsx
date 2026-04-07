import Link from "next/link";

export const footerPages = {
  "report-product": {
    eyebrow: "Support",
    title: "Report a product issue",
    description:
      "Use this page when a product listing looks inaccurate, misleading, unavailable, or incomplete. We review reports to improve catalog quality and buyer trust.",
    sections: [
      {
        heading: "What to report",
        body: [
          "Report products with incorrect pricing, wrong specifications, duplicate listings, unavailable stock, misleading photos, or damaged packaging claims.",
          "A strong report usually includes the product name, the exact issue you noticed, and what the listing should show instead if you know it.",
        ],
      },
      {
        heading: "How we handle reports",
        body: [
          "Our store team reviews reports, compares them with supplier information, and updates or removes listings that do not meet our catalog standards.",
          "For urgent issues that could affect a purchase decision, we prioritize visibility fixes first and then complete deeper catalog corrections after review.",
        ],
      },
    ],
    aside: (
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          Quick help
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Send a report to{" "}
          <a
            href="mailto:PristineGadgets@gmail.com"
            className="font-semibold text-violet-600 hover:text-violet-700"
          >
            PristineGadgets@gmail.com
          </a>{" "}
          with the product name and the issue you found.
        </p>
      </div>
    ),
  },
  "about-us": {
    eyebrow: "Company",
    title: "About Pristine Gadgets",
    description:
      "Pristine Gadgets is focused on helping people shop confidently for phones, accessories, wearables, gaming devices, and everyday tech with clear product information and a straightforward buying experience.",
    sections: [
      {
        heading: "What we care about",
        body: [
          "We aim to make gadget shopping feel simple, trustworthy, and well-organized, especially for customers comparing many similar products at once.",
          "That means clearer catalog structure, stronger product descriptions, useful recommendations, and a checkout flow that feels reliable rather than confusing.",
        ],
      },
      {
        heading: "How we are growing",
        body: [
          "The storefront is being built to support stronger product detail pages, better account tools, and a more complete post-purchase experience over time.",
          "As the platform matures, we plan to deepen account management, delivery information, and support workflows across the customer journey.",
        ],
      },
    ],
    cta: {
      label: "Browse products",
      href: "/",
    },
  },
  "our-story": {
    eyebrow: "Brand Story",
    title: "Our story",
    description:
      "Pristine Gadgets is being shaped around a simple idea: customers should be able to discover devices, compare options, and shop with more confidence and less friction.",
    sections: [
      {
        heading: "Why this store exists",
        body: [
          "Tech shopping can feel noisy when products look similar and details are inconsistent. We want the storefront to feel clearer, more curated, and easier to trust.",
          "That is why the platform focuses on structured catalog sections, stronger product presentation, and a buying journey that keeps customers oriented from browsing to checkout.",
        ],
      },
      {
        heading: "Where we are headed",
        body: [
          "Our story is still being written through better account tools, clearer support pages, and richer product experiences that help people choose the right gadget faster.",
          "Over time, this foundation can grow into a more complete store with live inventory, saved user accounts, shipping updates, and stronger customer support systems.",
        ],
      },
    ],
    cta: {
      label: "Explore the catalog",
      href: "/#top-sales",
    },
  },
  faq: {
    eyebrow: "Help Center",
    title: "Frequently asked questions",
    description:
      "These answers cover the most common questions customers ask before ordering, during checkout, and after reviewing catalog details.",
    sections: [
      {
        heading: "Ordering and payments",
        body: [
          "You can browse products freely, but account access and checkout are protected so customers complete signup and login before placing an order.",
          "Payment methods shown in checkout are currently part of the storefront prototype and can be extended with live payment integrations later.",
        ],
      },
      {
        heading: "Products and support",
        body: [
          "If a product detail looks wrong, use the report flow or contact the store directly so the catalog can be reviewed and corrected.",
          "Recommendations and featured sections are designed to help you discover top-selling, discounted, and newly highlighted gadgets in one place.",
        ],
      },
    ],
    aside: (
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          Need more help?
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Visit the{" "}
          <Link href="/account" className="font-semibold text-violet-600 hover:text-violet-700">
            account page
          </Link>{" "}
          after login to manage your next steps more easily.
        </p>
      </div>
    ),
  },
  blog: {
    eyebrow: "Insights",
    title: "Store blog and updates",
    description:
      "This blog space is for product highlights, buying guides, category trends, and store updates that help customers make sharper decisions before purchasing.",
    sections: [
      {
        heading: "What you will find here",
        body: [
          "Expect buying tips, comparisons between popular models, restock announcements, discount spotlights, and editorial picks from across the storefront.",
          "A strong store blog helps customers understand not just what is available, but which products are likely to fit their needs best.",
        ],
      },
      {
        heading: "What comes next",
        body: [
          "As the store evolves, this section can be expanded into a proper article archive with categories, featured posts, search, and related-product linking.",
          "That would make it easier to connect content directly to product pages and improve discovery across the whole shop.",
        ],
      },
    ],
    cta: {
      label: "Return to the store",
      href: "/",
    },
  },
  "terms-of-service": {
    eyebrow: "Legal",
    title: "Terms of Service",
    description:
      "These terms describe the baseline expectations for using the storefront, browsing products, creating an account, and interacting with catalog content.",
    sections: [
      {
        heading: "Use of the store",
        body: [
          "Customers are expected to use the site lawfully, provide accurate account details, and avoid misuse of listings, pricing displays, checkout tools, or support channels.",
          "We reserve the right to update listings, pause unavailable items, and adjust account access when misuse, fraud, or harmful activity is detected.",
        ],
      },
      {
        heading: "Orders and information",
        body: [
          "Product details, pricing, availability, and promotions may change as inventory and supplier information are updated.",
          "Using the storefront means understanding that some features may begin as prototypes before being connected to full production systems and operational policies.",
        ],
      },
    ],
  },
  "privacy-policy": {
    eyebrow: "Legal",
    title: "Privacy Policy",
    description:
      "This page explains the kind of customer information the storefront may collect, why it is used, and how privacy should be respected as the platform grows.",
    sections: [
      {
        heading: "Information we handle",
        body: [
          "Account flows may collect basic customer information such as name, email address, and authentication status to support signup and login.",
          "As checkout and order management expand, additional details like delivery information and purchase history may be used to complete transactions and customer support.",
        ],
      },
      {
        heading: "How information is used",
        body: [
          "Customer data should be used to operate the store, improve the shopping experience, respond to support issues, and protect accounts against misuse.",
          "Any future production deployment should pair this policy with secure storage, access control, and clearer operational retention rules.",
        ],
      },
    ],
  },
  "contact-us": {
    eyebrow: "Support",
    title: "Contact Us",
    description:
      "Reach out to Pristine Gadgets for product questions, catalog issues, purchase support, or general store enquiries. We want customers to know exactly where to go when they need help.",
    sections: [
      {
        heading: "General contact",
        body: [
          "For product questions, support requests, and store feedback, you can contact the team directly by email or phone during normal support hours.",
          "When possible, include the product name, order context, or issue summary so the team can respond faster and with more accurate help.",
        ],
      },
      {
        heading: "Best ways to reach us",
        body: [
          "Email is best for reports, screenshots, product corrections, and longer explanations that need follow-up. Phone support is useful when you need quicker clarification.",
          "As the store grows, this page can expand into a fuller support center with contact forms, order lookup, and status tracking for customer requests.",
        ],
      },
    ],
    aside: (
      <div className="space-y-3">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          Contact details
        </p>
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
          Email:{" "}
          <a
            href="mailto:PristineGadgets@gmail.com"
            className="font-semibold text-violet-600 hover:text-violet-700"
          >
            PristineGadgets@gmail.com
          </a>
        </p>
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
          Phone:{" "}
          <a
            href="tel:+2348128274808"
            className="font-semibold text-violet-600 hover:text-violet-700"
          >
            +234 812 827 4808
          </a>
        </p>
      </div>
    ),
  },
} as const;

export type FooterPageSlug = keyof typeof footerPages;
