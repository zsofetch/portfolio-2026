"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";

const certificationsData = [
  { id: 1, title: "Intermediate Docker", image: "/cert-docker.png", description: "Learned the core concepts of containerization and virtualization, helping streamline my backend database integrations and full-stack development workflows." },
  { id: 2, title: "Introduction to Containerization and Virtualization", image: "/cert-candv.png", description: "Explored the underlying architecture of virtual environments, spanning from basic VM setups to managing automated backup script schedules in Linux system administration labs." },
  { id: 3, title: "RDEPO Orientation", image: "/cert-rdepo.png", description: "Completed the foundational training required for my editorial and journalism work as a staff writer for Today's Carolinian at the University of San Carlos." },
  { id: 4, title: "CCNA: Introduction to Networks", image: "/cert-ccna1.png", description: "Mastered the fundamentals of network architecture, covering everything from basic IPv4/IPv6 addressing to the theoretical models of routing and switching." },
  { id: 5, title: "CCNA: Switching, Routing, and Wireless Essentials", image: "/cert-ccna2.png", description: "Got hands-on with networking hardware, running extensive labs on distinct switch port groupings and configuring precise layouts with strict channel limits." },
];

const socialLinks = [
  { id: 1, src: "/icon-github.png", alt: "GitHub", link: "https://github.com/zsofetch" },
  { id: 2, src: "/icon-fb.png", alt: "Facebook", link: "https://www.facebook.com/share/1Pc8qRrGwc/" },
  { id: 3, src: "/icon-linkedin.png", alt: "LinkedIn", link: "https://www.linkedin.com/in/zsofy" },
  { id: 4, src: "/icon-insta.png", alt: "Instagram", link: "https://www.instagram.com/zsofetch?igsi=MWJiZDZvdHA3a2xmbQ==" },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % certificationsData.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + certificationsData.length) % certificationsData.length);

  const onCarouselKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  return (
    <div className="w-full relative overflow-hidden bg-[#FCFAF8] min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full flex justify-between items-start px-6 md:px-12 pt-4 z-50 pointer-events-auto bg-transparent">
        <a href="/" aria-label="Home">
          <img src="/logo.png" alt="Zsofia Antolijao Logo" className="w-28 md:w-36 h-auto object-contain cursor-pointer" />
        </a>
        <nav aria-label="Main navigation" className="flex gap-6 md:gap-12 text-slate-500 text-base md:text-xl font-[family-name:var(--font-playfair)] tracking-wide mt-2">
          <a href="/" className="hover:text-slate-800 transition-colors pb-0.5">home</a>
          <a href="/about" aria-current="page" className="font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5">about</a>
          <a href="/works" className="hover:text-slate-800 transition-colors pb-0.5">works</a>
          <a href="/shop" className="hover:text-slate-800 transition-colors pb-0.5">shop</a>
          <a href="/contact" className="hover:text-slate-800 transition-colors pb-0.5">contact</a>
        </nav>
      </header>

      <section className="relative w-full pl-6 md:pl-12 pr-0 pb-20 pt-28 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 max-w-2xl flex flex-col gap-2 z-10">
          <h1 className="text-5xl md:text-[5.5rem] text-[#2A2A2A] tracking-tighter leading-[1.05] font-[family-name:var(--font-playfair)]">
            Hey there! I&apos;m
          </h1>
          <h1 className="text-5xl md:text-[5.5rem] font-bold text-[#2A2A2A] tracking-tighter leading-[1.05] font-[family-name:var(--font-playfair)]">
            Zsofia Antolijao.
          </h1>

          <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-slate-700 flex flex-col gap-5 mt-6 leading-relaxed pr-0 md:pr-8">
            <p>
              I&apos;m currently learning and honing my skills in Web &amp; Mobile Development, Design, and AI/Machine Learning. I also do writing on
              the side as a staff writer for Today&apos;s Carolinian, our university publication! I thrive on solving challenging problems
              and constantly expanding my skill set through side projects. Known for my adaptability, quick learning, persistence, and leadership
              skills, I enjoy tackling new challenges and finding creative solutions.
            </p>
            <p>If you need someone who can get the job done on time, I&apos;m your girl!</p>
            <p>
              Whether I&apos;m developing an app, writing articles, or graphic designing, I&apos;m driven by a desire to build, learn, and grow
              in everything I do. I&apos;m always excited to take on new challenges and make a meaningful impact through innovative solutions.
            </p>
            <p className="italic text-slate-500 mt-2">
              Current project: IoT-Based Automated Health Screening Kiosk for the University Clinic
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-end relative z-10 mt-16 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={reduceMotion ? {} : { scale: 1.1 }}
            className="cursor-pointer origin-right"
            style={{ transform: "rotate(6deg)" }}
          >
            <img
              src="/passport.png"
              alt="Zsofia's passport-style bio page, showing personal details and hobbies"
              className="w-[500px] md:w-[750px] h-auto drop-shadow-2xl rounded-sm md:-mr-6"
            />
          </motion.div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center pb-8 z-10 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-[#3B1D1D] tracking-tight mb-2 font-[family-name:var(--font-playfair)]">
          Tech Stack.
        </h2>
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-slate-500 text-sm mb-4 text-center">
          + frameworks, technologies, and languages I&apos;m currently learning...
        </p>
        <img
          src="/tech-stack.png"
          alt="Logos of HTML, Java, VS Code, JavaScript, C#, Python, PHP, MySQL, React, .NET, Git, and Tailwind CSS"
          className="w-full max-w-[1200px] h-auto object-contain px-3"
        />
      </section>

      <section className="relative w-full bg-[#E5F0F9] py-24 flex flex-col items-center z-10 overflow-hidden" aria-label="Certifications">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative w-full flex justify-center items-center">
            <img src="/notebook-asset.png" alt="" className="w-full max-w-[800px] h-auto object-contain drop-shadow-xl" />

            <div className="absolute inset-0 flex flex-col py-[6%] px-[15%] text-justify">
              <div className="flex flex-col items-center justify-end h-full pb-8">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="font-[family-name:var(--font-jetbrains-mono)] text-[#2B3A4A] text-sm md:text-base leading-relaxed max-w-[300px]"
                >
                  {certificationsData[currentIndex].description}
                </motion.p>
              </div>
            </div>

            <motion.img
              src="/sticker-star.png"
              alt=""
              animate={reduceMotion ? {} : { scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-3 w-28 h-auto drop-shadow-md z-20 hover:scale-110 transition-transform"
            />
            <motion.img
              src="/sticker-flower.png"
              alt=""
              animate={reduceMotion ? {} : { scale: [1, 1.08, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 left-[60%] md:left-[65%] w-12 md:w-16 h-auto drop-shadow-md z-10 hover:scale-110 transition-transform"
            />
            <motion.img
              src="/sticker-button.png"
              alt=""
              animate={reduceMotion ? {} : { scale: [1, 1.08, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -top-6 -left-4 w-24 md:w-32 h-auto drop-shadow-md z-20 hover:scale-110 transition-transform"
            />
          </div>

          <div
            className="relative w-full flex flex-col items-center"
            role="region"
            aria-roledescription="carousel"
            aria-label="Certifications"
            tabIndex={0}
            onKeyDown={onCarouselKeyDown}
          >
            <div className="relative w-full aspect-[16/10] bg-white rounded-lg shadow-2xl overflow-hidden group">
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

              <button
                onClick={nextSlide}
                aria-label="Next certification"
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300 drop-shadow-lg hover:scale-110"
              >
                <img src="/arrow-right.png" alt="" className="w-12 h-12" />
              </button>

              <button
                onClick={prevSlide}
                aria-label="Previous certification"
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300 drop-shadow-lg hover:scale-110 rotate-180"
              >
                <img src="/arrow-right.png" alt="" className="w-12 h-12" />
              </button>
            </div>

            <div className="flex gap-3 mt-8">
              {certificationsData.map((cert, idx) => (
                <button
                  key={cert.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-[#2B3A4A] scale-125" : "bg-[#2B3A4A]/20 hover:bg-[#2B3A4A]/50"
                  }`}
                  aria-label={`Go to certification ${idx + 1}: ${cert.title}`}
                  aria-current={currentIndex === idx}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#E5F0F9] flex flex-col items-center pb-8 z-30" aria-label="Social links">
        <div className="flex flex-col items-center font-[family-name:var(--font-playfair)] text-slate-700">
          <p className="text-sm mb-2 italic tracking-wide">let&apos;s connect!</p>
          <div className="relative flex gap-6">
            <img
              src="/likewhatyousee.png"
              alt=""
              className="absolute -left-32 md:-left-48 -top-10 md:-top-20 w-32 md:w-48 h-auto pointer-events-none"
            />
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
                className="block"
                animate={reduceMotion ? {} : { scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
              >
                <img src={social.src} alt="" className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain hover:drop-shadow-md transition-all" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative w-full bg-[#2B3A4A] text-[#FCFAF8] py-4 px-6 md:px-12 flex flex-col md:flex-row gap-2 justify-between items-center text-sm font-[family-name:var(--font-playfair)] z-50">
        <span className="italic">layout inspired by @ciaragan</span>
        <a href="mailto:antolijaozsofia@gmail.com" className="hover:text-zinc-300 transition-colors underline underline-offset-4 decoration-1">
          antolijaozsofia@gmail.com
        </a>
        <span>2026</span>
      </footer>
    </div>
  );
}