"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// ==========================================
// 1. DYNAMIC DATA ARRAYS
// ==========================================

const exhibitsData = [
  {
    id: 1,
    image: "/exhibit-tc.png",
    alt: "Today's Carolinian Exhibit",
    width: 1000,
    marginTop: -30,
    marginRight: -50,
    marginLeft: 30,
  },
  {
    id: 2,
    image: "/exhibit-www.png",
    alt: "What Women Want Exhibit",
    width: 900,
    marginTop: -20,
    marginRight: 0,
    marginLeft: 0,
  },
  {
    id: 3,
    image: "/exhibit-kb.png",
    alt: "Kusinang Bayan Exhibit",
    width: 600,
    marginTop: -40,
    marginRight: 0,
    marginLeft: 0,
  },
  {
    id: 4,
    image: "/exhibit-td.png",
    alt: "Tumble Dry Exhibit",
    width: 800,
    marginTop: -40,
    marginRight: 0,
    marginLeft: 0,
  },
];

// Custom overlay colors retained!
const worksData = [
  { id: 1, image: "/works-tingog.png", title: "TINGOG Party Article", category: "Writing", description: "Placeholder for now", link: "#", overlayColor: "rgba(159, 18, 57, 0.85)" }, 
  { id: 2, image: "/works-ssc.png", title: "SSC Campaign", category: "Writing", description: "Placeholder for now", link: "#", overlayColor: "rgba(30, 58, 138, 0.85)" },
  { id: 3, image: "/works-wildlifeday.png", title: "Animal Wildlife Day Feature", category: "Writing", description: "Placeholder for now", link: "#", overlayColor: "rgba(22, 101, 52, 0.85)" },
  { id: 4, image: "/works-swimming.png", title: "USC Days Campaign", category: "Writing", description: "Placeholder for now", link: "#", overlayColor: "rgba(15, 118, 110, 0.85)" },
  { id: 5, image: "/works-kb.png", title: "Kulay Bahaghari Campaign", category: "Writing and Graphic Design", description: "Placeholder for now", link: "#", overlayColor: "rgba(134, 25, 143, 0.85)" },
  { id: 6, image: "/works-women.png", title: "Women's Month Feature", category: "Writing", description: "Placeholder for now", link: "#", overlayColor: "rgba(159, 18, 57, 0.85)" },
  { id: 7, image: "/works-tumbledry.png", title: "Tumble Dry Shop", category: "Business", description: "Placeholder for now", link: "#", overlayColor: "rgba(39, 39, 42, 0.85)" }, 
  { id: 8, image: "/works-shutool.png", title: "Shutool App", category: "Development", description: "Placeholder for now", link: "#", overlayColor: "rgba(234, 179, 8, 0.85)" },
  { id: 9, image: "/works-careiosk.png", title: "Careiosk", category: "Design", description: "Placeholder for now", link: "#", overlayColor: "rgba(16, 185, 129, 0.85)" },
  { id: 10, image: "/works-cod.png", title: "COD Feature", category: "Writing", description: "Placeholder for now", link: "#", overlayColor: "rgba(185, 28, 28, 0.85)" },
  { id: 11, image: "/works-craveh.png", title: "Craveh App", category: "Design", description: "Placeholder for now", link: "#", overlayColor: "rgba(249, 115, 22, 0.85)" }, 
  { id: 12, image: "/works-basketball.png", title: "Sports Feature", category: "Writing", description: "Placeholder for now", link: "#", overlayColor: "rgba(234, 88, 12, 0.85)" },
  { id: 13, image: "/works-foundit.png", title: "FoundIt Campaign", category: "Writing", description: "Placeholder for now", link: "#", overlayColor: "rgba(202, 138, 4, 0.85)" },
  { id: 14, image: "/works-ssc2.png", title: "Hans", category: "Writing", description: "Placeholder for now", link: "#", overlayColor: "rgba(71, 85, 105, 0.85)" }, 
  { id: 15, image: "/works-cisco.png", title: "Cisco", category: "Writing", description: "Placeholder for now", link: "#", overlayColor: "rgba(2, 132, 199, 0.85)" },
];

// ==========================================
// 2. MAIN PAGE COMPONENT
// ==========================================

