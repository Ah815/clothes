"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export default function NewThisWeek() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: true, // allows infinite autoplay
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000); // change speed here

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const products = [
    {
      id: 1,
      image: "/image1.png",
      category: "V-Neck T-Shirt",
      title: "Embroidered Seersucker Shirt",
      price: "$99",
    },
    {
      id: 2,
      image: "/image2.png",
      category: "Cotton T Shirt",
      title: "Basic Slim Fit T-Shirt",
      price: "$99",
    },
    {
      id: 3,
      image: "/image3.png",
      category: "Henley T-Shirt",
      title: "Blurred Print T-Shirt",
      price: "$99",
    },
    {
      id: 4,
      image: "/image4.png",
      category: "Crewneck T-Shirt",
      title: "Full Sleeve Zipper",
      price: "$99",
    },
    {
      id: 5,
      image: "/image2.png",
      category: "Cotton T-Shirt",
      title: "Summer Casual Shirt",
      price: "$99",
    },
  ];

  return (
    <section className="px-12 py-20">
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <h2 className="text-5xl font-extrabold leading-none">
          NEW <br /> THIS WEEK{" "}
          <span className="text-blue-600 text-2xl align-top">(50)</span>
        </h2>

        <button className="text-gray-500 hover:text-black">
          See All
        </button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {products.map((product) => (
            <div key={product.id} className="min-w-[200px] flex-shrink-0">
              
              <div className="p-10 relative group">
                <Image
                  src={product.image}
                  width={200}
                  height={260}
                  alt={product.title}
                  className="mx-auto"
                />

                <button className="absolute bottom-0 left-0 right-0 h-10 bg-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Plus size={18} />
                </button>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-500">
                  {product.category}
                </p>

                <div className="flex justify-between mt-1">
                  <p className="font-medium">
                    {product.title}
                  </p>
                  <span>{product.price}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 border flex items-center justify-center"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={scrollNext}
          className="w-10 h-10 border flex items-center justify-center"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}