"use client";

import { motion } from "framer-motion";

// The array of your specific clothing/testimonial images
const stackImages = [
  "/shop-turtleneck.jpg",
  "/shop-sagecami.jpg",
  "/shop-redleather.jpg",
  "/shop-eyelet.jpg",
  "/shop-denimskirt.jpg",
  "/shop-lavender.jpg",
  "/shop-f21.jpg",
]; 

// The physics for the messy stack and the hover fan-out
const stackVariants = {
  // The messy pile when the mouse is NOT hovering
  idle: (i: number) => ({
    x: i * 3, 
    y: i * -2,
    rotate: (i - 3) * 3, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  }),
  // The fan-out spread when the mouse IS hovering
  hover: (i: number) => {
    // Reduced the spread from 70 to 50 so it fits in the shorter screen height!
    const yOffset = (i - 3) * 50; 
    const xOffset = i % 2 === 0 ? -40 : 40; 
    const rotation = i % 2 === 0 ? -8 : 8;

    return {
      x: xOffset,
      y: yOffset,
      rotate: rotation,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    };
  }
};

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
          <a href="/shop" className="font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5">shop</a>
          <a href="/contact" className="hover:text-slate-800 transition-colors pb-0.5">contact</a>
        </nav>
      </header>

      {/* --- SHOP LAYOUT --- */}
      {/* Reduced padding to bring the grid up slightly higher on the screen */}
      <main className="flex-grow w-full max-w-[1700px] mx-auto px-6 md:px-10 pt-10 pb-30 flex items-center justify-center z-10">
        
        {/* The Master 12-Column Grid */}
        {/* Reduced max-height to 550px so it comfortably fits a 1080p laptop screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full h-auto lg:h-[600px]">
          
          {/* 1. LEFT COLLAGE (Spans 5 of 12 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-5 gap-4 h-[500px] lg:h-full"
          >
            {/* Left Inner Column: 1 Single Tall Image */}
            <div className="col-span-3 h-full">
              <img 
                src="/shop-third.png" 
                alt="The Third Collection" 
                className="w-full h-full object-cover rounded-[2.5rem] shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-pointer" 
              />
            </div>

            {/* Right Inner Column: 2 Stacked Images perfectly split */}
            <div className="col-span-2 flex flex-col gap-4 h-full">
              <img 
                src="/shop-second.png" 
                alt="The Second Collection" 
                // The secret sauce: dynamically subtract half the gap (0.5rem) from the 50% height!
                className="w-full h-[calc(50%-0.5rem)] object-cover rounded-[2rem] shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-pointer" 
              />
              <img 
                src="/shop-first.png" 
                alt="The First Collection" 
                className="w-full h-[calc(50%-0.5rem)] object-cover rounded-[2rem] shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-pointer" 
              />
            </div>
          </motion.div>

          {/* 2. CENTER TEXT (Spans 3 of 12 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // Forced strict centering on the entire column
            className="lg:col-span-3 flex flex-col justify-center items-center px-2"
          >
            {/* The Logo - Increased size significantly and forced center alignment */}
            <div className="w-full flex justify-center mb-1">
              <img 
                src="/shop-tbtransparent.png" 
                alt="Tumble Dry Logo" 
                className="w-72 lg:w-[26rem] h-auto object-contain drop-shadow-sm" 
              />
            </div>

            {/* Subtitle - Snug directly under the logo */}
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-[20px] md:text-s font-bold uppercase tracking-[0.3em] text-slate-800 mb-2 text-center">
              First Launch
            </h2>
            
            {/* The Compact Text Wrapper: Restricts the width and left-aligns the text block itself */}
            <div className="w-full max-w-[280px] lg:max-w-[400px] flex flex-col gap-8 text-left">
              <p className="font-[family-name:var(--font-inter)] text-slate-600 leading-relaxed text-[15px]">
                I launched Tumble Dry with a focus on sustainable fashion, specializing in preloved, thrifted, and upcycled clothes. 
              </p>
              <p className="font-[family-name:var(--font-inter)] text-slate-600 leading-relaxed text-[15px]">
                To my surprise, the response has been incredible! It really means a lot to see people connect with these pieces and embrace a more sustainable way to express their personal style.
              </p>
              <p className="font-[family-name:var(--font-inter)] text-slate-600 leading-relaxed text-[15px]">
                Right now, I sell curated drops, upcycled garments, and more directly on my shop.
              </p>
            </div>
          </motion.div>

          {/* 3. RIGHT IMAGE - THE INTERACTIVE STACK (Spans 4 of 12 columns) */}
          <motion.div 
            initial="idle"
            animate="idle"
            whileHover="hover"
            className="lg:col-span-4 relative flex items-center justify-center h-[500px] lg:h-full cursor-pointer w-full"
          >
            {stackImages.map((src, i) => (
              <motion.img 
                key={i}
                custom={i}
                variants={stackVariants}
                src={src}
                alt={`Tumble Dry Look ${i + 1}`}
                whileHover={{ scale: 1.15, zIndex: 50, transition: { duration: 0.2 } }}
                // Slightly scaled down the width of the cards to fit the new shorter height
                className="absolute w-40 md:w-48 h-auto aspect-[3/4] object-cover rounded-xl shadow-2xl border-4 border-[#FCFAF8]"
                style={{ zIndex: i }}
              />
            ))}
            
            <motion.div 
              variants={{
                idle: { opacity: 1, y: 0 },
                hover: { opacity: 0, y: 20 }
              }}
              className="absolute bottom-8 lg:bottom-12 bg-[#2B3A4A]/80 text-[#FCFAF8] px-5 py-2.5 rounded-full font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-wider uppercase backdrop-blur-sm z-40 pointer-events-none"
            >
              Hover to view testimonials
            </motion.div>
          </motion.div>

        </div>
      </main>

      {/* --- SOCIAL CONNECTIONS --- */}
      <section className="relative w-full flex flex-col items-center pb-8 z-30">
        <div className="flex flex-col items-center font-[family-name:var(--font-playfair)] text-slate-700">
          <p className="text-xl mb-4 italic tracking-wide">let&apos;s connect!</p>
          <div className="relative flex gap-6">
            
            <img 
              src="/likewhatyousee.png" 
              alt="Like what you see?" 
              className="absolute -left-28 md:-left-50 -top-10 md:-top-16 w-32 md:w-48 h-auto pointer-events-none" 
            />

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
                <img src={social.src} alt={social.alt} className="w-[60px] h-[60px] object-contain hover:drop-shadow-md transition-all relative z-10" />
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