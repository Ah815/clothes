import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full min-h-[70vh] flex flex-col justify-between px-6 md:px-20 py-20 text-gray-500">

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Left Column */}
        <div className="space-y-10 text-sm tracking-wide">

          <div>
            <p className="mb-3 text-xs uppercase">Info</p>
            <div className="flex flex-col gap-2">
              <Link href="#">Pricing</Link>
              <Link href="#">About</Link>
              <Link href="#">Contacts</Link>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase">Languages</p>
            <div className="flex flex-col gap-1">
              <span>ENG</span>
              <span>ESP</span>
              <span>SVE</span>
            </div>
          </div>

        </div>

        {/* Center Brand */}
        <div className="flex flex-col items-center text-center">

          <p className="text-xs uppercase mb-6 tracking-widest">
            Technologies
          </p>

          <div className="flex flex-col items-center">

            <Image
              src="/logo.png"
              alt="logo"
              width={28}
              height={28}
              className="mb-2"
            />

            <h2 className="text-6xl font-bold leading-none text-black">
              XIV
            </h2>

            <h2 className="text-6xl font-bold leading-none text-black">
              QR
            </h2>

          </div>

        </div>

        {/* Right Tagline */}
        <div className="flex items-center justify-center md:justify-end text-sm">
          <p className="text-gray-500">
            Near-field communication
          </p>
          <span className="ml-4 text-gray-300">/</span>
        </div>

      </div>

      {/* Bottom */}
      <div className="flex justify-between text-xs text-gray-400 mt-20">

        <p>© 2024 — copyright</p>

        <Link href="#">privacy</Link>

      </div>

    </footer>
  );
}