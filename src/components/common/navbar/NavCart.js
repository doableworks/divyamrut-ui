import Image from "next/image";
import Link from "next/link";

export default function NavCart({ count = 0, handleCartSliderfun }) {
  const cartItems = count || 0;

  return (
    // <Link href="/cart">
      <div className="relative cursor-pointer" onClick={handleCartSliderfun}>
        <div className="w-5 h-5">
          <Image
            src="/asset/navbar/cart-icon.png"
            alt="bag"
            height={100}
            width={100}
          />
        </div>

        <span className="flex justify-center items-center text-white font-black bg-[--neutral] w-6 h-6 absolute rounded-full right-[-12px] top-[10px] text-[14px]">
          {cartItems}
        </span>
      </div>
    // </Li nk>
  );
}
