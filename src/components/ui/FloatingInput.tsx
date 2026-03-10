"use client";

import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FloatingInput({ label, ...props }: Props) {
  return (
    <div className="relative">

      <input
        {...props}
        placeholder=" "
        className="peer w-full border border-gray-300 rounded px-4 pt-6 pb-2 focus:border-[#C49A3B] focus:ring-2 focus:ring-[#C49A3B]/30 outline-none transition"
      />

      <label
        className="
        absolute left-4 top-2 text-sm text-gray-500
        peer-placeholder-shown:top-4
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-400
        peer-focus:top-2
        peer-focus:text-sm
        peer-focus:text-[#C49A3B]
        transition-all
      "
      >
        {label}
      </label>

    </div>
  );
}