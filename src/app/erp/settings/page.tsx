"use client";

import Link from "next/link";

export default function SettingsPage() {
  const settings = [
    {
      title: "Academic Years",
      description: "Manage academic sessions",
      href: "/erp/settings/academic-years",
    },
    {
      title: "Branches",
      description: "Manage school branches",
      href: "/erp/settings/branches",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {settings.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-500">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}