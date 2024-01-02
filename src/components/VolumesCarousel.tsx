"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Volume from "./Volume";

type VolumesCarouselProps = {
  className?: string;
};

const VolumesCarousel = ({ className }: VolumesCarouselProps) => {
  return (
    <Carousel
      opts={{
        dragFree: true,
        // align: "center",
        // loop: true,
        // active: false,
      }}
      className={className ? `${className} w-full` : "w-full"}
    >
      <CarouselContent>
        {Array.from(Array(4)).map((_el, index) => {
          index = index + 2;
          return (
            <CarouselItem
              className="basis-1/2 xsm:basis-1/3"
              key={crypto.randomUUID()}
            >
              <Volume img="/volume-2.jpeg" volumeNumber={index} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default VolumesCarousel;
