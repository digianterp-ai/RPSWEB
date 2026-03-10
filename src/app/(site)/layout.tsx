"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/navigation/Breadcrumb";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <>
      {!isHome && <Header />}
         {!isHome && <div className="pt-28.75"></div> }
      <Breadcrumb />
      {children}
      <Footer />
    </>
  );
}