import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

const bannerImages = [
  { image: "../../images/banner1.png", link: "https://www.naver.com" },
  { image: "../../images/banner2.png", link: "https://github.com/JunYoungKr" },
  {
    image: "../../images/banner3.png",
    link: "https://junyoungkr-github.tistory.com/",
  },
];

export const BannerSlider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      style={{}}
    >
      <CarouselContent>
        {bannerImages.map(({ image, link }, index) => (
          <CarouselItem key={index}>
            <Link href={link} target="_blank">
              <img
                src={image}
                alt={`배너 ${index + 1}`}
                // style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="sm:w-[640px]"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
