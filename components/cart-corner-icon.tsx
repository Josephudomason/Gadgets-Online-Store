import { ShoppingCart } from "lucide-react";

const CartCornerIcon = () => {
  return (
    <span className="pointer-events-none absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#5a45db] text-white shadow-sm">
      <ShoppingCart size={14} />
    </span>
  );
};

export default CartCornerIcon;
