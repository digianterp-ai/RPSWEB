"use client";

import { useEffect, useState } from "react";

export default function DashboardHeader() {

  const [today, setToday] = useState("");

  useEffect(() => {

    const date = new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    setToday(date);

  }, []);

  return (

    <div className="flex items-center justify-between mb-8">

      <div>

        <p className="text-sm text-gray-500">
          Home / Dashboard
        </p>

        <h1 className="text-3xl font-bold text-[#0B1F3A]">
          Dashboard
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Welcome back, Admin 👋
        </p>

      </div>

      <div className="text-sm text-gray-500">
        {today}
      </div>

    </div>
  );
}