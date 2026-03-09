"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=520&fit=crop&crop=top",
    category: "V-Neck T-Shirt",
    title: "Embroidered Seersucker Shirt",
    price: "$99",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=520&fit=crop&crop=top",
    category: "Cotton T Shirt",
    title: "Basic Slim Fit T-Shirt",
    price: "$99",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=520&fit=crop&crop=top",
    category: "Henley T-Shirt",
    title: "Blurred Print T-Shirt",
    price: "$99",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=400&h=520&fit=crop&crop=top",
    category: "Crewneck T-Shirt",
    title: "Full Sleeve Zipper",
    price: "$99",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=520&fit=crop&crop=top",
    category: "Cotton T-Shirt",
    title: "Summer Casual Shirt",
    price: "$99",
  },
   {
    id: 6,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=400&h=520&fit=crop&crop=top",
    category: "Crewneck T-Shirt",
    title: "Full Sleeve Zipper",
    price: "$99",
  },
];

export default function NewThisWeek() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 2800);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap');

        .ntw-section {
          background: #f2f0ed;
          padding: 72px 0 80px;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }

        .ntw-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 60px;
          margin-bottom: 52px;
        }

        .ntw-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 4.5vw, 46px);
          font-weight: 500;
          letter-spacing: 0.12em;
          color: #1a1a1a;
          text-transform: uppercase;
          line-height: 1.1;
        }

        .ntw-count {
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: #888;
          letter-spacing: 0.04em;
          vertical-align: super;
          margin-left: 8px;
        }

        .ntw-see-all {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888;
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s;
          padding-bottom: 4px;
        }

        .ntw-see-all:hover { color: #1a1a1a; }

        /* CAROUSEL */
        .ntw-viewport {
          overflow: hidden;
          padding: 0 60px;
        }

        .ntw-track {
          display: flex;
          gap: 20px;
        }

        /* CARD */
        .ntw-card {
          flex: 0 0 220px;
          cursor: pointer;
        }

        .ntw-card-img-wrap {
          position: relative;
          width: 100%;
          height: 300px;
          border-radius: 3px;
          overflow: hidden;
          box-shadow: 0 6px 24px rgba(0,0,0,0.09), 0 2px 6px rgba(0,0,0,0.06);
          transition: box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1);
        }

        .ntw-card:hover .ntw-card-img-wrap {
          box-shadow: 0 14px 40px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.09);
          transform: translateY(-6px);
        }

        .ntw-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.5s ease;
        }

        .ntw-card:hover .ntw-card-img-wrap img {
          transform: scale(1.04);
        }

        .ntw-add-btn {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 44px;
          background: rgba(242, 240, 237, 0.92);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1a1a1a;
          cursor: pointer;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .ntw-card:hover .ntw-add-btn {
          opacity: 1;
          transform: translateY(0);
        }

        /* CARD META */
        .ntw-card-meta {
          margin-top: 14px;
          padding: 0 2px;
        }

        .ntw-category {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 5px;
        }

        .ntw-card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
        }

        .ntw-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          font-weight: 500;
          color: #1a1a1a;
          line-height: 1.3;
          flex: 1;
        }

        .ntw-price {
          font-size: 13px;
          font-weight: 400;
          color: #555;
          white-space: nowrap;
          letter-spacing: 0.03em;
        }

        /* NAV */
        .ntw-nav {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 44px;
        }

        .ntw-nav-btn {
          width: 36px;
          height: 36px;
          border: 1px solid #c8c5c0;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #555;
          transition: all 0.2s;
          border-radius: 2px;
        }

        .ntw-nav-btn:hover {
          border-color: #1a1a1a;
          color: #1a1a1a;
        }
      `}</style>

      <section className="ntw-section">
        {/* Header */}
        <div className="ntw-header">
          <h2 className="ntw-heading">
            New<br />This Week
            <span className="ntw-count">(50)</span>
          </h2>
          <button className="ntw-see-all">See All</button>
        </div>

        {/* Carousel */}
        <div className="ntw-viewport" ref={emblaRef}>
          <div className="ntw-track">
            {products.map((product) => (
              <div key={product.id} className="ntw-card">
                <div className="ntw-card-img-wrap">
                  <img src={product.image} alt={product.title} />
                  <button className="ntw-add-btn">
                    <Plus size={13} />
                    Add to cart
                  </button>
                </div>
                <div className="ntw-card-meta">
                  <p className="ntw-category">{product.category}</p>
                  <div className="ntw-card-bottom">
                    <p className="ntw-title">{product.title}</p>
                    <span className="ntw-price">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="ntw-nav">
          <button className="ntw-nav-btn" onClick={scrollPrev}>
            <ChevronLeft size={15} />
          </button>
          <button className="ntw-nav-btn" onClick={scrollNext}>
            <ChevronRight size={15} />
          </button>
        </div>
      </section>
    </>
  );
}