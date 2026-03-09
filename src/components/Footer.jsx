"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost      { font-family: 'Jost', sans-serif; }
        .footer-divider { border-color: #d8d5d0; }
      `}</style>

      <footer className="font-jost w-full bg-[#f2f0ed] min-h-[70vh] flex flex-col justify-between px-11 md:px-20 py-16">

        {/* ── TOP ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-14 border-b footer-divider">

          {/* Left — Links */}
          <div className="flex flex-col gap-10">

            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#aaa] mb-4">
                Info
              </p>
              <div className="flex flex-col gap-2.5">
                {["Pricing", "About", "Contacts"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-[12px] tracking-[0.06em] text-[#888] hover:text-[#1a1a1a] transition-colors w-fit"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#aaa] mb-4">
                Languages
              </p>
              <div className="flex flex-col gap-2">
                {["ENG", "ESP", "SVE"].map((lang) => (
                  <span
                    key={lang}
                    className="text-[12px] tracking-widest text-[#888] hover:text-[#1a1a1a] transition-colors cursor-pointer w-fit"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Center — Brand */}
          <div className="flex flex-col items-center text-center gap-5">
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#aaa]">
              Technologies
            </p>

            {/* Logo mark */}
            <div className="w-7 h-7 rounded-full border border-[#c8c5c0] flex items-center justify-center">
              <span className="text-[10px] tracking-widest text-[#888]">◆</span>
            </div>

            <div className="flex flex-col items-center leading-none mt-1">
              <h2 className="font-cormorant text-[72px] font-medium text-[#1a1a1a] leading-[0.88] tracking-tight uppercase">
                XIV
              </h2>
              <h2 className="font-cormorant text-[72px] font-medium text-[#1a1a1a] leading-[0.88] tracking-tight uppercase">
                QR
              </h2>
            </div>
          </div>

          {/* Right — Tagline */}
          <div className="flex md:justify-end items-start pt-1">
            <div className="flex items-center gap-4">
              <p className="text-[11px] tracking-[0.08em] text-[#999] uppercase">
                Near-field communication
              </p>
              <span className="text-[#ccc] text-lg font-light">/</span>
            </div>
          </div>

        </div>

        {/* ── BOTTOM ── */}
        <div className="flex justify-between items-center pt-8">
          <p className="text-[11px] tracking-[0.08em] text-[#aaa]">
            © 2024 — copyright
          </p>
          <Link
            href="#"
            className="text-[11px] tracking-widest uppercase text-[#aaa] hover:text-[#1a1a1a] transition-colors"
          >
            Privacy
          </Link>
        </div>

      </footer>
    </>
  );
}