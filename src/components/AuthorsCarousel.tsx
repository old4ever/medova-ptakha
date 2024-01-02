"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Author from "./Author";

type AuthorsCarouselProps = {
  className?: string;
};

const AuthorsCarousel = ({ className }: AuthorsCarouselProps) => {
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
        {Array.from(Array(15)).map((_el, index) => {
          index = index + 1;
          return (
            <CarouselItem
              className="basis-1/2 xsm:basis-1/4 sm:basis-1/6 md:basis-[12.5%]"
              // className="basis-1/2 xsm:basis-1/4 sm:basis-1/6 md:basis-[12.5%] lg:basis-[10%] xl:basis-1/12 "
              key={crypto.randomUUID()}
            >
              <Author authorIndex={index} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default AuthorsCarousel;
