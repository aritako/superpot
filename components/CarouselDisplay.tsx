import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

export default function CarouselDisplay() {
  const options: EmblaOptionsType = { loop: true };
  const images = ["/img/1.png", "/img/2.png", "/img/3.png", "/img/4.png"];

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 2300 }),
    Fade(),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img) => (
            <div className="embla__slide" key={img}>
              <img
                src={img}
                alt="slide"
                style={{ maxWidth: "40%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
