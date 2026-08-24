"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="w-full relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      
      {/* --- BACKGROUND ASSET --- */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/contact-bg.png" 
          alt="Floral Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-start px-12 pt-4 z-50 pointer-events-auto bg-transparent">
        <a href="/">
          <img src="/contact-logo.png" alt="Zsofia Antolijao Logo" className="w-36 h-auto object-contain cursor-pointer drop-shadow-md" />
        </a>
        <nav className="flex gap-12 text-[#FCFAF8] text-xl font-[family-name:var(--font-playfair)] tracking-wide mt-2 drop-shadow-md">
          <a href="/" className="hover:text-zinc-300 transition-colors pb-0.5">home</a>
          <a href="/about" className="hover:text-zinc-300 transition-colors pb-0.5">about</a>
          <a href="/works" className="hover:text-zinc-300 transition-colors pb-0.5">works</a>
          <a href="/shop" className="hover:text-zinc-300 transition-colors pb-0.5">shop</a>
          <a href="/contact" className="font-bold text-slate-400 border-b-2 border-slate-400 pb-0.5">contact</a>
        </nav>
      </header>

      {/* --- MAIN CONTENT (SIDE-BY-SIDE SCRAPBOOK) --- */}
      {/* Changed to flex-col for mobile, lg:flex-row for side-by-side on desktop */}
      <main className="relative z-10 w-full max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-center pt-21 pb-12 px-6 lg:px-4 gap-10 lg:gap-6">
        
        {/* 1. The Ticket Asset (Left Side) */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -6 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          // Restricted width on desktop so it balances nicely with the postcard
          className="relative z-20 w-full max-w-[600px] lg:max-w-none lg:w-5/12 flex justify-center"
        >
          <img 
            src="/contact-ticket.png" 
            alt="Admit One Contact Ticket" 
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* 2. The Postcard Asset & Social Icons (Right Side) */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          // Takes up slightly more space than the ticket on desktop
          className="relative z-10 w-full max-w-[800px] lg:max-w-none lg:w-7/12"
        >
          <img 
            src="/contact-postcard.png" 
            alt="Contact Postcard" 
            className="w-full h-auto drop-shadow-2xl"
          />

          {/* Decorative Stickers - With continuous breathing animations */}
          <motion.img 
            src="/flowerbutton.png" 
            alt="gingham flower button" 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-17 -right-2 w-16 md:w-24 h-auto drop-shadow-md z-20 pointer-events-none" 
          />
          <motion.img 
            src="/pinkheartbutton.png" 
            alt="Pink Heart Button" 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-[20px] -left-1 w-12 md:w-24 h-auto drop-shadow-md z-20 pointer-events-none" 
          />

          {/* Social Icons */}
          <div className="absolute top-[53%] left-[29%] -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-3 md:gap-4 z-30">
            {[
              { id: 1, src: "/icon-github.png", alt: "GitHub", link: "#" },
              { id: 2, src: "/icon-fb.png", alt: "Facebook", link: "#" },
              { id: 3, src: "/icon-linkedin.png", alt: "LinkedIn", link: "#" },
              { id: 4, src: "/icon-insta.png", alt: "Instagram", link: "#" }
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
        </motion.div>

      </main>

    </div>
  );
}