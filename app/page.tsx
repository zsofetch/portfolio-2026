"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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


//-- card deck 
const deckCards = [
  {
    id: 1,
    src: "/about-card.png",
    href: "/about",
    finalX: -400,
    initX: 400,
    finalRotate: -12,
    initRotate: 15,
  },
  {
    id: 2,
    src: "/works-card.png",
    href: "/works",
    finalX: -130, 
    initX: 400,
    finalRotate: -4,
    initRotate: 8,
  },
  {
    id: 3,
    src: "/contact-card.png",
    href: "/contact",
    finalX: 130, 
    initX: 400,
    finalRotate: 4,
    initRotate: -2,
  },
  {
    id: 4,
    src: "/shop-card.png",
    href: "/shop",
    finalX: 400, 
    initX: 400,
    finalRotate: 12,
    initRotate: -10,
  }
];

//-- playing card 
interface CardProps {
  card: (typeof deckCards)[0];
  // pass the raw MotionValue directly now
  progress: MotionValue<number>;
}

function PlayingCard({ card, progress }: CardProps) {
  const [hovered, setHovered] = useState(false);

  //link X and rotate to the scroll progress natively
  const x = useTransform(progress, [0, 1], [card.initX, card.finalX]);
  const rotate = useTransform(progress, [0, 1], [card.initRotate, card.finalRotate]);

  return (
    <motion.a
      href={card.href}
      className="absolute block"
      style={{
        x, rotate, zIndex: card.id, transformOrigin: "bottom center",
      }}
      animate={{ y: hovered ? -24 : 0, scale: hovered ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={card.src}
        alt={`Navigation Card ${card.id}`}
        className="w-[360px] min-h-[360px] h-auto drop-shadow-2xl cursor-pointer select-none rounded-xl hover:drop-shadow-[0_20px_25px_rgba(0,0,0,0.2)] transition-all"
      />
    </motion.a>
  );
}

//--main page
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vinylRef = useRef<HTMLImageElement>(null);
  const cardsSectionRef = useRef<HTMLDivElement>(null);

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

  // FRAMER: Card Spread Scroll Tracker (Tied to the cards section, not a huge gap)
  const { scrollYProgress } = useScroll({
    target: cardsSectionRef,
    // Starts spreading when section is 80% down the screen, finishes when centered
    offset: ["start 80%", "center center"],
  });

  const titleText = "what's in the cards for us?";

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden bg-[#FCFAF8]">

      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-start px-12 pt-4 z-50 pointer-events-auto bg-transparent">
         <a href="/">
          <img src="/logo.png" alt="Zsofia Antolijao Logo" className="w-36 h-auto object-contain cursor-pointer"/>
        </a>
        <nav className="flex gap-12 text-slate-500 text-xl font-[family-name:var(--font-playfair)] tracking-wide mt-2">
          <a href="/" className="font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5">home</a>
          <a href="/about" className="hover:text-slate-800 transition-colors pb-0.5">about</a>
          <a href="/works" className="hover:text-slate-800 transition-colors pb-0.5">works</a>
          <a href="/shop" className="hover:text-slate-800 transition-colors pb-0.5">shop</a>
          <a href="/contact" className="hover:text-slate-800 transition-colors pb-0.5">contact</a>
        </nav>
      </header>


      {/* --- HERO COLLAGE SECTION --- */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 w-80 h-80 rounded-full overflow-hidden border-[6px] border-[#FCFAF8] shadow-2xl bg-white"
        >
          <img src="/profile.png" alt="Zsofia Antolijao" className="w-full h-full object-cover"/>
        </motion.div>

        {/* The Splashing Scrapbook Elements */}
        {scrapbookItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
            animate={{ x: item.x, y: item.y, scale: 1, opacity: 1, rotate: item.rotate }}
            transition={{ duration: 1, delay: 0.2 + (index * 0.1), type: "spring", stiffness: 100, damping: 15 }}
            className="absolute z-10" style={{ width: item.width }}
          >
            <img src={item.src} alt={item.alt} className="w-full h-auto drop-shadow-xl select-none pointer-events-none" />
          </motion.div>
        ))}
      </section>

      {/*to modify*/}
    
      {/* --- SPINNING VINYL RECORD --- */}
      <div className="absolute top-[55vh] -left-[200px] z-40 pointer-events-none">
        <div ref={vinylRef} className="relative w-[550px] h-[550px] flex items-center justify-center">
          <img src="/vinyl.png" alt="Spinning Vinyl" className="absolute w-[450px] h-[450px] object-cover rounded-full drop-shadow-2xl" />
          <svg viewBox="0 0 250 250" className="absolute w-full h-full drop-shadow-sm">
            <path id="textCurve" d="M 15,125 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0" fill="transparent" />
            <text className="text-[8px] font-[family-name:var(--font-playfair)] tracking-[0.3em] fill-slate-600 uppercase italic">
              <textPath href="#textCurve" startOffset="25%">scroll down</textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* --- SCROLL-TRIGGERED CARD DECK SECTION --- */}
      {/* 220vh gives you the scroll runway to watch them spread slowly */}
      <section ref={cardsSectionRef} className="relative w-full z-30 flex flex-col items-center pt-24 pb-16 min-h-screen">
        
        {/* The Wavy Title */}
        <h2 className="text-6xl font-bold font-[family-name:var(--font-playfair)] text-red-900 mb-16 z-10 flex">
          {titleText.split("").map((char, index) => (
            <motion.span
              key={index}
              // Alternates between bouncing up first vs bouncing down first based on odd/even index
              animate={{ y: index % 2 === 0 ? [-3, 3, -3] : [3, -3, 3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.05 }}
              style={{ display: "inline-block", whiteSpace: "pre" }} // whiteSpace: pre preserves spaces!
            >
              {char}
            </motion.span>
          ))}
        </h2>

        {/* The Cards Wrapper */}
        <div className="relative flex items-center justify-center w-full max-w-6xl" style={{ height: 480 }}>
          
          {deckCards.map((card) => (
            <PlayingCard key={card.id} card={card} progress={scrollYProgress} />
          ))}

          {/* "Pick a card" label - FIXED*/}
          <motion.p
            initial={{ opacity: 0, y: 70 }} 
            whileInView={{ opacity: 1, x:-70, y: 70 }} 
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute -bottom-2 left-4 left-[calc(50%-540px)] z-40 font-[family-name:var(--font-caprasimo)] text-slate-800 text-2xl leading-tight pointer-events-none"
          >
            pick a card,<br />any card!
          </motion.p>
        </div>
      </section>

      {/* social connections icons */}
      {/* Reduced pb-16 to pb-8 to drag the footer up! */}
      <section className="relative w-full flex flex-col items-center pb-2 z-30 mt-2">
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