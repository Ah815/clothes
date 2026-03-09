"use client";

import { Search, ArrowRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&h=650&fit=crop&crop=top",
    alt: "Man in grey outfit",
  },
  {
    src: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=500&h=650&fit=crop&crop=top",
    alt: "Man in brown coat",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=650&fit=crop&crop=center",
    alt: "White outfit",
  },
  {
    src: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=650&fit=crop&crop=top",
    alt: "White shirt",
  },
];

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
        .frame-card { padding: 6px 6px 28px 6px; }
      `}</style>

      <div className="font-jost flex flex-col lg:flex-row min-h-screen w-full bg-[#f2f0ed] overflow-hidden">

        {/* SIDEBAR */}
        <aside className="lg:w-75 w-full px-6 sm:px-10 lg:px-11 py-10 lg:py-14 flex flex-col justify-center gap-6 lg:gap-7">

          {/* Categories */}
          <div className="flex gap-4 lg:flex-col lg:gap-2">
            {["Men", "Women", "Kids"].map((cat) => (
              <span
                key={cat}
                className="text-[11px] tracking-[0.14em] uppercase text-[#888] cursor-pointer hover:text-[#1a1a1a] transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 bg-[#e8e5e1] px-3.5 py-2.5 rounded-sm w-full sm:max-w-55">
            <Search size={13} color="#999" className="shrink-0" />
            <input
              placeholder="Search"
              className="bg-transparent outline-none text-[12px] font-light text-[#333] w-full tracking-wide placeholder:text-[#999]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            />
          </div>

          {/* Title */}
          <div className="mt-2">
            <h1
              className="font-cormorant text-[48px] sm:text-[60px] lg:text-[72px] font-medium uppercase text-[#1a1a1a]"
              style={{ lineHeight: 0.9, letterSpacing: "0.02em" }}
            >
              New<br />Collection
            </h1>

            <p className="text-[11px] font-light tracking-[0.12em] text-[#999] mt-4 uppercase leading-loose">
              Summer<br />2024
            </p>
          </div>

          {/* CTA */}
          <button className="flex items-center gap-3 bg-[#e8e5e1] hover:bg-[#dedad5] transition-colors px-5 py-3 text-[11px] tracking-widest uppercase text-[#1a1a1a] w-fit rounded-sm cursor-pointer border-none">
            Go To Shop
            <span className="flex items-center gap-1 text-[#777]">
              <span className="text-sm" style={{ letterSpacing: "-1px" }}>——</span>
              <ArrowRight size={13} />
            </span>
          </button>
        </aside>

        {/* IMAGE GRID */}
        <div className="flex-1 flex items-center justify-center lg:justify-end px-6 sm:px-10 lg:pr-12 py-10">

          <div className="grid grid-cols-2 gap-3 w-full max-w-140 aspect-square">

            {images.map((img, i) => (
              <div
                key={i}
                className="frame-card rounded-sm overflow-hidden bg-white cursor-pointer
                shadow-[0_8px_32px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.06)]
                hover:shadow-[0_20px_56px_rgba(0,0,0,0.16),0_6px_18px_rgba(0,0,0,0.10)]
                hover:-translate-y-2 hover:scale-[1.02]
                transition-all duration-500"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}

          </div>

        </div>
      </div>
    </>
  );
}