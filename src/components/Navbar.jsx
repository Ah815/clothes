"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, User, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
      `}</style>

      <header className="font-jost w-full bg-[#f2f0ed] z-50 border-b border-[#e0ddd8]">
        <div className="flex items-center justify-between px-5 sm:px-8 lg:px-11 py-4 relative">

          {/* LEFT */}
          <div className="flex items-center gap-6">

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-[#888] hover:text-[#1a1a1a]"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {[
                { label: "Home", href: "/" },
                { label: "Collections", href: "/collections" },
                { label: "New", href: "/new" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[11px] tracking-[0.12em] uppercase text-[#888] hover:text-[#1a1a1a] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CENTER LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <span className="font-cormorant text-[22px] sm:text-[26px] font-medium tracking-[0.14em] uppercase text-[#1a1a1a] leading-none select-none">
                Élégant
              </span>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-1 sm:gap-2">

      

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center gap-2 bg-[#1a1a1a] text-[#f2f0ed] pl-3 pr-2 py-1.5 rounded-full text-[11px] tracking-widest uppercase hover:bg-[#333]"
            >
              <span className="hidden sm:block">Cart</span>
              <span className="w-5 h-5 rounded-full bg-[#f2f0ed] text-[#1a1a1a] flex items-center justify-center text-[10px] font-medium">
                0
              </span>
            </Link>

          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden border-t border-[#e0ddd8] bg-[#f2f0ed]">
            <div className="flex flex-col gap-6 px-6 py-8">
              {[
                { label: "Home", href: "/" },
                { label: "Collections", href: "/collections" },
                { label: "New", href: "/new" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[12px] tracking-[0.14em] uppercase text-[#888] hover:text-[#1a1a1a]"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}