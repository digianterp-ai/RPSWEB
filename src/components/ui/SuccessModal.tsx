"use client";

import { CheckCircle } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-100 rounded-xl shadow-xl p-8 text-center animate-fadeIn">

        <CheckCircle
          className="mx-auto text-green-500 mb-4 animate-bounce"
          size={48}
        />

        <h2 className="text-xl font-semibold text-[#0B1F3A] mb-2">
          Message Sent Successfully
        </h2>

        <p className="text-gray-600 mb-6">
          Thank you for contacting us. Our team will reach out shortly.
        </p>

        <button
          onClick={onClose}
          className="bg-[#0B1F3A] text-white px-6 py-2 rounded hover:bg-[#C49A3B] transition"
        >
          Close
        </button>

      </div>
    </div>
  );
}