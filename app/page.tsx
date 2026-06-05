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
  { id: 23, src: "/redtile.png", alt: "Red Tile", x: -320, y: -200, rotate: 0, width: 100 },
  { id: 24, src: "/totoro.png", alt: "Totoro", x: 325, y: -220, rotate: 16, width: 100 },
  { id: 25, src: "/clip.png", alt: "Clip", x: 205, y: -260, rotate: 6, width: 130 }
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
    <div ref={containerRef} className="w-full relative overflow-hidden">
      
      {/* --- HEADER NAVIGATION --- */}
      {/* mt-2 */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-12 pt-1 z-50 pointer-events-auto">
        <img src="/logo.png" alt="Zsofia Antolijao Logo" className="w-45 h-auto object-contain"/>
        
        <nav className="flex gap-12 text-slate-500 text-xl font-[family-name:var(--font-playfair)] tracking-wide"> 
          <a href="#" className="font-bold text-slate-900 border-b-2 border-slate-900 pb-1">home</a>
          <a href="#" className="hover:text-slate-800 transition-colors pb-1">about</a>
          <a href="#" className="hover:text-slate-800 transition-colors pb-1">works</a>
          <a href="#" className="hover:text-slate-800 transition-colors pb-1">shop</a>
          <a href="#" className="hover:text-slate-800 transition-colors pb-1">contact</a>
        </nav>
      </header>

      {/* --- HERO COLLAGE SECTION --- */}
      {/* overflow-hidden */}
      <section className="relative w-full h-screen flex items-center justify-center">
      

        {/* profile image sa center */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 w-80 h-80 rounded-full overflow-hidden border-[6px] border-[#FCFAF8] shadow-2xl bg-white"
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
            <img src={item.src} alt={item.alt} className="w-full h-auto drop-shadow-xl select-none pointer-events-none" />
          </motion.div>
        ))}

      </section>

      {/* To make a folder bigger, change the w-[...] class on the <img> tag (I've bumped them up to 550px and 850px to start).
          To move the folder up/down/left/right, change the top-[...] and left-[...]/right-[...] values on the <a> wrapper.
          To align the text, tweak the top-[%] and left-[%] on the <span> */}
      {/* --- 3. INTERACTIVE FOLDERS SECTION --- */}
      <section className="relative w-full flex flex-col items-center justify-start z-30 pb-20">
        
        {/* Increased wrapper height to accommodate bigger folders */}
        <div className="relative w-[600px] h-[700px] flex justify-center mt-4">
          
          {/* ========================================== */}
          {/* FOLDER 1: WORKS (PINK / BACK LEFT)         */}
          {/* TWEAK POSITION HERE: top-[Xpx] left-[X%]   */}
          {/* ========================================== */}
          <a href="/works" className="absolute top-[-30px] left-[0%] z-10 block">
            <motion.div whileHover={{ y: -40 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="relative">
              {/* TWEAK SIZE HERE: w-[550px] */}
              <img src="/folder-works.png" alt="Works Folder" className="w-[1500px] drop-shadow-xl" />
              
              {/* TWEAK TEXT ALIGNMENT HERE: top-[15%] left-[30%] */}
              <span className="absolute top-[23%] left-[70%] font-[family-name:var(--font-playfair)] text-red-900 text-[1.4rem] font-bold tracking-wide pointer-events-none">
                works
              </span>
            </motion.div>
          </a>

          {/* ========================================== */}
          {/* FOLDER 2: CONTACT (YELLOW / BACK RIGHT)    */}
          {/* TWEAK POSITION HERE: top-[Xpx] right-[X%]  */}
          {/* ========================================== */}
          <a href="/contact" className="absolute top-[0px] right-[0%] z-20 block">
            <motion.div whileHover={{ y: -40 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="relative">
              {/* TWEAK SIZE HERE: w-[550px] */}
              <img src="/folder-contact.png" alt="Contact Folder" className="w-[1500px] drop-shadow-xl" />
              
              {/* TWEAK TEXT ALIGNMENT HERE: top-[15%] right-[35%] */}
              <span className="absolute top-[23%] right-[68%] font-[family-name:var(--font-playfair)] text-red-900 text-[1.4rem] font-bold tracking-wide pointer-events-none">
                contact
              </span>
            </motion.div>
          </a>

          {/* ========================================== */}
          {/* FOLDER 3: ABOUT (BLUE / FRONT CENTER)      */}
          {/* TWEAK POSITION HERE: top-[Xpx]             */}
          {/* ========================================== */}
          <a href="/about" className="absolute top-[200px] left-1/2 -translate-x-1/2 z-30 block">
            <motion.div className="relative">
              {/* TWEAK SIZE HERE: w-[850px] */}
              <img src="/folder-about.png" alt="About Folder" className="w-[1500px] drop-shadow-2xl" />
              
              {/* TWEAK TEXT ALIGNMENT HERE: top-[12%] left-[25%] */}
              <span className="absolute top-[80%] left-[25%] font-[family-name:var(--font-playfair)] text-amber-100/80 text-[1.4rem] font-bold tracking-wide pointer-events-none">
                about
              </span>
            </motion.div>
          </a>

          {/* BOUNCING "CLICK A FOLDER" TEXT */}
          <motion.div 
            className="absolute -top-4 -right-20 z-40 w-72 h-48 pointer-events-none"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 250 200" className="w-full h-full drop-shadow-md overflow-visible">
              <path id="clickCurve" d="M 10,150 Q 120,50 240,150" fill="transparent" />
              <text className="text-[1.6rem] font-[family-name:var(--font-caprasimo)] fill-red-900 tracking-widest">
                <textPath href="#clickCurve" startOffset="5%">
                  click a folder!
                </textPath>
              </text>
            </svg>
          </motion.div>
        </div>

        {/* SOCIAL CONNECTIONS */}
        <div className="flex flex-col items-center mt-20 z-30 font-[family-name:var(--font-playfair)] text-slate-700">
          <p className="text-xl mb-4 italic tracking-wide">let's connect!</p>
          <div className="flex gap-4">
            {/* Array mapping for bouncing icons */}
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
                animate={{ y: [0, -8, 0] }} // The bounce!
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.2 // Staggers the bounce so they don't all jump at the exact same time
                }}
                whileHover={{ scale: 1.1 }} // Slight grow on hover
              >
                <img src={social.src} alt={social.alt} className="w-12 h-12 hover:drop-shadow-md transition-all" />
              </motion.a>
            ))}
          </div>
        </div>

      </section>

      {/* --- FOOTER --- */}
      {/* Using absolute bottom-0 so it sticks to the very bottom of the document */}
      <footer className="absolute bottom-0 w-full bg-[#2B3A4A] text-[#FCFAF8] py-4 px-12 flex justify-between items-center text-sm font-[family-name:var(--font-playfair)] z-50">
        <span className="italic">layout inspired by @ciaragan</span>
        <a href="mailto:antolijaozsofia@gmail.com" className="hover:text-zinc-300 transition-colors underline underline-offset-4 decoration-1">
          antolijaozsofia@gmail.com
        </a>
        <span>2026</span>
      </footer>

      {/* --- SPINNING VINYL RECORD --- */}
      <div className="absolute top-[75vh] -left-[200px] z-40 pointer-events-none">

      {/* The ref is ONLY on this wrapper container now! */}
        <div ref={vinylRef} className="relative w-[550px] h-[550px] flex items-center justify-center">

      {/* The image no longer has a ref */}
          <img 
            src="/vinyl.png" 
            alt="Spinning Vinyl" 
            className="w-[450px] h-[450px] object-cover rounded-full drop-shadow-2xl"
          />
        
       {/* The Curved SVG Text */}
          <svg viewBox="0 0 200 200" className="absolute w-full h-full drop-shadow-sm">
            <path 
              id="textCurve" 
              d="M 20,100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" 
              fill="transparent" 
            />
            <text className="text-[20px] font-[family-name:var(--font-playfair)] tracking-[0.10em] fill-slate-600 lowercase italic">
              {/* Changed startOffset to 26% so it appears on the top right edge immediately */}
              <textPath href="#textCurve" startOffset="22%">
                scroll down 
              </textPath>
            </text>
          </svg>

        </div>
      </div>

    </div>
  );
}