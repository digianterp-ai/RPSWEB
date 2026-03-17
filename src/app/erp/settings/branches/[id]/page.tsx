"use client";

import { useParams } from "next/navigation";

export default function BranchDetailPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">
        Branch Detail
      </h1>
      <p className="mt-2 text-gray-500">
        ID: {id}
      </p>
    </div>
  );
}