"use client";

import Image from "next/image";

export default function EventsPage() {
  return (
    <>
      <section
        className="relative w-full min-h-[30vh] flex items-center justify-center text-white sitepage-banner">
        <h1 className="text-4xl font-bold">School Events</h1>
      </section>

      <section className="w-full bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">

          {["event1.jpg", "event2.jpg", "event3.jpg", "event4.jpg", "event5.jpg", "event6.jpg"].map((img, index) => (
            <div key={index} className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={`/images/${img}`}
                alt="School Event"
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