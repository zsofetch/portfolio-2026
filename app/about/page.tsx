"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ==========================================
// 1. CERTIFICATIONS DATA
// ==========================================
const certificationsData = [
  {
    id: 1,
    title: "Intermediate Docker",
    image: "/cert-docker.png",
    description:
      "I took an Intermediate Docker course and learned the basics of containerization, virtualization, and using Kubernetes bla bla bla.",
  },
  {
    id: 2,
    title: "Introduction to Containerization and Virtualization",
    image: "/cert-candv.png",
    description:
      "Completed comprehensive labs focusing on advanced backup script scheduling, core system administration, and strict switch port channel configurations.",
  },
  {
    id: 3,
    title:
      "Research, Development, Extension, and Publications Office (RDEPO) Orientation",
    image: "/cert-rdepo.png",
    description:
      "Mastered cross-platform application architecture, building functional interfaces utilizing C# and .NET MAUI with integrated Supabase cloud databases.",
  },
  {
    id: 4,
    title: "CCNA: Introduction to Networks",
    image: "/cert-ccna1.png",
    description:
      "Completed comprehensive labs focusing on advanced backup script scheduling, core system administration, and strict switch port channel configurations.",
  },
  {
    id: 5,
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    image: "/cert-ccna2.png",
    description:
      "Completed comprehensive labs focusing on advanced backup script scheduling, core system administration, and strict switch port channel configurations.",
  },
];

