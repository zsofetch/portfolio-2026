"use client";

import { motion } from "framer-motion";

export default function Shop() {
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
          <a href="/works" className="hover:text-slate-800 transition-colors pb-0.5">works</a>
          {/* Shop is now the active page! */}
          <a href="/shop" className="font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5">shop</a>
          <a href="/contact" className="hover:text-slate-800 transition-colors pb-0.5">contact</a>
        </nav>
      </header>

      {/* --- SHOP LAYOUT --- */}
      {/* Using min-h-screen to ensure it fills the page, centered vertically */}
      <main className="flex-grow w-full max-w-[1700px] mx-auto px-6 md:px-12 pt-32 pb-24 flex items-center justify-center z-10">
        
        {/* The Master 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full h-auto lg:h-[800px]">
          
          {/* 1. LEFT COLLAGE (Spans 5 of 12 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-5 gap-4 h-[600px] lg:h-full"
          >
            {/* Left Inner Column: Tall Image + Wide Image */}
            <div className="col-span-3 flex flex-col gap-4 h-full">
              <img 
                src="/shop-third.png" 
                alt="Tumble Dry Showcase" 
                className="w-full h-[65%] object-cover rounded-[2.5rem] shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-pointer" 
              />
              <img 
                src="/shop-placeholder-2.png" 
                alt="Tumble Dry Details" 
                className="w-full h-[35%] object-cover rounded-[2.5rem] shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-pointer" 
              />
            </div>

            {/* Right Inner Column: 3 Stacked Images (Last one is a circle!) */}
            <div className="col-span-2 flex flex-col gap-4 h-full">
              <img 
                src="/shop-second.png" 
                alt="Tumble Dry Item" 
                className="w-full h-[33.3%] object-cover rounded-[2rem] shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-pointer" 
              />
              <img 
                src="/shop-first.png" 
                alt="Tumble Dry Item" 
                className="w-full h-[33.3%] object-cover rounded-[2rem] shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-pointer" 
              />
              {/* rounded-full makes this a perfect circle assuming the aspect ratio is close to square */}
              <img 
                src="/works-tumbledry.png" 
                alt="Tumble Dry Badge" 
                className="w-full h-[33.3%] object-cover rounded-full shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-pointer" 
              />
            </div>
          </motion.div>

          {/* 2. CENTER TEXT (Spans 3 of 12 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col justify-center text-center lg:text-left px-2 lg:px-4"
          >
            <h1 className="text-6xl lg:text-[5rem] leading-none font-bold font-[family-name:var(--font-playfair)] text-[#4A4A4A] tracking-tighter mb-4 text-center">
              Tumble Dry
            </h1>
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-12 text-center">
              First Launch
            </h2>
            
            <p className="font-[family-name:var(--font-inter)] text-slate-600 leading-relaxed mb-6 text-sm">
              I launched Tumble Dry with a focus on sustainable fashion, specializing in preloved, thrifted, and upcycled clothes. 
            </p>
            <p className="font-[family-name:var(--font-inter)] text-slate-600 leading-relaxed mb-6 text-sm">
              To my surprise, the response has been incredible! It really means a lot to see people connect with these pieces and embrace a more sustainable way to express their personal style.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-slate-600 leading-relaxed mb-12 text-sm">
              Right now, I sell curated drops, upcycled garments, and more directly on my shop.
            </p>
            
          </motion.div>

          {/* 3. RIGHT IMAGE (Spans 4 of 12 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 h-[600px] lg:h-full"
          >
            <img 
              src="/shop-placeholder-6.png" 
              alt="Tumble Dry Packaging" 
              className="w-full h-full object-cover rounded-[2.5rem] shadow-sm hover:scale-[1.02] transition-transform duration-700 cursor-pointer" 
            />
          </motion.div>

        </div>
      </main>
      {/* --- SOCIAL CONNECTIONS --- */}
      {/* Swapped mt-auto for mt-4 to prevent it from forcing itself to the bottom of the screen */}
      <section className="relative w-full flex flex-col items-center pb-8 z-30">
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
      <footer className="relative w-full bg-[#2B3A4A] text-[#FCFAF8] py-4 px-12 flex justify-between items-center text-sm font-[family-name:var(--font-playfair)] z-50 mt-auto">
        <span className="italic">layout inspired by @ciaragan</span>
        <a href="mailto:antolijaozsofia@gmail.com" className="hover:text-zinc-300 transition-colors underline underline-offset-4 decoration-1">
          antolijaozsofia@gmail.com
        </a>
        <span>2026</span>
      </footer>

    </div>
  );
}