"use client";

import { useEffect, useState } from "react";

/* ===============================
   Floating Icon Component
================================= */
function FloatingIcon({
  children,
  delay,
  top,
  left,
  size = 60,
  opacity = 0.25,
  rotate = false,
  pulse = false,
  depth = 1,
}: {
  children: React.ReactNode;
  delay: number;
  top: string;
  left: string;
  size?: number;
  opacity?: number;
  rotate?: boolean;
  pulse?: boolean;
  depth?: number;
}) {
  return (
    <div
      className={`
        absolute pointer-events-none
        ${rotate ? "animate-rotateSlow" : ""}
        ${pulse ? "animate-pulseFade" : ""}
        animate-floatY
      `}
      style={{
        top,
        left,
        animationDelay: `${delay}s`,
        opacity,
        transform: `scale(${size / 60})`,
        filter: depth === 2 ? "blur(1px)" : "blur(0.3px)",
      }}
    >
      {children}
    </div>
  );
}

/* ===============================
   Chalk SVG Icons (unchanged)
================================= */

function AtomIcon() {
  return (
    <img
      src="/icons/homeicon2.svg"
      alt="Icon"
      width={80}
      height={80}
    />
  );
}

function RocketIcon() {
  return (
    <img
      src="/icons/icon4.svg"
      alt="Icon"
      width={160}
      height={160}
    />
  );
}

function FormulaIcon() {
  return (
    <img
      src="/icons/homeicon1.svg"
      alt="Icon"
      width={180}
      height={180}
    />
  );
}

function BookIcon() {
  return (
    <img
      src="/icons/icon5.svg"
      alt="Icon"
      width={80}
      height={80}
    />
  );
}

function TestTubeIcon() {
  return (
    <img
      src="/icons/icon6.svg"
      alt="Icon"
      width={80}
      height={80}
    />
  );
}

function PiIcon() {
  return (
    <img
      src="/icons/homeicon3.svg"
      alt="Icon"
      width={200}
      height={200}
    />
  );
}

function ChartIcon() {
  return (
    <img
      src="/icons/chart.svg"
      alt="Icon"
      width={180}
      height={180}
    />
  );
}

/* ===============================
   HERO
================================= */