export default function About() {
  // --- SLIDESHOW LOGIC ---
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificationsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + certificationsData.length) % certificationsData.length,
    );
  };

  return (
    <div className="w-full relative overflow-hidden bg-[#FCFAF8] min-h-screen flex flex-col">
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-start px-12 pt-4 z-50 pointer-events-auto bg-transparent">
        <a href="/">
          <img
            src="/logo.png"
            alt="Zsofia Antolijao Logo"
            className="w-36 h-auto object-contain cursor-pointer"
          />
        </a>
        <nav className="flex gap-12 text-slate-500 text-xl font-[family-name:var(--font-playfair)] tracking-wide mt-2">
          <a href="/" className="hover:text-slate-800 transition-colors pb-0.5">
            home
          </a>
          <a
            href="/about"
            className="font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5"
          >
            about
          </a>
          <a
            href="/works"
            className="hover:text-slate-800 transition-colors pb-0.5"
          >
            works
          </a>
          <a
            href="/shop"
            className="hover:text-slate-800 transition-colors pb-0.5"
          >
            shop
          </a>
          <a
            href="/contact"
            className="hover:text-slate-800 transition-colors pb-0.5"
          >
            contact
          </a>
        </nav>
      </header>

      {/* --- BIO & PASSPORT SECTION --- */}
      <section className="relative w-full pl-12 pr-0 pb-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Column: Text */}
        <div className="w-full md:w-1/2 max-w-2xl flex flex-col gap-2 z-10">
          <h1 className="text-6xl md:text-[5.5rem] text-[#2A2A2A] tracking-tighter leading-[1.05]">
            Hey there! I&apos;m
          </h1>
          <h1 className="text-6xl md:text-[5.5rem] font-bold text-[#2A2A2A] tracking-tighter leading-[1.05]">
            Zsofia Antolijao.
          </h1>

          <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-slate-700 flex flex-col gap-5 mt-6 leading-relaxed pr-8">
            <p>
              I&apos;m currently learning and honing my skills in Web & Mobile
              Development, Design, and AI/Machine Learning. I also do writing on
              the side as a staff writer for Today&apos;s Carolinian, our
              university publication! I thrive on solving challenging problems
              and constantly expanding my skill set through side projects. Known
              for my adaptability, quick learning, persistence, and leadership
              skills, I enjoy tackling new challenges and finding creative
              solutions.
            </p>
            <p>
              If you need someone who can get the job done on time, I&apos;m
              your girl!
            </p>
            <p>
              Whether I&apos;m developing an app, writing articles, or graphic
              designing, I&apos;m driven by a desire to build, learn, and grow
              in everything I do. I&apos;m always excited to take on new
              challenges and make a meaningful impact through innovative
              solutions.
            </p>
            <p className="italic text-slate-500 mt-2">
              Current project: IoT-Based Automated Health Screening Kiosk for
              the University Clinic
            </p>
          </div>
        </div>

        {/* Right Column: Passport Graphic */}
        <div className="w-full md:w-1/2 flex justify-end relative z-10 mt-16 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer origin-right"
            style={{ transform: "rotate(6deg)" }}
          >
            <img
              src="/passport.png"
              alt="Zsofia's Passport Details"
              className="w-[500px] md:w-[750px] h-auto drop-shadow-2xl rounded-sm -mr-6"
            />
          </motion.div>
        </div>
      </section>

      {/* --- TECH STACK SECTION --- */}
      <section className="w-full flex flex-col items-center pb-8 z-10">
        <h2 className="text-6xl font-bold text-[#3B1D1D] tracking-tight mb-2">
          Tech Stack.
        </h2>
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-slate-500 text-sm mb-4">
          + frameworks, technologies, and languages I&apos;m currently
          learning...
        </p>

        <img
          src="/tech-stack.png"
          alt="Logos of HTML, Java, VS Code, JS, C#, Python, PHP, MySQL, React, .NET, Git, Tailwind"
          className="w-full max-w-[1200px] h-auto object-contain px-3"
        />
      </section>

      {/* --- CERTIFICATIONS SECTION --- */}
      <section className="relative w-full bg-[#E5F0F9] py-24 flex flex-col items-center z-10 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE: The Notebook Asset & Dynamic Text */}
          <div className="relative w-full flex justify-center items-center">
            {/* Your physical notebook background asset */}
            <img
              src="/notebook-asset.png"
              alt="Notebook"
              className="w-full max-w-[500px] h-auto object-contain drop-shadow-xl"
            />

            {/* Absolute positioned text overlay mapped to the notebook halves */}
            <div className="absolute inset-0 flex flex-col justify-between py-[12%] px-[15%] text-center">
              {/* Bottom Half: Dynamic Description matching the current slide */}
              <div className="flex items-center justify-center h-1/2 pt-6">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="font-[family-name:var(--font-jetbrains-mono)] text-[#2B3A4A] text-sm md:text-base mt-130 leading-relaxed max-w-[280px]"
                >
                  {certificationsData[currentIndex].description}
                </motion.p>
              </div>
            </div>

            {/* Decorative Stickers */}
            <motion.img
              src="/sticker-star.png"
              alt="Star Sticker"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-3 w-20 md:w-29 h-auto drop-shadow-md z-20 hover:scale-110 transition-transform cursor-pointer"
            />
            <motion.img
              src="/sticker-flower.png"
              alt="Flower Sticker"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-9 left-86 w-10 md:w-16 h-auto drop-shadow-md z-10 hover:scale-110 transition-transform cursor-pointer"
            />
            <motion.img
              src="/sticker-button.png"
              alt="Star Sticker"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -top-9 -left-4 w-20 md:w-30 h-auto drop-shadow-md z-20 hover:scale-110 transition-transform cursor-pointer"
            />
          </div>

          {/* RIGHT SIDE: The Slideshow Carousel */}
          <div className="relative w-full flex flex-col items-center">
            <div className="relative w-full aspect-[16/10] bg-white rounded-lg shadow-2xl overflow-hidden group">
              {/* The Animated Image Slide */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={certificationsData[currentIndex].image}
                  alt={certificationsData[currentIndex].title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Next Button Overlay */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg hover:scale-110"
              >
                <img src="/arrow-right.png" alt="Next" className="w-12 h-12" />
              </button>

              {/* Previous Button Overlay */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg hover:scale-110 rotate-180"
              >
                <img
                  src="/arrow-right.png"
                  alt="Previous"
                  className="w-12 h-12"
                />
              </button>
            </div>

            {/* Dot Navigation Indicators */}
            <div className="flex gap-3 mt-8">
              {certificationsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "bg-[#2B3A4A] scale-125"
                      : "bg-[#2B3A4A]/20 hover:bg-[#2B3A4A]/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SOCIAL CONNECTIONS --- */}
      {/* Added the matching baby blue background, removed mt-4 to kill the white gap, and added pt-4 for perfect spacing! */}

      <section className="relative w-full bg-[#E5F0F9] flex flex-col items-center pt-4 pb-12 z-30">
        <div className="flex flex-col items-center font-[family-name:var(--font-playfair)] text-slate-700">
          <p className="text-xl mb-4 italic tracking-wide">
            let&apos;s connect!
          </p>
          {/* We add 'relative' here so the absolute image knows exactly where to anchor itself! */}
          <div className="relative flex gap-6">
            {/* The floating handwritten asset */}
            <img
              src="/likewhatyousee.png"
              alt="Like what you see?"
              // -left and -top pull it outside the box, landing it perfectly top-left of GitHub
              className="absolute -left-30 md:-left-50 -top-10 md:-top-16 w-32 md:w-48 h-auto pointer-events-none"
            />
            {/* <div className="flex gap-6"> */}
            {[
              { id: 1, src: "/icon-github.png", alt: "GitHub", link: "#" },
              { id: 2, src: "/icon-fb.png", alt: "Facebook", link: "#" },
              { id: 3, src: "/icon-linkedin.png", alt: "LinkedIn", link: "#" },
              { id: 4, src: "/icon-insta.png", alt: "Instagram", link: "#" },
            ].map((social, index) => (
              <motion.a 
                key={social.id} 
                href={social.link} 
                className="block"
                // Swapped to the gentle scaling/breathing animation
                animate={{ scale: [1, 1.08, 1] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
              >
                <img 
                  src={social.src} 
                  alt={social.alt} 
                  className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain hover:drop-shadow-md transition-all" 
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative w-full bg-[#2B3A4A] text-[#FCFAF8] py-4 px-12 flex justify-between items-center text-sm font-[family-name:var(--font-playfair)] z-50">
        <span className="italic">layout inspired by @ciaragan</span>
        <a
          href="mailto:antolijaozsofia@gmail.com"
          className="hover:text-zinc-300 transition-colors underline underline-offset-4 decoration-1"
        >
          antolijaozsofia@gmail.com
        </a>
        <span>2026</span>
      </footer>
    </div>
  );
}
