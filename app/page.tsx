"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrapbookItems = [
  { id: 1, src: "/cassette.png", alt: "Cassette tape", x: 200, y: -170, rotate: 5, width: 140 },
  { id: 2, src: "/acecard.png", alt: "Ace playing card", x: -220, y: 40, rotate: -5, width: 100 },
  { id: 3, src: "/catstamp.png", alt: "Cat postage stamp", x: -330, y: 40, rotate: 0, width: 130 },
  { id: 4, src: "/photography.png", alt: "Vintage photograph", x: -190, y: 170, rotate: 0, width: 120 },
  { id: 5, src: "/devilbutton.png", alt: "", x: -120, y: 210, rotate: -5, width: 80 },
  { id: 6, src: "/domino.png", alt: "", x: 0, y: 230, rotate: 5, width: 160 },
  { id: 7, src: "/waxseal.png", alt: "", x: 190, y: 115, rotate: 10, width: 100 },
  { id: 8, src: "/receipt.png", alt: "", x: 140, y: 220, rotate: 0, width: 100 },
  { id: 9, src: "/fujistamp.png", alt: "Fuji postage stamp", x: 250, y: 220, rotate: 0, width: 120 },
  { id: 10, src: "/pinkheartbutton.png", alt: "", x: 280, y: 110, rotate: 0, width: 70 },
  { id: 11, src: "/greentag.png", alt: "", x: 224, y: -26, rotate: 3, width: 150 },
  { id: 12, src: "/bouquet.png", alt: "Flower bouquet", x: 360, y: 60, rotate: 10, width: 200 },
  { id: 13, src: "/breadtag.png", alt: "", x: 400, y: -100, rotate: 0, width: 80 },
  { id: 14, src: "/bluestarpatch.png", alt: "", x: 315, y: -120, rotate: 16, width: 90 },
  { id: 15, src: "/yellowheartpatch.png", alt: "", x: 180, y: -80, rotate: 10, width: 70 },
  { id: 16, src: "/vinyl.png", alt: "Vinyl record", x: 70, y: -230, rotate: 0, width: 125 },
  { id: 17, src: "/flowerbutton.png", alt: "", x: -50, y: -230, rotate: 0, width: 100 },
  { id: 18, src: "/platenumber.png", alt: "License plate", x: -180, y: -200, rotate: 0, width: 170 },
  { id: 19, src: "/coffee.png", alt: "Coffee cup", x: -200, y: -100, rotate: 0, width: 120 },
  { id: 20, src: "/planeticket.png", alt: "Plane ticket", x: -380, y: -100, rotate: 0, width: 250 },
  { id: 21, src: "/pinkbow.png", alt: "", x: -310, y: 170, rotate: -5, width: 140 },
  { id: 22, src: "/redheartpatch.png", alt: "", x: -440, y: 40, rotate: -45, width: 130 },
  { id: 23, src: "/redtile.png", alt: "", x: -320, y: -200, rotate: 0, width: 100 },
  { id: 24, src: "/totoro.png", alt: "Totoro figurine", x: 325, y: -220, rotate: 16, width: 100 },
  { id: 25, src: "/clip.png", alt: "", x: 205, y: -260, rotate: 6, width: 130 },
];

const deckCards = [
  { id: 1, src: "/about-card.png", href: "/about", label: "About", finalX: -400, initX: 400, finalRotate: -12, initRotate: 15 },
  { id: 2, src: "/works-card.png", href: "/works", label: "Works", finalX: -130, initX: 400, finalRotate: -4, initRotate: 8 },
  { id: 3, src: "/contact-card.png", href: "/contact", label: "Contact", finalX: 130, initX: 400, finalRotate: 4, initRotate: -2 },
  { id: 4, src: "/shop-card.png", href: "/shop", label: "Shop", finalX: 400, initX: 400, finalRotate: 12, initRotate: -10 },
];

const socialLinks = [
  { id: 1, src: "/icon-github.png", alt: "GitHub", link: "https://github.com/zsofetch" },
  { id: 2, src: "/icon-fb.png", alt: "Facebook", link: "https://www.facebook.com/share/1Pc8qRrGwc/" },
  { id: 3, src: "/icon-linkedin.png", alt: "LinkedIn", link: "https://www.linkedin.com/in/zsofy" },
  { id: 4, src: "/icon-insta.png", alt: "Instagram", link: "https://www.instagram.com/zsofetch?igsi=MWJiZDZvdHA3a2xmbQ==" },
];

interface CardProps {
  card: (typeof deckCards)[0];
  progress: MotionValue<number>;
  reduceMotion: boolean;
}

