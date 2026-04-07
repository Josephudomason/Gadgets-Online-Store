import { Star } from "lucide-react";

type ProductFeedbackProps = {
  productId: string;
  productName: string;
};

const comments = [
  "Fast delivery and the item matched the photos.",
  "Build quality feels good and it has been working really well so far.",
  "Worth the price for me, especially after comparing similar options.",
  "Packaging was neat and the product setup was straightforward.",
  "I would buy this again and recommend it to a friend.",
];

const ProductFeedback = ({ productId, productName }: ProductFeedbackProps) => {
  const seed = Array.from(productId).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const ratings = [
    { stars: 5, count: 210 + (seed % 90) },
    { stars: 4, count: 120 + (seed % 70) },
    { stars: 3, count: 55 + (seed % 40) },
    { stars: 2, count: 18 + (seed % 20) },
    { stars: 1, count: 6 + (seed % 10) },
  ];
  const totalRatings = ratings.reduce((sum, item) => sum + item.count, 0);
  const averageRating =
    ratings.reduce((sum, item) => sum + item.stars * item.count, 0) / totalRatings;
  const productComments = comments.map((comment, index) => ({
    id: `${productId}-comment-${index + 1}`,
    author: ["Daniel", "Chioma", "Aisha", "Victor", "Maya"][(seed + index) % 5],
    text: `${comment} ${productName} feels like a solid buy.`,
  }));

  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 md:px-8">
      <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-50">
          Ratings and comments
        </h2>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="lg:w-[46%]">
            <div className="rounded-2xl bg-gray-50 p-5 dark:bg-slate-950">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-gray-900 dark:text-slate-50">
                  {averageRating.toFixed(1)}
                </span>
                <div>
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={18}
                        className={index < Math.round(averageRating) ? "fill-current" : ""}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                    Based on {totalRatings} ratings
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {ratings.map((item) => {
                  const percent = Math.round((item.count / totalRatings) * 100);

                  return (
                    <div
                      key={item.stars}
                      className="grid grid-cols-[48px_1fr_78px] items-center gap-3"
                    >
                      <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                        {item.stars} star
                      </span>
                      <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-slate-800">
                        <div
                          className="h-full rounded-full bg-[#5a45db]"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="text-right text-sm text-gray-500 dark:text-slate-400">
                        {item.count} • {percent}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:w-[46%]">
            <div className="space-y-4">
              {productComments.map((comment) => (
                <article
                  key={comment.id}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-gray-900 dark:text-slate-100">
                      {comment.author}
                    </p>
                    <div className="flex items-center gap-1 text-[#f59e0b]">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star key={index} size={14} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-300">
                    {comment.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeedback;
