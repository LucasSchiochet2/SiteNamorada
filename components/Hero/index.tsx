import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getBanners } from "@/src/config";

export default async function Hero() {
  const { data: banners } = await getBanners();

  // const shouldShowButtons = true;
  const shouldShowButtons = banners.length > 1;

  return (
    <section className="relative mt-11 lg:mt-46 xl:mt-48 w-full">
      <Carousel
        className="w-full h-full"
        opts={{
          loop: shouldShowButtons,
          watchDrag: shouldShowButtons,
        }}
      >
        <CarouselContent>
            {banners.map(
              ({ id, title, banner, mobile_banner }) => (
                <CarouselItem key={id}>
                  {(
                    <picture>
                      <source
                        media="(min-width: 0px) and (max-width: 767px)"
                        srcSet={mobile_banner || banner}
                      />
                      <source media="(min-width: 768px)" srcSet={banner} />
                      <img
                        className="w-full max-h-194 object-cover"
                        src={banner}
                        alt={title}
                        style={{ objectPosition: '50% 40%' }}
                      />
                    </picture>
                  )}
                </CarouselItem>
              ),
            )}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
