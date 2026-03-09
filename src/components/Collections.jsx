"use client";

import { useState } from "react";
import { Plus, ChevronDown, SlidersHorizontal, ArrowUpDown } from "lucide-react";

const allProducts = [
  {
    id: 1,
    category: "Cotton T Shirt",
    title: "Basic Heavy Weight T-Shirt",
    price: "$199",
    variants: null,
    gender: "Men",
    src: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=720&fit=crop&crop=top",
  },
  {
    id: 2,
    category: "Cotton Jeans",
    title: "Soft Wash Straight Fit Jeans",
    price: "$199",
    variants: 5,
    gender: "Men",
    src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=720&fit=crop&crop=top",
  },
  {
    id: 3,
    category: "Cotton T Shirt",
    title: "Basic Heavy Weight T-Shirt",
    price: "$199",
    variants: 5,
    gender: "Men",
    src: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=600&h=720&fit=crop&crop=top",
  },
  {
    id: 4,
    category: "Linen Shirt",
    title: "Relaxed Fit Linen Shirt",
    price: "$149",
    variants: 3,
    gender: "Women",
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=720&fit=crop&crop=top",
  },
  {
    id: 5,
    category: "Denim Jacket",
    title: "Washed Oversized Denim Jacket",
    price: "$249",
    variants: null,
    gender: "Women",
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=720&fit=crop&crop=top",
  },
  {
    id: 6,
    category: "Kids Tee",
    title: "Soft Cotton Kids T-Shirt",
    price: "$89",
    variants: 4,
    gender: "KID",
    src: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=720&fit=crop&crop=top",
  },
];

const tabs = ["ALL", "Men", "Women", "KID"];

export default function Collections() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(3);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered =
    activeTab === "ALL"
      ? allProducts
      : allProducts.filter((p) => p.gender === activeTab);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost      { font-family: 'Jost', sans-serif; }
      `}</style>

      <main className="font-jost min-h-screen bg-[#f2f0ed] px-4 sm:px-8 lg:px-11 py-8 sm:py-12">

        {/* ── HEADER ROW ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">

          {/* Title */}
          <h1 className="font-cormorant text-[40px] sm:text-[48px] lg:text-[56px] font-semibold uppercase text-[#1a1a1a] leading-[0.88] tracking-tight">
            XIV<br />Collections<br />23-24
          </h1>

          {/* Filters + Sorts — hidden on mobile, shown via toggle */}
          <div className="hidden sm:flex gap-8 lg:gap-10 pt-1">
            <div>
              <button className="text-[11px] tracking-widest text-[#1a1a1a] hover:text-[#555] transition-colors uppercase">
                Filters(+)
              </button>
            </div>
            <div>
              <button className="text-[11px] tracking-widest text-[#1a1a1a] hover:text-[#555] transition-colors uppercase block mb-1.5">
                Sorts(-)
              </button>
              <p className="text-[10px] text-[#999] tracking-wide cursor-pointer hover:text-[#555] transition-colors leading-relaxed">
                Less to more
              </p>
              <p className="text-[10px] text-[#999] tracking-wide cursor-pointer hover:text-[#555] transition-colors leading-relaxed">
                More to Less
              </p>
            </div>
          </div>

          {/* Mobile filter/sort bar */}
          <div className="flex sm:hidden items-center gap-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-[#888] hover:text-[#1a1a1a] transition-colors"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filters
            </button>
            <span className="text-[#ddd]">|</span>
            <button className="flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-[#888] hover:text-[#1a1a1a] transition-colors">
              <ArrowUpDown size={13} strokeWidth={1.5} />
              Sort
            </button>
          </div>

          {/* Mobile filter dropdown */}
          {filtersOpen && (
            <div className="sm:hidden bg-white rounded-sm border border-[#e8e5e1] px-4 py-4 flex flex-col gap-2 -mt-2">
              <p className="text-[10px] tracking-[0.14em] uppercase text-[#aaa] mb-1">Sort by</p>
              {["Less to more", "More to Less"].map((s) => (
                <button key={s} className="text-[12px] text-[#666] hover:text-[#1a1a1a] transition-colors text-left">
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── TABS ── */}
        <div className="flex items-center gap-4 sm:gap-7 mb-8 sm:mb-10 border-b border-[#e0ddd8] pb-4 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setVisibleCount(3); }}
              className={`text-[11px] sm:text-[12px] tracking-widest uppercase transition-colors whitespace-nowrap shrink-0 ${
                activeTab === tab
                  ? "text-[#1a1a1a] font-medium"
                  : "text-[#aaa] hover:text-[#555]"
              }`}
            >
              {activeTab === tab ? `(${tab})` : tab}
            </button>
          ))}
        </div>

        {/* ── PRODUCT GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {visible.map((product) => (
            <div key={product.id} className="group cursor-pointer">

              {/* Image frame */}
              <div className="relative overflow-hidden bg-white rounded-sm mb-3 sm:mb-4 h-80 sm:h-95 lg:h-105">
                <img
                  src={product.src}
                  alt={product.title}
                  className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Add btn — always visible on touch, hover on desktop */}
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-[#dedad5] flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:bg-[#1a1a1a] hover:border-[#1a1a1a] hover:text-white shadow-sm">
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>

              {/* Meta */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[10px] tracking-widest uppercase text-[#999]">
                    {product.category}
                  </p>
                  {product.variants && (
                    <span className="text-[9px] tracking-wide text-[#bbb] border border-[#ddd] px-1.5 py-0.5 rounded-sm">
                      +{product.variants}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-cormorant text-[15px] sm:text-[17px] font-medium text-[#1a1a1a] tracking-wide leading-snug">
                    {product.title}
                  </p>
                  <span className="text-[12px] sm:text-[13px] text-[#555] tracking-wide whitespace-nowrap shrink-0">
                    {product.price}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ── MORE BUTTON ── */}
        {hasMore && (
          <div className="flex flex-col items-center mt-12 sm:mt-14 gap-1">
            <button
              onClick={() => setVisibleCount((c) => c + 3)}
              className="text-[11px] tracking-[0.14em] uppercase text-[#888] hover:text-[#1a1a1a] transition-colors"
            >
              More
            </button>
            <ChevronDown size={14} strokeWidth={1.5} className="text-[#aaa]" />
          </div>
        )}

      </main>
    </>
  );
}