"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Mail,
  Users,
  GraduationCap,
  CreditCard,
  BookOpen
} from "lucide-react";

export default function Sidebar() {

  const pathname = usePathname();

  const menu = [
    {
      name: "Dashboard",
      path: "/erp",
      icon: LayoutDashboard
    },
    {
      name: "Enquiries",
      path: "/erp/enquiries",
      icon: Mail
    },
    {
      name: "Students",
      path: "/erp/students",
      icon: Users
    },
    {
      name: "Admissions",
      path: "/erp/admissions",
      icon: GraduationCap
    },
    {
      name: "Fees",
      path: "/erp/fees",
      icon: CreditCard
    },
    {
      name: "Academics",
      path: "/erp/academics",
      icon: BookOpen
    }
  ];

  return (

    <aside className="w-64 bg-[#0B1F3A] text-white min-h-screen p-6">

      {/* LOGO */}
      <h2 className="text-xl font-bold mb-10">
        RPS ERP
      </h2>

      <nav>

        <ul className="space-y-2">

          {menu.map((item) => {

            const Icon = item.icon;
            const active = pathname === item.path;

            return (

              <li key={item.path}>

                <Link
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded transition

                    ${
                      active
                        ? "bg-[#C49A3B]"
                        : "hover:bg-[#1F3A5F]"
                    }

                  `}
                >

                  <Icon size={18} />

                  {item.name}

                </Link>

              </li>

            );

          })}

        </ul>

      </nav>

    </aside>

  );
}