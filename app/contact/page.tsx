// wait lng my streak

"use client";

import { motion, useReducedMotion } from "framer-motion";

const socialLinks = [
  { id: 1, src: "/icon-github.png", alt: "GitHub", link: "https://github.com/zsofetch" },
  { id: 2, src: "/icon-fb.png", alt: "Facebook", link: "https://www.facebook.com/share/1Pc8qRrGwc/" },
  { id: 3, src: "/icon-linkedin.png", alt: "LinkedIn", link: "https://www.linkedin.com/in/zsofy" },
  { id: 4, src: "/icon-insta.png", alt: "Instagram", link: "https://www.instagram.com/zsofetch?igsi=MWJiZDZvdHA3a2xmbQ==" },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <img src="/contact-bg.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <header className="fixed top-0 left-0 w-full flex justify-between items-start px-6 md:px-12 pt-4 z-50 pointer-events-auto bg-transparent">
        <a href="/" aria-label="Home">
          <img src="/contact-logo.png" alt="Zsofia Antolijao Logo" className="w-28 md:w-36 h-auto object-contain cursor-pointer drop-shadow-md" />
        </a>
        <nav aria-label="Main navigation" className="flex gap-6 md:gap-12 text-[#FCFAF8] text-base md:text-xl font-[family-name:var(--font-playfair)] tracking-wide mt-2 drop-shadow-md">
          <a href="/" className="hover:text-zinc-300 transition-colors pb-0.5">home</a>
          <a href="/about" className="hover:text-zinc-300 transition-colors pb-0.5">about</a>
          <a href="/works" className="hover:text-zinc-300 transition-colors pb-0.5">works</a>
          <a href="/shop" className="hover:text-zinc-300 transition-colors pb-0.5">shop</a>
          <a href="/contact" aria-current="page" className="font-bold text-slate-200 border-b-2 border-slate-200 pb-0.5">contact</a>
        </nav>
      </header>

      <main className="relative z-10 w-full max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-center pt-24 pb-12 px-6 lg:px-4 gap-10 lg:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -6 }}
          animate={{ opacity: 1, x: 0, rotate: reduceMotion ? 0 : -3 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative z-20 w-full max-w-[600px] lg:max-w-none lg:w-5/12 flex justify-center"
        >
          <img src="/contact-ticket.png" alt="Admit One contact ticket" className="w-full h-auto drop-shadow-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: reduceMotion ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          className="relative z-10 w-full max-w-[800px] lg:max-w-none lg:w-7/12"
        >
          <img src="/contact-postcard.png" alt="Contact postcard" className="w-full h-auto drop-shadow-2xl" />

          <motion.img
            src="/flowerbutton.png"
            alt=""
            animate={reduceMotion ? {} : { scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-17 -right-2 w-16 md:w-24 h-auto drop-shadow-md z-20 pointer-events-none"
          />
          <motion.img
            src="/pinkheartbutton.png"
            alt=""
            animate={reduceMotion ? {} : { scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-[20px] -left-1 w-12 md:w-24 h-auto drop-shadow-md z-20 pointer-events-none"
          />

          <div className="absolute top-[53%] left-[29%] -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-3 md:gap-4 z-30" aria-label="Social links">
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
        </motion.div>
      </main>
    </div>
  );
}