export default function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  /* Mouse + Scroll */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setPosition({ x, y });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Typing Loop */
  const texts = ["Rooted in Knowledge.", "Designed for the Future."];
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const speed = isDeleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  /* Rotating Big Heading */
  const bigTexts = [
    { top: "ANCIENT", bottom: "VALUES" },
    { top: "MODERN", bottom: "EDUCATION" },
    { top: "TIMELESS", bottom: "EXCELLENCE" },
  ];

  const [activeBig, setActiveBig] = useState(0);
  const [fadeBig, setFadeBig] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeBig(false);
      setTimeout(() => {
        setActiveBig((prev) => (prev + 1) % bigTexts.length);
        setFadeBig(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section     className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-center px-4 sm:px-6 bg-[#f9f9f9]">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-35 bg-[#f9f9f9] border-b border-[#e6e6e6]" />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #e6e6e6 0px, #e6e6e6 1px, transparent 1px, transparent 50px)",
            marginTop: "140px",
          }}
        />

        <div
          className="absolute top-0 bottom-0 left-20 w-px"
          style={{ backgroundColor: "rgba(160,60,60,0.12)" }}
        />
      </div>

      {/* Floating Icons */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden z-2">

      {/* Large Background Layer (Blurred) */}
        <FloatingIcon delay={0} top="15%" left="5%" size={140} opacity={0.12} depth={2}>
          <FormulaIcon />
        </FloatingIcon>

        <FloatingIcon delay={0} top="10%" left="80%" size={150} opacity={0.10} depth={2}>
          <RocketIcon />
        </FloatingIcon>

        {/* Mid Layer */}
        <FloatingIcon delay={0} top="60%" left="15%" size={90} opacity={0.25} rotate>
          <AtomIcon />
        </FloatingIcon>

        <FloatingIcon delay={0} top="80%" left="85%" size={85} opacity={0.28} pulse>
          <BookIcon />
        </FloatingIcon>

        {/* Front Small Tech Icons */}
        <FloatingIcon delay={0} top="39%" left="75%" size={60} opacity={0.35}>
          <PiIcon />
        </FloatingIcon>

        <FloatingIcon delay={0} top="40%" left="20%" size={70} opacity={0.32}>
          <TestTubeIcon />
        </FloatingIcon>

        <FloatingIcon delay={0} top="80%" left="10%" size={70} opacity={0.32}>
          <ChartIcon />
        </FloatingIcon>

      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">

        <div className="mt-30">
          
        </div>

        <p className="text-2xl md:text-2xl font-medium mb-2">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>

        <p className="text-3xl md:text-4xl text-blue-500 font-semibold mb-4">
          सा विद्या या विमुक्तये
        </p>

        <div className="flex items-center justify-center gap-4 text-gray-700 mb-2 w-full">
          <div className="w-16 h-px bg-gray-400"></div>
          <span className="text-lg">True knowledge liberates</span>
          <div className="w-16 h-px bg-gray-400"></div>
        </div>

        {/* BIG Heading */}
        <div
          className="relative mt-10 flex justify-center"
          style={{
            transform:
              typeof window !== "undefined" && window.innerWidth < 768
                ? "none"
                : `translate(${position.x}px, ${position.y}px)`
          }}
        >
          <div className={`relative px-6 py-6 sm:px-10 sm:py-8 transition-all duration-700 ${fadeBig ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>

            <div className="absolute -top-4 -left-4">
              <div className="w-12 h-0.75 bg-gray-900 rounded-full"></div>
              <div className="h-12 w-0.75 bg-gray-900 rounded-full"></div>
            </div>

            <div className="absolute -bottom-4 -right-4 rotate-180">
              <div className="w-12 h-0.75 bg-gray-900 rounded-full"></div>
              <div className="h-12 w-0.75 bg-gray-900 rounded-full"></div>
            </div>

            <div className={`absolute top-0 left-0 h-0.75 bg-yellow-600 transition-all duration-700 ${fadeBig ? "w-12" : "w-0"}`}></div>

            <h2 className="text-yellow-600 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide text-center">
              {bigTexts[activeBig].top}
            </h2>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-gray-900 leading-tight text-center">
              {bigTexts[activeBig].bottom}
            </h1>

          </div>
        </div>

        <div className="mt-8 bg-black text-white px-6 py-3 rounded-lg text-lg md:text-xl font-medium inline-block">
          Empowering Minds from Foundation to Higher Secondary.
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button className="relative overflow-hidden px-8 py-3 rounded-lg text-lg font-semibold text-white bg-[#3a88fd] group transition-all duration-300 hover:-translate-y-1">

            {/* Liquid Fill */}
            <span className="absolute inset-0 flex items-end">

              <span className="
                w-full h-0
                bg-linear-to-t from-[#0253df] to-[#1b3e67]
                transition-all duration-700 ease-in-out
                group-hover:h-full
                relative
              ">

                {/* Wave Surface */}
                <span className="absolute -top-3 left-0 w-full h-6 bg-[#1c63b5] rounded-b-[50%] opacity-70 blur-[1px]"></span>

                {/* Light Reflection */}
                <span className="absolute top-0 left-1/4 w-1/2 h-full bg-white/10 blur-md"></span>

              </span>

            </span>

            {/* Text */}
            <span className="relative z-10">
              Admissions Open 2026–27
            </span>

          </button>
          <button className="relative overflow-hidden px-8 py-3 rounded-lg text-lg font-semibold text-yellow-800 bg-white border-2 border-yellow-600 group transition-all duration-300 hover:-translate-y-1">

            {/* Liquid Fill */}
            <span className="absolute inset-0 flex items-end">

              <span className="
                w-full h-0
                bg-linear-to-t from-[#ab811f] to-[#F5D37A]
                transition-all duration-700 ease-in-out
                group-hover:h-full
                relative
              ">

                {/* Wave Surface */}
                <span className="absolute -top-3 left-0 w-full h-6 bg-[#F5D37A] rounded-b-[50%] opacity-70 blur-[1px]"></span>

                {/* Shine Reflection */}
                <span className="absolute top-0 left-1/4 w-1/2 h-full bg-white/20 blur-md"></span>

              </span>

            </span>

            {/* Text */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Explore Academics »
            </span>

          </button>
        </div>

        <p className="mt-6 text-gray-700 text-lg">
          English Medium | MP Board Affiliated | CBSE Affiliation Proposed
        </p>
      </div>

      <div className="absolute bottom-8 right-10 animate-bounce text-gray-600 text-sm z-10">
        Scroll ↓
      </div>
    </section>
  );
}