"use client";

import { Music, Cpu, Microscope, BookOpen, Monitor } from "lucide-react";
import Image from "next/image";

const facilities = [
  {
    icon: Monitor,
    title: "Smart Digital Classrooms",
  },
  {
    icon: Microscope,
    title: "Science Laboratory",
  },
  {
    icon: BookOpen,
    title: "Library & Reading Hall",
  },
  {
    icon: Cpu,
    title: "Computer Lab",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="w-full bg-[#F5F7FA] py-28">
      <div className="max-w-7xl mx-auto px-12 lg:px-20">

        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            Our Facilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Infrastructure for Academic & Creative Excellence
          </h2>
          <div className="w-24 h-1 bg-[#C49A3B] mx-auto" />
        </div>

        {/* CORE FACILITIES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {facilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center"
              >
                <div className="w-14 h-14 mx-auto bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <p className="font-medium text-gray-800">{item.title}</p>
              </div>
            );
          })}
        </div>

        {/* STEM LAB SECTION */}
        <div className="bg-white rounded-3xl p-12 shadow-md mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-6 text-blue-500">
                STEM Innovation Lab
              </h3>
              <p className="text-gray-600 mb-4">
                Our STEM Lab encourages scientific curiosity, experimentation,
                and hands-on learning in Science, Technology, Engineering,
                and Mathematics.
              </p>
              <p className="text-gray-600">
                Students engage in robotics basics, logical reasoning projects,
                and practical innovation activities that develop analytical
                and problem-solving skills.
              </p>
            </div>

            <div className="relative flex-1 h-64 rounded-2xl overflow-hidden">
                <Image
                    src="/images/steamLab.png"
                    alt="Royal Public School Campus"
                    fill
                    className="object-cover"
                />
            </div>

          </div>
        </div>

        {/* MUSIC & PERFORMING ARTS SECTION */}
        <div className="bg-white rounded-3xl p-12 shadow-md">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-6 text-[#C49A3B]">
                Music & Performing Arts
              </h3>
              <p className="text-gray-600 mb-4">
                Royal Public School nurtures creativity through structured
                music education and performing arts activities.
              </p>
              <p className="text-gray-600">
                Students participate in vocal training, instrumental music,
                cultural programs, and stage performances to develop confidence
                and artistic expression.
              </p>
            </div>

            <div className="relative flex-1 h-64 rounded-2xl overflow-hidden">
                <Image
                    src="/images/musicArea.png"
                    alt="Royal Public School Campus"
                    fill
                    className="object-cover"
                />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}