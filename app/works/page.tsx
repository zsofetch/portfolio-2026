"use client";

import { motion } from "framer-motion";

// ==========================================
// 1. DYNAMIC DATA ARRAYS
// Add, edit, or remove items here to automatically update the page layout!
// ==========================================

const exhibitsData = [
  {
    id: 1,
    image: "/exhibit-tc.png",
    alt: "Today's Carolinian Exhibit",
  },
  {
    id: 2,
    image: "/exhibit-www.png",
    alt: "What Women Want Exhibit",
  },
  {
    id: 3,
    image: "/exhibit-kb.png",
    alt: "Kusinang Bayan Exhibit",
  },
  {
    id: 4,
    image: "/exhibit-td.png",
    alt: "Tumble Dry Exhibit",
  }
];

const worksData = [
  {
    id: 1,
    image: "/work-shutool.png",
    title: "Shutool",
    category: "Mobile Application",
    description: "A cross-platform mobile utility developed using the .NET MAUI framework, integrated with a Supabase cloud backend database."
  },
  {
    id: 2,
    image: "/work-analytics.png",
    title: "Web Analytics Dashboard",
    category: "Full-Stack Web",
    description: "A localized website tracking platform featuring custom Chart.js visualizations, built utilizing PHP and MySQL."
  },
  {
    id: 3,
    image: "/work-crawler.png",
    title: "Java Web Crawler",
    category: "Software Engineering",
    description: "Designed in NetBeans to recursively collect and map domain sublinks into a local database file using JSoup."
  },
  {
    id: 4,
    image: "/work-calculator.png",
    title: ".NET MAUI Calculator",
    category: "Mobile Application",
    description: "An operational calculator interface capable of handling sequential floating-point numerical events and custom layout constraints."
  },
  {
    id: 5,
    image: "/work-excel.png",
    title: "Interactive KPI Dashboard",
    category: "Data Analytics",
    description: "A multi-sheet interactive spreadsheet dashboard built using linked data formulas and custom-formatted chart panels."
  },
  {
    id: 6,
    image: "/work-p2p.png",
    title: "P2P File Transfer",
    category: "Network Programming",
    description: "Analyzed worker-node distributed workloads and implemented network socket programming using Java."
  }
];

// ==========================================
// 2. MAIN PAGE COMPONENT
// ==========================================

export default function Works() {
  return (
    <div className="w-full relative overflow-hidden bg-[#FCFAF8] min-h-screen flex flex-col">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-start px-12 pt-4 z-50 pointer-events-auto bg-transparent">
        <a href="/">
          <img src="/logo.png" alt="Zsofia Antolijao Logo" className="w-36 h-auto object-contain cursor-pointer"/>
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
      <section className="relative w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 pb-16 z-10 flex flex-col items-center">
        
        {/* Exhibits Gallery - Museum Wall Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          // flex-row ensures they NEVER stack into a single column!
          className="flex flex-row items-start justify-center w-full gap-4 md:gap-8"
        >
          {exhibitsData.map((exhibit, index) => (
            <div 
              key={exhibit.id}
              // w-1/4 keeps them exactly 25% width each. 
              // mt-16/mt-28 pushes the 2nd and 4th frames down for the zigzag museum look.
              className={`relative flex flex-col items-center w-1/4 ${index % 2 !== 0 ? "mt-16 md:mt-28" : ""}`}
            >
              {/* Title is absolutely positioned right above the 2nd frame */}
              {index === 1 && (
                <h1 className="absolute bottom-full mb-4 md:mb-8 text-6xl sm:text-5xl md:text-[5rem] leading-none font-bold font-[family-name:var(--font-playfair)] text-[#2B3A4A] tracking-tighter w-full text-center">
                  Exhibits.
                </h1>
              )}

              <img 
                src={exhibit.image} 
                alt={exhibit.alt} 
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 cursor-pointer drop-shadow-2xl"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* --- WORKS SECTION --- */}
      <section className="relative w-full max-w-7xl mx-auto px-12 pt-16 pb-24 z-10 flex flex-col items-center">
        
        <h2 className="text-6xl font-bold font-[family-name:var(--font-playfair)] text-[#2A2A2A] tracking-tighter mb-2">
          Work
        </h2>
        <p className="font-[family-name:var(--font-playfair)] text-xl text-slate-700 mb-12 text-center">
          Click on the card to read and see some of the works I&apos;ve made!
        </p>

        {/* Dynamic Works Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 w-full">
          {worksData.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // The 'group' class is the secret to the hover effect!
              className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer group bg-zinc-200"
            >
              {/* Background Image */}
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Translucent Overlay */}
              <div className="absolute inset-0 bg-[#2B3A4A]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center backdrop-blur-sm">
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
            </motion.div>
          ))}
        </div>

      </section>

      {/* --- SOCIAL CONNECTIONS --- */}
      <section className="relative w-full flex flex-col items-center pb-8 z-30 mt-auto">
        <div className="flex flex-col items-center font-[family-name:var(--font-playfair)] text-slate-700">
          <p className="text-xl mb-4 italic tracking-wide">let&apos;s connect!</p>
          <div className="flex gap-6">
            {[
              { id: 1, src: "/icon-github.png", alt: "GitHub", link: "#" },
              { id: 2, src: "/icon-fb.png", alt: "Facebook", link: "#" },
              { id: 3, src: "/icon-linkedin.png", alt: "LinkedIn", link: "#" },
              { id: 4, src: "/icon-insta.png", alt: "Instagram", link: "#" }
            ].map((social, index) => (
              <motion.a 
                key={social.id} href={social.link} className="block"
                animate={{ y: [0, -8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <img src={social.src} alt={social.alt} className="w-[60px] h-[60px] object-contain hover:drop-shadow-md transition-all" />
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