export default function Works() {
  const gridRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start start", "end end"] 
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // RESTORED: Cascading upwards by pulling the taller columns UP
  const yFast = useTransform(smoothProgress, [0, 1], ["0%", "-33.33%"]);
  const yMedium = useTransform(smoothProgress, [0, 1], ["0%", "-13.40%"]);
  const ySlow = useTransform(smoothProgress, [0, 1], ["0%", "16.50%"]);

  const col1 = worksData.slice(0, 6);
  const col2 = worksData.slice(6, 11);
  const col3 = worksData.slice(11, 15);

  const renderCard = (work: any) => (
    <a
      key={work.id}
      href={work.link}
      className="relative block w-full rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer group bg-zinc-200"
    >
      <img
        src={work.image}
        alt={work.title}
        className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Dynamic Overlay Color Retained! */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center backdrop-blur-sm z-20"
        style={{ backgroundColor: work.overlayColor }}
      >
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-[#EFEAE2] text-xs font-bold uppercase tracking-widest mb-3">
          {work.category}
        </p>
        <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#FCFAF8] mb-4">
          {work.title}
        </h3>
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-[#FCFAF8]/90 text-sm leading-relaxed">
          {work.description}
        </p>
      </div>
    </a>
  );

  return (
    <div className="w-full relative overflow-hidden bg-[#FCFAF8] min-h-screen flex flex-col">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-start px-12 pt-4 z-50 pointer-events-auto bg-transparent">
        <a href="/">
          <img src="/logo.png" alt="Zsofia Antolijao Logo" className="w-36 h-auto object-contain cursor-pointer" />
        </a>
        <nav className="flex gap-12 text-slate-500 text-xl font-[family-name:var(--font-playfair)] tracking-wide mt-2">
          <a href="/" className="hover:text-slate-800 transition-colors pb-0.5">home</a>
          <a href="/about" className="hover:text-slate-800 transition-colors pb-0.5">about</a>
          <a href="/works" className="font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5">works</a>
          <a href="/shop" className="hover:text-slate-800 transition-colors pb-0.5">shop</a>
          <a href="/contact" className="hover:text-slate-800 transition-colors pb-0.5">contact</a>
        </nav>
      </header>

      {/* --- EXHIBITS SECTION --- */}
      <section className="relative w-full max-w-[1800px] mx-auto px-4 md:px-12 pt-24 pb-24 z-10 flex flex-col items-center">
        <div className="w-full flex justify-center mb-12">
          <h1 className="text-3xl md:text-[6rem] lg:text-[7.5rem] leading-none font-bold font-[family-name:var(--font-playfair)] text-[#2B3A4A] tracking-tighter text-center">
            Exhibits.
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row flex-nowrap items-start justify-center w-full"
        >
          {exhibitsData.map((exhibit) => (
            <div
              key={exhibit.id}
              style={{
                maxWidth: `${exhibit.width}px`,
                marginTop: `${exhibit.marginTop}px`,
                marginLeft: `${exhibit.marginLeft}px`,
                marginRight: `${exhibit.marginRight}px`,
                width: "100%",
              }}
              className="relative flex flex-col items-center"
            >
              <motion.img
                src={exhibit.image}
                alt={exhibit.alt}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-auto object-contain cursor-pointer drop-shadow-2xl"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* --- WORKS SECTION --- */}
      {/* Changed pb-16 to pb-0 to remove excess padding */}
      <section className="relative w-full max-w-[1600px] mx-auto px-12 pt-16 pb-0 z-10 flex flex-col items-center">
        <h2 className="text-6xl font-bold font-[family-name:var(--font-playfair)] text-[#2A2A2A] tracking-tighter mb-2">
          Work
        </h2>
        <p className="font-[family-name:var(--font-playfair)] text-xl text-slate-700 mb-16 text-center">
          Click on the card to read and see some of the works I&apos;ve made!
        </p>

        {/* Dynamic 3-Column Parallax Grid */}
        {/* Replaced the percentage margin with massive, concrete REM values to forcefully eat up the physical empty space! */}
        <div ref={gridRef} className="flex flex-col md:flex-row gap-6 md:gap-10 w-full items-start -mb-[50rem] md:-mb-[40rem] lg:-mb-[40rem]">
          
          <motion.div style={{ y: yFast }} className="flex flex-col gap-6 md:gap-10 w-full md:w-1/3">
            {col1.map(renderCard)}
          </motion.div>

          <motion.div style={{ y: yMedium }} className="flex flex-col gap-6 md:gap-10 w-full md:w-1/3">
            {col2.map(renderCard)}
          </motion.div>

          <motion.div style={{ y: ySlow }} className="flex flex-col gap-6 md:gap-10 w-full md:w-1/3">
            {col3.map(renderCard)}
          </motion.div>

        </div>
      </section>

      {/* --- SOCIAL CONNECTIONS --- */}
      <section className="relative w-full flex flex-col items-center pb-8 z-30 mt-auto">
        <div className="flex flex-col items-center font-[family-name:var(--font-playfair)] text-slate-700">
          <p className="text-xl mb-4 italic tracking-wide">let&apos;s connect!</p>
          
          {/* We add 'relative' here so the absolute image knows exactly where to anchor itself! */}
          <div className="relative flex gap-6">
            
            {/* The floating handwritten asset */}
            <img 
              src="/likewhatyousee.png" 
              alt="Like what you see?" 
              // -left and -top pull it outside the box, landing it perfectly top-left of GitHub
              className="absolute -left-30 md:-left-50 -top-10 md:-top-16 w-32 md:w-48 h-auto pointer-events-none" 
            />

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
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className="w-[60px] h-[60px] object-contain hover:drop-shadow-md transition-all relative z-10"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative w-full bg-[#2B3A4A] text-[#FCFAF8] py-4 px-12 flex justify-between items-center text-sm font-[family-name:var(--font-playfair)] z-50">
        <span className="italic">layout inspired by @ciaragan</span>
        <a href="mailto:antolijaozsofia@gmail.com" className="hover:text-zinc-300 transition-colors underline underline-offset-4 decoration-1">
          antolijaozsofia@gmail.com
        </a>
        <span>2026</span>
      </footer>

    </div>
  );
}