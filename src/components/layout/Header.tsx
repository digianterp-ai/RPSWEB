"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Lock } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftMenu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Facilities", href: "/facilities" },
  ];

  const rightMenu = [
    { name: "Gallery", href: "/gallery" },
    { name: "Admission", href: "/admissions" },
    { name: "Notice", href: "/noticeboard" },
    { name: "Contact", href: "/contact" },
  ];

  const allMenu = [...leftMenu, ...rightMenu];

  const renderMenu = (menu: { name: string; href: string }[]) =>
    menu.map((item) => {
      const isActive = pathname === item.href;

      return (
        <Link
          key={item.href}
          href={item.href}
          className={`relative group text-md tracking-wide transition-all duration-300 ${
            isActive
              ? "font-semibold text-blue-900"
              : "text-gray-700 hover:text-blue-900"
          }`}
        >
          {item.name}
          <span
            className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-0.5 bg-yellow-600 transition-all duration-300 ${
              isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </Link>
      );
    });

  return (
    <header className="w-full relative z-50">

      {/* TOP BAR */}
      <div className="bg-blue-900 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between px-6">
          <div className="flex gap-6">
            <span>📞 +91 79873 14617</span>
            <span>✉ info@rpsdeori.org</span>
          </div>
          <div className="font-semibold text-yellow-400">
            Admissions Open 2026–27
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div
        className={`transition-all duration-300 border-t-4 border-yellow-600 ${
          scrolled
            ? "fixed top-0 left-0 w-full bg-[#f3f0e6]/95 backdrop-blur-md shadow-md py-4"
            : "bg-[#f3f0e6] py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

          {/* LEFT MENU (Desktop) */}
          <nav className="hidden md:flex gap-12">
            {renderMenu(leftMenu)}
          </nav>

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo-royal.png"
              alt="Royal Public School Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-14" : "h-20"
              } w-auto`}
            />
          </Link>

          {/* RIGHT MENU (Desktop) */}
          <nav className="hidden md:flex items-center gap-10">
            {renderMenu(rightMenu)}

            {/* ERP BUTTON */}
            <Link
              href="/erp-login"
              className="relative px-6 py-2 rounded-md font-semibold text-white bg-blue-900 
                         overflow-hidden transition-all duration-300
                         hover:scale-105 hover:shadow-lg group flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Lock size={18} strokeWidth={2.2} />
                ERP
              </span>

              <span className="absolute inset-0 bg-yellow-500 scale-x-0 origin-left 
                               transition-transform duration-300 
                               group-hover:scale-x-100"></span>
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-blue-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {mobileOpen && (
          <div className="md:hidden bg-[#f3f0e6] shadow-lg border-t border-yellow-600">
            <div className="flex flex-col items-center py-6 space-y-6">

              {allMenu.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg transition-all ${
                      isActive
                        ? "font-semibold text-blue-900"
                        : "text-gray-700 hover:text-blue-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* ERP BUTTON MOBILE */}
              <Link
                href="/erp-login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-md font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                <Lock size={18} />
                ERP Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}