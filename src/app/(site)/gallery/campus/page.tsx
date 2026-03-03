"use client";

import Image from "next/image";

export default function CampusPage() {
  return (
    <>
      <section className="w-full bg-blue-600 text-white py-28 text-center">
        <h1 className="text-4xl font-bold">Campus Infrastructure</h1>
      </section>

      <section className="w-full bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">

          {["campus1.jpg", "campus2.jpg", "campus3.jpg", "campus4.jpg", "campus5.jpg", "campus6.jpg"].map((img, index) => (
            <div key={index} className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={`/images/${img}`}
                alt="Campus Image"
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