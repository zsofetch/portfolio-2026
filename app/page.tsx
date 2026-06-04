"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register GSAP's scroll plugin
gsap.registerPlugin(ScrollTrigger);

// 1. define scrapbook elements and their final splashed positions
// animate them from x:0, y:0 (center) out to these coordinates.
// x - higher value means more to the right, 
// y - higher value means more down, 
// negative values go left/up.
// positive is clockwise rotation, negative is counterclockwise.
//THIS IS TAKING TEW LOOOOOOOONG
const scrapbookItems = [
  { id: 1, src: "/cassette.png", alt: "Cassette", x: 200, y: -170, rotate: 5, width: 140 },
  { id: 2, src: "/acecard.png", alt: "AceCard", x: -220, y: 40, rotate: -5, width: 100 },
  { id: 3, src: "/catstamp.png", alt: "Cat Stamp", x: -330, y: 40, rotate: 0, width: 130 },
  { id: 4, src: "/photography.png", alt: "Photography", x: -190, y: 170, rotate: 0, width: 120 },
  { id: 5, src: "/devilbutton.png", alt: "Devil Button", x: -120, y: 210, rotate: -5, width: 80 },
  { id: 6, src: "/domino.png", alt: "Domino", x: 0, y: 230, rotate: 5, width: 160 },
  { id: 7, src: "/waxseal.png", alt: "Wax Seal", x: 190, y: 115, rotate: 10, width: 100 },
  { id: 8, src: "/receipt.png", alt: "Receipt", x: 140, y: 220, rotate: 0, width: 100 },
  { id: 9, src: "/fujistamp.png", alt: "Fujistamp", x: 250, y: 220, rotate: 0, width: 120 },
  { id: 10, src: "/pinkheartbutton.png", alt: "Pink Heart Button", x: 280, y: 110, rotate: 0, width: 70 },
  { id: 11, src: "/greentag.png", alt: "Green Tag", x: 224, y: -26, rotate: 3, width: 150 },
  { id: 12, src: "/bouquet.png", alt: "Bouquet", x: 360, y: 60, rotate: 10, width: 200 },
  { id: 13, src: "/breadtag.png", alt: "Bread Tag", x: 400, y: -100, rotate: 0, width: 80 },
  { id: 14, src: "/bluestarpatch.png", alt: "Blue Star Patch", x: 315, y: -120, rotate: 16, width: 90 },
  { id: 15, src: "/yellowheartpatch.png", alt: "Yellow Heart Patch", x: 180, y: -80, rotate: 10, width: 70 },
  { id: 16, src: "/vinyl.png", alt: "Vinyl", x: 70, y: -230, rotate: 0, width: 125 },
  { id: 17, src: "/flowerbutton.png", alt: "Flower Button", x: -50, y: -230, rotate: 0, width: 100 },
  { id: 18, src: "/platenumber.png", alt: "Platenumber", x: -180, y: -200, rotate: 0, width: 170 },
  { id: 19, src: "/coffee.png", alt: "Coffee", x: -200, y: -100, rotate: 0, width: 120 },
  { id: 20, src: "/planeticket.png", alt: "Planeticket", x: -380, y: -100, rotate: 0, width: 250 },
  { id: 21, src: "/pinkbow.png", alt: "Pink Bow", x: -310, y: 170, rotate: -5, width: 140 },
  { id: 22, src: "/redheartpatch.png", alt: "Red Heart Patch", x: -440, y: 40, rotate: -45, width: 130 },
  { id: 23, src: "/redtile.png", alt: "Red Tile", x: -320, y: -200, rotate: 0, width: 100 }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vinylRef = useRef<HTMLImageElement>(null);

  // 2. GSAP ScrollTrigger for the vinyl Record
  useGSAP(() => {
    gsap.to(vinylRef.current, {
      rotation: 360,
      ease: "none", // linear spinning
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", //start spinning when top of page hits top of viewport
        end: "+=1500", // keep spinning as we scroll down 1500px
        scrub: 1, // smooth scrubbing effect, tied to scrollbar
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-[200vh] relative overflow-hidden">
      
      {/* --- HEADER NAVIGATION --- */}
      <header className="w-full flex justify-between items-center px-12 py-8 relative z-50">
        <img src="/logo.png" alt="Zsofia Antolijao Logo" className="w-50 h-auto object-contain"/>
        
        <nav className="flex gap-20 text-slate-500 text-xl font-[family-name:var(--font-playfair)] tracking-wide">
          <a href="#" className="font-bold text-slate-900 border-b-2 border-slate-900">home</a>
          <a href="#" className="hover:text-slate-800 transition-colors">about</a>
          <a href="#" className="hover:text-slate-800 transition-colors">works</a>
          <a href="#" className="hover:text-slate-800 transition-colors">shop</a>
          <a href="#" className="hover:text-slate-800 transition-colors">contact</a>
        </nav>
      </header>

      {/* --- HERO COLLAGE SECTION --- */}
      <section className="relative w-full h-[80vh] flex items-center justify-center mt-10">
        
        {/* profile image sa center */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 w-80 h-80 rounded-full overflow-hidden border-[6px] border-[#FCFAF8] shadow-2xl"
        >
           {/* PLACEHOLDER IMAGE */}
           <img src="/profile.png" alt="Zsofia Antolijao" className="w-full h-full object-cover"/>
        </motion.div>

        {/* The Splashing Scrapbook Elements */}
        {scrapbookItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
            animate={{ 
              x: item.x, 
              y: item.y, 
              scale: 1, 
              opacity: 1, 
              rotate: item.rotate 
            }}
            transition={{ 
              duration: 1, 
              delay: 0.2 + (index * 0.1), // stagger the splash effect
              type: "spring", // nice little bounce when it lands
              stiffness: 100, 
              damping: 10
            }}
            className="absolute z-10"
            style={{ width: item.width }}
          >
             {/* Using a PLACEHOLDER DIV. You will swap this for: <img src={item.src} alt={item.alt} className="w-full h-auto drop-shadow-md" /> */}
            <img src={item.src} alt={item.alt} className="w-full h-auto drop-shadow-xl select-none pointer-events-none" />
          </motion.div>
        ))}

        {/* Circular text overlays (zsofia antolijao) can be absolutely positioned here too */}

      </section>

      {/* --- SPINNING VINYL RECORD --- */}
      <div className="fixed -bottom-48 -left-48 z-40 pointer-events-none">
        {/* PLACEHOLDER VINYL */}
        <img 
          ref={vinylRef}
          src="/vinyl.png" 
          alt="Spinning Vinyl" 
          className="w-[500px] h-[500px] opacity-90 drop-shadow-2xl"
        />
        <div className="absolute top-1/2 left-[120%] -translate-y-1/2 -rotate-45 text-xl font-[family-name:var(--font-playfair)] text-slate-500 tracking-widest whitespace-nowrap italic">
          scroll down
        </div>
      </div>

    </div>
  );
}