"use client";

import Image from "next/image";

export default function AchievementsPage() {
  return (
    <>
      <section
        className="relative w-full min-h-[30vh] flex items-center justify-center text-white sitepage-banner">
        <h1 className="text-4xl font-bold">Achievements</h1>
      </section>

      <section className="w-full bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">

          {["achieve1.jpg", "achieve2.jpg", "achieve3.jpg", "achieve4.jpg", "achieve5.jpg", "achieve6.jpg"].map((img, index) => (
            <div key={index} className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={`/images/${img}`}
                alt="Achievement"
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>
      </section>
    </>
  );
}