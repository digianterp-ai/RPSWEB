"use client";

import { useState } from "react";
import { Search, Bell, ChevronDown, PanelLeftClose, PanelLeftOpen } from "lucide-react";

type TopbarProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Topbar({
  collapsed,
  setCollapsed
}: TopbarProps) {

  const [openNotify, setOpenNotify] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const handleLogout = async () => {

    await fetch("/api/auth/logout", {
      method: "POST"
    });

    window.location.href = "/login";
  };

  return (

    <header className="bg-white border-b px-6 py-3 flex items-center justify-between">

      {/* LEFT */}

      <div className="flex items-center gap-4">

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-600 hover:text-black"
        >
          {collapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>

        {/* SEARCH */}

        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-96">

          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search students, fees, classes..."
            className="bg-transparent outline-none ml-2 text-sm w-full"
          />

        </div>

      </div>



      {/* RIGHT SECTION */}

      <div className="flex items-center gap-6">

        {/* NOTIFICATION */}

        <div className="relative">

          <button
            onClick={() => setOpenNotify(!openNotify)}
            className="relative hover:text-[#0F96F6]"
          >

            <Bell size={20} />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
              3
            </span>

          </button>

          {openNotify && (

            <div className="absolute right-0 mt-3 w-72 bg-white border rounded-xl shadow-lg p-4 animate-fade-in">

              <p className="font-semibold mb-3">
                Notifications
              </p>

              <div className="space-y-2 text-sm text-gray-600">

                <p>New admission enquiry</p>
                <p>Fee payment received</p>
                <p>Attendance updated</p>

              </div>

            </div>

          )}

        </div>



        {/* PROFILE */}

        <div className="relative">

          <button
            onClick={() => setOpenProfile(!openProfile)}
            className="flex items-center gap-2"
          >

            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
              A
            </div>

            <ChevronDown size={16} />

          </button>

          {openProfile && (

            <div className="absolute right-0 mt-3 w-48 bg-white border rounded-xl shadow-lg py-2 animate-fade-in">

              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                Profile
              </button>

              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                Settings
              </button>

              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Logout
              </button>

            </div>

          )}

        </div>

      </div>

    </header>

  );
}