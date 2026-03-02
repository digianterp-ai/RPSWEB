"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Lock, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      submenu: [
        { name: "Vision & Mission", href: "/about/vision" },
        { name: "Principal Message", href: "/about/principal" },
        { name: "School History", href: "/about/history" },
        { name: "Management", href: "/about/management" },
      ],
    },
    {
      name: "Academics",
      submenu: [
        { name: "Pre-Primary", href: "/academics/pre-primary" },
        { name: "Primary", href: "/academics/primary" },
        { name: "Middle School", href: "/academics/middle" },
        { name: "Higher Secondary", href: "/academics/higher-secondary" },
        { name: "Curriculum", href: "/academics/curriculum" },
      ],
    },
    {
      name: "Facilities",
      submenu: [
        { name: "Smart Classes", href: "/facilities/smart" },
        { name: "Labs", href: "/facilities/labs" },
        { name: "Library", href: "/facilities/library" },
        { name: "Sports", href: "/facilities/sports" },
        { name: "Transport", href: "/facilities/transport" },
      ],
    },
    {
      name: "Gallery",
      submenu: [
        { name: "Events", href: "/gallery/events" },
        { name: "Campus", href: "/gallery/campus" },
        { name: "Achievements", href: "/gallery/achievements" },
      ],
    },
    {
      name: "Admissions",
      submenu: [
        { name: "Admission Process", href: "/admissions/process" },
        { name: "Eligibility", href: "/admissions/eligibility" },
        { name: "Fee Structure", href: "/admissions/fees" },
        { name: "Enquiry Form", href: "/admissions/enquiry" },
      ],
    },
    {
      name: "Notice Board",
      submenu: [
        { name: "Latest Announcements", href: "/notice/announcements" },
        { name: "Circulars", href: "/notice/circulars" },
        { name: "Exam Dates", href: "/notice/exams" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full relative z-50">
      <div
        className={`transition-all duration-300 border-t-4 border-yellow-600 ${
          scrolled
            ? "fixed top-0 left-0 w-full bg-[#f3f0e6]/95 backdrop-blur-md shadow-md py-4"
            : "bg-[#f3f0e6] py-6"
        }`}
      >
        <div className="w-full flex items-center justify-between px-8 lg:px-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo-royal.png"
              alt="Royal Public School Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-14" : "h-20"
              }`}
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10">
            {menu.map((item) => (
              <div key={item.name} className="relative group">

                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-900 transition"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 text-gray-700 hover:text-blue-900 transition">
                    {item.name}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </button>
                )}

                {item.submenu && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-14
                               w-65
                               bg-white
                               rounded-xl
                               shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                               border border-gray-100
                               opacity-0 invisible translate-y-3
                               group-hover:opacity-100
                               group-hover:visible
                               group-hover:translate-y-0
                               transition-all duration-300"
                  >
                    <div className="py-3">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-6 py-3 text-sm text-gray-700
                                     hover:bg-blue-50
                                     hover:text-blue-900
                                     transition-all duration-200"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* ERP BUTTON */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-6 py-2 bg-blue-900 text-white rounded-md font-semibold hover:shadow-lg transition">
                <Lock size={18} />
                ERP Login
              </button>

              <div
                className="absolute right-0 top-14 w-55
                           bg-white rounded-xl
                           shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                           border border-gray-100
                           opacity-0 invisible translate-y-3
                           group-hover:opacity-100
                           group-hover:visible
                           group-hover:translate-y-0
                           transition-all duration-300"
              >
                <div className="py-3">
                  <Link href="/erp/student" className="block px-6 py-3 text-sm hover:bg-blue-50">
                    Student Login
                  </Link>
                  <Link href="/erp/teacher" className="block px-6 py-3 text-sm hover:bg-blue-50">
                    Teacher Login
                  </Link>
                  <Link href="/erp/admin" className="block px-6 py-3 text-sm hover:bg-blue-50">
                    Admin Login
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-blue-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#f3f0e6] border-t border-yellow-600 px-6 py-6 space-y-4">
            {menu.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveMobile(
                          activeMobile === item.name ? null : item.name
                        )
                      }
                      className="flex justify-between w-full font-medium text-gray-800"
                    >
                      {item.name}
                      <ChevronDown size={18} />
                    </button>

                    {activeMobile === item.name && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm text-gray-600 hover:text-blue-900"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    onClick={() => setMobileOpen(false)}
                    className="block font-medium text-gray-800"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 border-t">
              <p className="text-sm font-semibold mb-2">ERP Login</p>
              <Link href="/erp/student" className="block text-sm py-1">
                Student
              </Link>
              <Link href="/erp/teacher" className="block text-sm py-1">
                Teacher
              </Link>
              <Link target="_blank" href="https://schoolerpindia.net/school/royal/" className="block text-sm py-1">
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}