"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="w-full bg-[#F8FAFC] border-b">
      <div className="max-w-6xl mx-auto px-8 py-4 text-sm text-gray-600">

        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");

          return (
            <span key={href}>
              {" "}
              /{" "}
              {index === pathSegments.length - 1 ? (
                <span className="text-gray-900 font-medium capitalize">
                  {segment.replace("-", " ")}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-blue-600 capitalize"
                >
                  {segment.replace("-", " ")}
                </Link>
              )}
            </span>
          );
        })}

      </div>
    </div>
  );
}