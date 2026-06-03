"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register GSAP's scroll plugin
gsap.registerPlugin(ScrollTrigger);

// 1. define scrapbook elements and their final splashed positions
// animate them from x:0, y:0 (center) out to these coordinates.
const scrapbookItems = [
  { id: 1, src: "/cassette.png", alt: "Cassette", x: 250, y: -150, rotate: 5, width: 120 },
  { id: 2, src: "/planeticket.png", alt: "Boarding Pass", x: -280, y: -20, rotate: -10, width: 200 },
  { id: 3, src: "/coffee.png", alt: "Coffee", x: -160, y: -80, rotate: 15, width: 100 },
  { id: 4, src: "/redheartpatch.png", alt: "Fabric Heart", x: 180, y: -50, rotate: -15, width: 80 },
  { id: 5, src: "/domino.png", alt: "Domino", x: 120, y: 180, rotate: 0, width: 110 },
  { id: 6, src: "/catstamp.png", alt: "Cat Stamp", x: -200, y: 120, rotate: -5, width: 90 },
  //add rest of elements here. adjust x, y, and rotate values to match your layout.
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vinylRef = useRef<HTMLImageElement>(null);

  // 2. GSAP ScrollTrigger for the Vinyl Record
  useGSAP(() => {
    gsap.to(vinylRef.current, {
      rotation: 360,
      ease: "none", // Linear spinning
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // Start spinning when top of page hits top of viewport
        end: "+=1500", // Keep spinning as we scroll down 1500px
        scrub: 1, // Smooth scrubbing effect, tied to scrollbar
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-[200vh] relative overflow-hidden font-serif">
      
      {/* --- HEADER NAVIGATION --- */}
      <header className="w-full flex justify-between items-center px-12 py-8 relative z-50">
        <div className="text-3xl font-bold text-red-900 leading-tight tracking-tighter">
          zsofia<br />antolijao
        </div>
        <nav className="flex gap-12 text-zinc-600 text-lg tracking-wide">
          <a href="#" className="font-bold text-black border-b-2 border-black">home</a>
          <a href="#" className="hover:text-black transition-colors">about</a>
          <a href="#" className="hover:text-black transition-colors">works</a>
          <a href="#" className="hover:text-black transition-colors">shop</a>
          <a href="#" className="hover:text-black transition-colors">contact</a>
        </nav>
      </header>

      {/* --- HERO COLLAGE SECTION --- */}
      <section className="relative w-full h-[80vh] flex items-center justify-center mt-10">
        
        {/* The Central Profile Image */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 w-72 h-72 rounded-full overflow-hidden border-4 border-[#FCFAF8] shadow-2xl"
        >
           {/* Replace this div with your actual Image component later! */}
          <div className="w-full h-full bg-zinc-300 flex items-center justify-center text-sm text-zinc-500">
            [Profile.png]
          </div>
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
              delay: 0.2 + (index * 0.1), // Stagger the splash effect
              type: "spring", // Gives it a nice little bounce when it lands
              stiffness: 100, 
              damping: 15
            }}
            className="absolute z-10"
            style={{ width: item.width }}
          >
             {/* Using a placeholder div. You will swap this for: <img src={item.src} alt={item.alt} className="w-full h-auto drop-shadow-md" /> */}
            <div className="w-full h-24 bg-zinc-400/50 rounded-md border border-zinc-500 flex items-center justify-center text-xs text-center p-2 backdrop-blur-sm">
              {item.alt}
            </div>
          </motion.div>
        ))}

        {/* Circular text overlays (zsofia antolijao) can be absolutely positioned here too */}

      </section>

      {/* --- SPINNING VINYL RECORD --- */}
      <div className="fixed -bottom-48 -left-48 z-40 pointer-events-none">
        {/* Placeholder for Vinyl */}
        <img 
          ref={vinylRef}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Vinyl_record.svg/1024px-Vinyl_record.svg.png" 
          alt="Spinning Vinyl" 
          className="w-[500px] h-[500px] opacity-90 drop-shadow-2xl"
        />
        <div className="absolute top-1/2 left-[120%] -translate-y-1/2 -rotate-45 text-xl font-serif text-zinc-500 tracking-widest whitespace-nowrap">
          scroll down
        </div>
      </div>

    </div>
  );
}