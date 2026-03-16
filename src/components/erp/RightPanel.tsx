"use client";

import { Calendar, Bell, Plus } from "lucide-react";

export default function RightPanel() {

  return (
    <aside className="w-80 bg-white border-l p-6 space-y-6 overflow-y-auto">

      {/* Admin Profile */}

      <div className="text-center">

        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>

        <h3 className="font-semibold">
          Admin User
        </h3>

        <p className="text-sm text-gray-500">
          Super Admin
        </p>

      </div>


      {/* Quick Actions */}

      <div>

        <h4 className="font-semibold mb-3">
          Quick Actions
        </h4>

        <div className="space-y-2">

          <button className="flex items-center gap-2 text-sm text-blue-600">
            <Plus size={16} />
            Add Student
          </button>

          <button className="flex items-center gap-2 text-sm text-blue-600">
            <Plus size={16} />
            Take Attendance
          </button>

          <button className="flex items-center gap-2 text-sm text-blue-600">
            <Plus size={16} />
            Create Admission
          </button>

        </div>

      </div>


      {/* Notices */}

      <div>

        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Bell size={16} />
          Notices
        </h4>

        <ul className="text-sm text-gray-600 space-y-2">

          <li>📢 PTM Meeting Friday</li>

          <li>📢 Holiday Announcement</li>

          <li>📢 Exam Schedule Released</li>

        </ul>

      </div>


      {/* Events */}

      <div>

        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Calendar size={16} />
          Upcoming Events
        </h4>

        <ul className="text-sm text-gray-600 space-y-2">

          <li>Sports Day - 20 Feb</li>

          <li>Science Exhibition</li>

          <li>Annual Function</li>

        </ul>

      </div>

    </aside>
  );
}