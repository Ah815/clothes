"use client";

import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=580&fit=crop&crop=top",
    alt: "Man in grey outfit by geometric building",
    rotation: "-3deg",
    offsetY: "30px",
  },
  {
    src: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=400&h=600&fit=crop&crop=top",
    alt: "Man in brown coat standing",
    rotation: "2deg",
    offsetY: "0px",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=580&fit=crop&crop=center",
    alt: "White outfit trousers close up",
    rotation: "-1.5deg",
    offsetY: "20px",
  },
  {
    src: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=560&fit=crop&crop=top",
    alt: "White shirt close up",
    rotation: "2.5deg",
    offsetY: "10px",
    partial: true,
  },
];

export default function Approach() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400&display=swap');

        .approach-section {
          background: #f2f0ed;
          padding: 72px 0 80px;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }

        .approach-text {
          text-align: center;
          padding: 0 24px;
          margin-bottom: 56px;
        }

        .approach-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 4vw, 38px);
          font-weight: 500;
          letter-spacing: 0.12em;
          color: #1a1a1a;
          text-transform: uppercase;
          margin-bottom: 18px;
          line-height: 1.1;
        }

        .approach-body {
          font-size: 13px;
          font-weight: 300;
          color: #666;
          line-height: 1.85;
          max-width: 420px;
          margin: 0 auto;
          letter-spacing: 0.02em;
        }

        .photos-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 18px;
          padding: 0 20px;
        }

        .photo-card {
          position: relative;
          width: clamp(150px, 20vw, 220px);
          height: clamp(220px, 28vw, 380px);
          border-radius: 3px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.07);
          flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease;
          cursor: pointer;
        }

        .photo-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.10);
          transform: translateY(-8px) scale(1.02) !important;
          z-index: 10;
        }

        .photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .photo-card-partial {
          clip-path: inset(0 18% 0 0);
        }

        @media (max-width: 768px) {
          .photos-row {
            gap: 12px;
          }

          .photo-card-partial {
            clip-path: none;
          }
        }
      `}</style>

      <section className="approach-section">
        <div className="approach-text">
          <h2 className="approach-heading">
            Our Approach to Fashion Design
          </h2>

          <p className="approach-body">
            At Elegant Vogue, we blend creativity with craftsmanship to create
            fashion that transcends trends and stands the test of time. Each
            design is meticulously crafted to ensure the highest quality and
            exquisite finish.
          </p>
        </div>

        <div className="photos-row">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`photo-card ${
                photo.partial ? "photo-card-partial" : ""
              }`}
              style={{
                transform: `rotate(${photo.rotation}) translateY(${photo.offsetY})`,
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width:768px) 50vw, 220px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}