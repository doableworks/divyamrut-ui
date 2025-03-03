import { Carousel, Grid } from "antd";
import Product from "@/components/proudect/Product";
import { useSession } from "next-auth/react";
import RelatedProductOverview from "./RelatedProductOverview";

export default function RelatedProductSlider({ slideData, productCategory }) {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { data: session } = useSession();

  const shouldUseCarousel = slideData && slideData.length > 5;

  const infiniteData = Array.from({ length: 8 }, () => slideData).flat();

  return shouldUseCarousel ? (
    <Carousel
      autoplay
      dots={false}
      slidesToShow={
        screens.xl || screens.xxl
          ? 5
          : screens.md || screens.lg
          ? 3
          : screens.xs && window.innerWidth < 350
          ? 1
          : 2
      }
    >
      {infiniteData.map((product, index) => (
        <div key={index} className="px-3">
          <RelatedProductOverview
            item={product}
            productCategory={productCategory}
            session={session}
          />
        </div>
      ))}
    </Carousel>
  ) : (
    <ul className="flex gap-3 overflow-x-auto pb-4 narrow-scrollbar">
      {slideData.map((product, index) => (
        <RelatedProductOverview
          key={index}
          item={product}
          productCategory={productCategory}
          session={session}
          className="w-52 flex-shrink-0"
        />
      ))}
    </ul>
  );
}
