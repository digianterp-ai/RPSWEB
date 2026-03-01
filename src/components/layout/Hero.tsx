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
  size = 120,
  opacity = 0.20,
}: {
  children: React.ReactNode;
  delay: number;
  top: string;
  left: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      className="absolute animate-float pointer-events-none"
      style={{
        top,
        left,
        animationDelay: `${delay}s`,
        opacity,
        transform: `scale(${size / 60})`,
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
      width={120}
      height={120}
    />
  );
}

function FormulaIcon() {
  return (
    <img
      src="/icons/homeicon1.svg"
      alt="Icon"
      width={80}
      height={80}
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
      width={80}
      height={80}
    />
  );
}

function ChartIcon() {
  return (
    <img
      src="/icons/chart.svg"
      alt="Icon"
      width={80}
      height={80}
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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-center px-6 bg-[#f9f9f9]">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-35 bg-[#f9f9f9] border-b border-[#e6e6e6]" />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #e6e6e6 0px, #e6e6e6 1px, transparent 1px, transparent 60px)",
            marginTop: "140px",
          }}
        />

        <div
          className="absolute top-0 bottom-0 left-20 w-px"
          style={{ backgroundColor: "rgba(160,60,60,0.12)" }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <FloatingIcon delay={0} top="10%" left="15%" ><AtomIcon /></FloatingIcon>
        <FloatingIcon delay={2} top="60%" left="80%"><RocketIcon /></FloatingIcon>
        <FloatingIcon delay={4} top="30%" left="75%"><FormulaIcon /></FloatingIcon>
        <FloatingIcon delay={6} top="75%" left="15%"><BookIcon /></FloatingIcon>
        <FloatingIcon delay={8} top="20%" left="90%"><TestTubeIcon /></FloatingIcon>
        <FloatingIcon delay={10} top="40%" left="20%"><PiIcon /></FloatingIcon>
        <FloatingIcon delay={2} top="80%" left="90%"><ChartIcon /></FloatingIcon>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">

        <div className={`transition-all duration-700 ${scrolled ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"}`}>
          <img src="/images/logo-royal.png"
            alt="Royal Public School"
            className="h-28 md:h-36 w-auto mx-auto mb-6" />
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
          <span className="text-lg">That is Education which liberates</span>
          <div className="w-16 h-px bg-gray-400"></div>
        </div>

        {/* BIG Heading */}
        <div
          className="relative mt-10 flex justify-center"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
          <div className={`relative px-12 py-8 transition-all duration-700 ${fadeBig ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>

            <div className="absolute -top-4 -left-4">
              <div className="w-12 h-0.75 bg-gray-900 rounded-full"></div>
              <div className="h-12 w-0.75 bg-gray-900 rounded-full"></div>
            </div>

            <div className="absolute -bottom-4 -right-4 rotate-180">
              <div className="w-12 h-0.75 bg-gray-900 rounded-full"></div>
              <div className="h-12 w-0.75 bg-gray-900 rounded-full"></div>
            </div>

            <div className={`absolute top-0 left-0 h-0.75 bg-yellow-600 transition-all duration-700 ${fadeBig ? "w-12" : "w-0"}`}></div>

            <h2 className="text-yellow-600 text-5xl md:text-6xl font-extrabold tracking-wide text-center">
              {bigTexts[activeBig].top}
            </h2>

            <h1 className="text-7xl md:text-8xl font-extrabold text-gray-900 leading-tight text-center">
              {bigTexts[activeBig].bottom}
            </h1>

          </div>
        </div>

        <div className="mt-8 bg-black text-white px-6 py-3 rounded-lg text-lg md:text-xl font-medium inline-block">
          Empowering Minds from Foundation to Higher Secondary.
        </div>

        <div className="mt-8 flex gap-6 flex-wrap justify-center">
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