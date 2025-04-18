"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

const quickLinkItems = [
  {
    name: "Social Responsibility",
    slug: "/social-responsibility",
  },
  {
    name: "Shipping Policy",
    slug: "/shipping-policy",
  },
  {
    name: "Payment Policy",
    slug: "/payment-policy",
  },
  {
    name: "Privacy Policy",
    slug: "/privacy-policy",
  },
  {
    name: "Refund Policy",
    slug: "/refund-policy",
  },
  {
    name: "Cancellation Policy",
    slug: "/cancellation-policy",
  },
  {
    name: "Terms & Conditions",
    slug: "/terms-conditions",
  },
  {
    name: "Cart",
    slug: "/cart",
  },
];

export default function Footer() {
  const menuItems = useSelector((state) => state.menuItems).all;

  const productItems = menuItems?.find((each) => each.label === "Products");
  const therapyItems = menuItems?.find((each) => each.label === "Therapies");

  return (
    <div className="bg-[--yellow] w-full px-8 md:px-20 xl:px-36 pt-16 pb-8 font-poppins">
      <section className=" grid [@media(max-width:390px)]:grid-cols-1 grid-cols-2 lg:grid-cols-4 [@media(max-width:390px)]:gap-16 gap-8 md:gap-16">
        <div>
          <p className="text-lg font-semibold mb-8">Products</p>
          <ul className="space-y-5">
            {productItems?.subMenu?.map((each) => (
              <li key={each.key}>
                <Link
                  href={`/products/${each.slug}`}
                  className="text-sm hover:underline"
                >
                  {each.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold mb-8">Therapies</p>
          <ul className="space-y-5">
            {therapyItems?.subMenu?.map((each) => (
              <li key={each.key}>
                <Link
                  href={`/therapy/${each.slug}`}
                  className="text-sm hover:underline"
                >
                  {each.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold mb-8">Quick links</p>
          <ul className="space-y-5">
            {quickLinkItems?.map((each) => (
              <li key={each.key}>
                <Link href={each.slug} className="text-sm hover:underline">
                  {each.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-lg font-semibold mb-8">Contact</p>
          <ul className="space-y-5">
            <li className="text-sm hover:underline">
              <a href="mailto:contact@nityanava.com">
                Email: <span>contact@nityanava.com</span>
              </a>
            </li>
            <li className="text-sm hover:underline">
              <a
                target="_blank"
                href="https://wa.me/916377717747"
                rel="noopener noreferrer"
              >
                Phone: +91-6377717747
              </a>
            </li>
            <li className="text-sm hover:underline">
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </section>
      <hr className="my-10 h-px bg-gray-700 opacity-10 border-0" />
      <p className="text-center ">
        © {new Date().getFullYear()} Nityanava | All Rights Reserved
      </p>
    </div>
  );
}