function PlayingCard({ card, progress, reduceMotion }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const x = useTransform(progress, [0, 1], [card.initX, card.finalX]);
  const rotate = useTransform(progress, [0, 1], [card.initRotate, card.finalRotate]);

  return (
    <motion.a
      href={card.href}
      aria-label={`Go to ${card.label} page`}
      className="absolute block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700 rounded-xl"
      style={reduceMotion ? { zIndex: card.id, transformOrigin: "bottom center" } : { x, rotate, zIndex: card.id, transformOrigin: "bottom center" }}
      animate={{ y: hovered ? -24 : 0, scale: hovered ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <img
        src={card.src}
        alt={`${card.label} navigation card`}
        className="w-[360px] min-h-[360px] h-auto drop-shadow-2xl cursor-pointer select-none rounded-xl hover:drop-shadow-[0_20px_25px_rgba(0,0,0,0.2)] transition-all"
      />
    </motion.a>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vinylRef = useRef<HTMLImageElement>(null);
  const cardsSectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    if (reduceMotion) return; // §8.4 disable complex scroll choreography
    const ctx = gsap.to(vinylRef.current, {
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500",
        scrub: 1,
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: containerRef, dependencies: [reduceMotion] });

  const { scrollYProgress } = useScroll({
    target: cardsSectionRef,
    offset: ["start 80%", "center center"],
  });

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden bg-[#FCFAF8]">
      <header className="fixed top-0 left-0 w-full flex justify-between items-start px-6 md:px-12 pt-4 z-50 pointer-events-auto bg-transparent">
        <a href="/" aria-label="Home">
          <img src="/logo.png" alt="Zsofia Antolijao Logo" className="w-28 md:w-36 h-auto object-contain cursor-pointer" />
        </a>
        <nav aria-label="Main navigation" className="flex gap-6 md:gap-12 text-slate-500 text-base md:text-xl font-[family-name:var(--font-playfair)] tracking-wide mt-2">
          <a href="/" aria-current="page" className="font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5">home</a>
          <a href="/about" className="hover:text-slate-800 transition-colors pb-0.5">about</a>
          <a href="/works" className="hover:text-slate-800 transition-colors pb-0.5">works</a>
          <a href="/shop" className="hover:text-slate-800 transition-colors pb-0.5">shop</a>
          <a href="/contact" className="hover:text-slate-800 transition-colors pb-0.5">contact</a>
        </nav>
      </header>

      <section className="relative w-full h-screen flex items-center justify-center" aria-label="Hero introduction">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 w-80 h-80 rounded-full overflow-hidden border-[6px] border-[#FCFAF8] shadow-2xl bg-white"
        >
          <img src="/profile.png" alt="Zsofia Antolijao" className="w-full h-full object-cover" />
        </motion.div>

        {scrapbookItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={reduceMotion ? { x: item.x, y: item.y, scale: 1, opacity: 1, rotate: item.rotate } : { x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
            animate={{ x: item.x, y: item.y, scale: 1, opacity: 1, rotate: item.rotate }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1, delay: 0.2 + index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
            className="absolute z-10"
            style={{ width: item.width }}
          >
            <img src={item.src} alt={item.alt} className="w-full h-auto drop-shadow-xl select-none pointer-events-none" />
          </motion.div>
        ))}
      </section>

      <div className="absolute top-[55vh] -left-[200px] z-40 pointer-events-none" aria-hidden="true">
        <div ref={vinylRef} className="relative w-[550px] h-[550px] flex items-center justify-center">
          <img src="/vinyl.png" alt="" className="absolute w-[450px] h-[450px] object-cover rounded-full drop-shadow-2xl" />
          <svg viewBox="0 0 250 250" className="absolute w-full h-full drop-shadow-sm">
            <path id="textCurve" d="M 15,125 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0" fill="transparent" />
            <text className="text-[9px] font-[family-name:var(--font-playfair)] tracking-[0.3em] fill-slate-600 lowercase italic">
              <textPath href="#textCurve" startOffset="25%">scroll down</textPath>
            </text>
          </svg>
        </div>
      </div>

      <section ref={cardsSectionRef} className="relative w-full z-30 flex flex-col items-center pt-24 pb-16 min-h-screen">
        <h2 className="text-4xl md:text-7xl font-bold font-[family-name:var(--font-playfair)] text-red-900 mb-16 z-10 text-center px-4">
          What&apos;s in the cards for us?
        </h2>

        <div className="relative flex items-center justify-center w-full max-w-6xl" style={{ height: 480 }}>
          {deckCards.map((card) => (
            <PlayingCard key={card.id} card={card} progress={scrollYProgress} reduceMotion={!!reduceMotion} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, x: -70, y: 70 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute -bottom-2 left-4 md:left-[calc(50%-540px)] z-40 pointer-events-none"
          >
            <motion.img
              src="/pickacard.png"
              alt="Pick a card, any card!"
              animate={reduceMotion ? {} : { scale: [1, 1.06, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-40 h-auto drop-shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center pb-2 z-30 mt-1" aria-label="Social links">
        <div className="flex flex-col items-center font-[family-name:var(--font-playfair)] text-slate-700">
          <p className="text-sm mb-2 italic tracking-wide">let&apos;s connect!</p>
          <div className="flex gap-6">
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