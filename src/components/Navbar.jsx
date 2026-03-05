"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">

        {/* Left */}
        <div className="flex items-center gap-6">
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex gap-8 text-lg font-medium text-gray-700">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/collections" className="hover:text-black">Collections</Link>
            <Link href="/new" className="hover:text-black">New</Link>
          </nav>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
            />
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          {/* Cart */}
          <Link
            href="/cart"
            className="flex items-center justify-center w-10 h-10 lg:w-auto lg:h-auto lg:px-4 lg:py-2 bg-white lg:bg-black text-black lg:text-white rounded-full border-2 border-black lg:border-none"
          >
            <span className="hidden lg:block mr-2 text-sm">Cart</span>
            <ShoppingBag size={18} />
          </Link>

          {/* User */}
          <Link
            href="/profile"
            className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full"
          >
            <User size={18} />
          </Link>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t bg-white">
          <div className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            <Link href="/">Home</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/new">New</Link>
          </div>
        </div>
      )}
    </header>
  );
}