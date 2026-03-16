"use client";

import { useState } from "react";
import Sidebar from "@/components/erp/Sidebar";
import Topbar from "@/components/erp/Topbar";
import RightPanel from "@/components/erp/RightPanel";

/*
ROLE TYPES
You can later move this to src/types/roles.ts
*/

type UserRole =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "TEACHER"
  | "STAFF"
  | "PARENT"
  | "STUDENT";

type User = {
  name: string;
  role: UserRole;
};

export default function ErpLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  /*
TEMP USER
Later this will come from:

* JWT session
* Auth API
* NextAuth
  */

  const user: User = {
    name: "Admin User",
    role: "SUPER_ADMIN",
  };

  const userRole = user.role;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR */}

      <Sidebar collapsed={collapsed} userRole={userRole} />

      {/* MAIN AREA */}

      <div className="flex flex-col flex-1">
        {/* TOPBAR */}

        <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* CONTENT + RIGHT PANEL */}

        <div className="flex flex-1 overflow-hidden">
          {/* MAIN CONTENT */}

          <main className="flex-1 p-6 overflow-y-auto">{children}</main>

          {/* RIGHT PANEL */}

          <RightPanel />
        </div>
      </div>
    </div>
  );
}
