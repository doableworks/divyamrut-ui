import { Carousel, Grid } from "antd";
import Product from "@/components/proudect/Product";
import { useSession } from "next-auth/react";
import RelatedProductOverview from "./RelatedProductOverview";

export default function RelatedProductSlider({ slideData, productCategory }) {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { data: session } = useSession();

  const shouldUseCarousel = slideData && slideData.length > 1;

  return shouldUseCarousel ? (
    <Carousel
      autoplay
      dots={false}
      slidesToShow={
        screens.xl || screens.xxl || screens.lg
          ? 6
          : screens.md
          ? 3
          : screens.xs && window.innerWidth < 350
          ? 1
          : 2
      }
    >
      {slideData.map((product, index) => (
        <div key={index} className="p-2">
          <RelatedProductOverview
            item={product}
            productCategory={productCategory}
            session={session}
          />
        </div>
      ))}
    </Carousel>
  ) : (
    <div className="p-2">
      {slideData.map((product, index) => (
        <RelatedProductOverview
          key={index}
          item={product}
          productCategory={false}
          session={session}
        />
      ))}
    </div>
  );
}
