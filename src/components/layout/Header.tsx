"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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
  ];

  const rightMenu = [
    { name: "ERP", href: "/erp" },
    { name: "Admission", href: "/admissions" },
    { name: "Contact", href: "/contact" },
  ];

  const renderMenu = (menu: { name: string; href: string }[]) =>
    menu.map((item) => {
      const isActive = pathname === item.href;

      return (
        <Link
          key={item.href}
          href={item.href}
          className={`relative group text-lg tracking-wide transition-all duration-300 ${
            isActive
              ? "font-semibold text-blue-900"
              : "text-gray-700 hover:text-blue-900"
          }`}
        >
          {item.name}

          {/* Gold Underline Animation */}
          <span
            className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-[2px] bg-yellow-600 transition-all duration-300 ${
              isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </Link>
      );
    });

  return (
    <header className="w-full">

      {/* 🔹 TOP INFO BAR */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto flex justify-between px-6">

          <div className="flex gap-6">
            <span>📞 +91 98765 43210</span>
            <span>✉ info@rpsdeori.org</span>
          </div>

          <div className="font-semibold text-yellow-400">
            Admissions Open 2026–27
          </div>

        </div>
      </div>

      {/* 🔹 MAIN NAVIGATION */}
      <div
        className={`transition-all duration-300 border-t-4 border-yellow-600 ${
          scrolled
            ? "fixed top-0 left-0 w-full bg-[#f3f0e6]/90 backdrop-blur-md shadow-md py-4 z-50"
            : "bg-[#f3f0e6] py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

          {/* LEFT MENU */}
          <nav className="hidden md:flex gap-12">
            {renderMenu(leftMenu)}
          </nav>

          {/* CENTER LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo-royal.png"
              alt="Royal Public School Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-14" : "h-20"
              } w-auto`}
            />
          </Link>

          {/* RIGHT MENU */}
          <nav className="hidden md:flex gap-12">
            {renderMenu(rightMenu)}
          </nav>

        </div>
      </div>
    </header>
  );
}