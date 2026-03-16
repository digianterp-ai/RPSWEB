import { ReactNode } from "react";

export default function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">

      <div className="bg-blue-100 p-3 rounded-lg">
        {icon}
      </div>

      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>

    </div>
  );
}