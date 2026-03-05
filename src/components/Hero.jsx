"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export default function Hero() {
  const images = ["/image1.png", "/image2.png", "/image3.png", "/image4.png"];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  // Auto rotation
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="w-full h-screen px-6 md:px-20 py-16 grid lg:grid-cols-[320px_1fr] gap-12 items-center">
      {/* LEFT SIDEBAR */}
      <div className="space-y-8">
        <div className="flex flex-col text-sm tracking-wide gap-3 text-gray-600">
          <span className="hover:text-black cursor-pointer">MEN</span>
          <span className="hover:text-black cursor-pointer">WOMEN</span>
          <span className="hover:text-black cursor-pointer">KIDS</span>
        </div>

        {/* SEARCH */}
        <div className="flex items-center bg-gray-200 px-4 py-2 max-w-[350px] text-sm">
          <Search size={16} className="mr-2" />
          <input
            placeholder="Search"
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* TITLE */}
        <div className="pt-10 ">
          <h1 className="text-6xl font-extrabold leading-[0.95]">
            NEW <br /> COLLECTION
          </h1>
        </div>

        {/* BUTTON */}
        <button className="flex items-center gap-4 bg-gray-200 px-6 py-3 mt-6 text-sm hover:bg-gray-300 transition w-fit">
          Go To Shop
          <ArrowRight size={18} />
        </button>
      </div>

      {/* CAROUSEL */}
      <div className="relative">
        {/* CHEVRONS */}
        <div className="absolute -left-14 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="w-10 h-10 border border-gray-300 flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="w-10 h-10 border border-gray-300 flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* EMBLA VIEWPORT */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((img, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[60%] flex justify-center p-4 "
              >
                <Image
                  src={img}
                  alt="product"
                  width={800}
                  height={1000}
                  className="w-full max-w-[700px] h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
