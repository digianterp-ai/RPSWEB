"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [erpOpen, setErpOpen] = useState(false);

  const menu = [
    { name: "Home", href: "/" },

    {
      name: "About",
      href: "/about",
      submenu: [
        { name: "Vision & Mission", href: "/about/vision" },
        { name: "Principal Message", href: "/about/principal" },
        { name: "School History", href: "/about/history" },
        { name: "Management", href: "/about/management" },
      ],
    },

    {
      name: "Academics",
      href: "/academics",
      submenu: [
        { name: "Pre-Primary", href: "/academics/pre-primary" },
        { name: "Primary (I–V)", href: "/academics/primary" },
        { name: "Middle School", href: "/academics/middle" },
        { name: "Higher Secondary", href: "/academics/higher-secondary" },
        { name: "MP Board Curriculum", href: "/academics/mp-board" },
      ],
    },

    {
      name: "Facilities",
      href: "/facilities",
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
      href: "/gallery",
      submenu: [
        { name: "Events", href: "/gallery/events" },
        { name: "Campus", href: "/gallery/campus" },
        { name: "Achievements", href: "/gallery/achievements" },
      ],
    },

    {
      name: "Admissions",
      href: "/admissions",
      submenu: [
        { name: "Admission Process", href: "/admissions/process" },
        { name: "Eligibility", href: "/admissions/eligibility" },
        { name: "Fee Structure", href: "/admissions/fees" },
        { name: "Enquiry Form", href: "/admissions/enquiry" },
      ],
    },

    {
      name: "Notice Board",
      href: "/notice",
      submenu: [
        { name: "Latest Announcements", href: "/notice/announcements" },
        { name: "Circulars", href: "/notice/circulars" },
        { name: "Exam Dates", href: "/notice/exams" },
      ],
    },

    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* ================= TOP BAR ================= */}

      <div className="bg-[#0B1F3A] text-white text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-6 py-2">
          <div className="flex gap-3 md:gap-6">
            <span className="whitespace-nowrap">+91 79873 14617</span>

            <span className="hidden md:inline">info@rpsdeori.org</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">MP Board Affiliated School</span>

            <button className="w-7 h-7 bg-white text-[#0B1F3A] rounded-full flex items-center justify-center">
              <Search size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}

      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 h-20 lg:h-24 relative">
          {/* MOBILE MENU BUTTON */}

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* LEFT MENU */}

          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
            {menu.slice(0, 5).map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 hover:text-blue-900"
                >
                  {item.name}

                  {item.submenu && <ChevronDown size={14} />}
                </Link>

                {item.submenu && (
                  <div
                    className="absolute top-full mt-3 left-0 bg-white shadow-xl rounded-xl w-56
opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-5 py-3 text-sm text-black hover:bg-blue-50"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* LOGO */}

          <Link
            href="/"
            className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-top-7 flex justify-center"
          >
            <img
              src="/images/logo-royal.png"
              alt="Royal Public School"
              className="h-16 lg:h-28 w-auto"
            />
          </Link>

          {/* RIGHT MENU */}

          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
            {menu.slice(5).map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 hover:text-blue-900"
                >
                  {item.name}

                  {item.submenu && <ChevronDown size={14} />}
                </Link>

                {item.submenu && (
                  <div
                    className="absolute top-full mt-3 left-0 bg-white shadow-xl rounded-xl w-56
opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-5 py-3 text-sm text-black hover:bg-blue-50"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* ERP BUTTON */}

            <div
              className="relative"
              onMouseEnter={() => setErpOpen(true)}
              onMouseLeave={() => setErpOpen(false)}
            >
              <button className="bg-[#C49A3B] text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-1 shadow-md">
                ERP Login
                <ChevronDown size={14} />
              </button>

              <div
                className={`absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100
overflow-hidden transition-all duration-300
${erpOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <Link
                  href="/erp/student"
                  className="block px-4 py-3 text-sm hover:bg-blue-50"
                >
                  🎓 Student Login
                </Link>

                <Link
                  href="/erp/parent"
                  className="block px-4 py-3 text-sm hover:bg-blue-50"
                >
                  👨‍👩‍👧 Parent Login
                </Link>

                <Link
                  href="/erp/teacher"
                  className="block px-4 py-3 text-sm hover:bg-blue-50"
                >
                  👨‍🏫 Teacher Login
                </Link>

                <Link
                  href="/erp/admin"
                  className="block px-4 py-3 text-sm hover:bg-blue-50"
                >
                  ⚙ Admin Panel
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="h-0.5 bg-linear-to-r from-transparent via-[#C49A3B] to-transparent"></div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-6">
          {menu.map((item) => (
            <div key={item.name} className="mb-3">
              <button
                className="flex justify-between w-full font-medium"
                onClick={() =>
                  setOpenSub(openSub === item.name ? null : item.name)
                }
              >
                {item.name}

                {item.submenu && <ChevronDown size={16} />}
              </button>

              {item.submenu && openSub === item.name && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block text-sm text-gray-600"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
