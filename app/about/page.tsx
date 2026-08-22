"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full relative overflow-hidden bg-[#FCFAF8] min-h-screen flex flex-col">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-start px-12 pt-4 z-50 pointer-events-auto bg-transparent">
         <a href="/">
          <img src="/logo.png" alt="Zsofia Antolijao Logo" className="w-36 h-auto object-contain cursor-pointer"/>
        </a>
        <nav className="flex gap-12 text-slate-500 text-xl font-[family-name:var(--font-playfair)] tracking-wide mt-2">
          <a href="/" className="hover:text-slate-800 transition-colors pb-0.5">home</a>
          <a href="/about" className="font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5">about</a>
          <a href="/works" className="hover:text-slate-800 transition-colors pb-0.5">works</a>
          <a href="/shop" className="hover:text-slate-800 transition-colors pb-0.5">shop</a>
          <a href="/contact" className="hover:text-slate-800 transition-colors pb-0.5">contact</a>
        </nav>
      </header>

      {/* --- BIO & PASSPORT SECTION --- */}
      {/* Removed max-w-6xl. Added pl-12 for left alignment, but pr-0 to let the right side bleed to the edge */}
      <section className="relative w-full pl-12 pr-0 pb-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Column: Text */}
        <div className="w-full md:w-1/2 max-w-2xl flex flex-col gap-2 z-10">
          <h1 className="text-6xl md:text-[5.5rem] text-[#2A2A2A] tracking-tighter leading-[1.05]">
            Hey there! I&apos;m
          </h1>
          <h1 className="text-6xl md:text-[5.5rem] font-bold text-[#2A2A2A] tracking-tighter leading-[1.05]">
            Zsofia Antolijao.
          </h1>
          
          
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-slate-700 flex flex-col gap-5 mt-6 leading-relaxed pr-8">
            <p>
              I&apos;m currently learning and honing my skills in Web & Mobile Development, Design, and AI/Machine Learning. I also do writing on the side as a staff writer for Today&apos;s Carolinian, our university publication! I thrive on solving challenging problems and constantly expanding my skill set through side projects. Known for my adaptability, quick learning, persistence, and leadership skills, I enjoy tackling new challenges and finding creative solutions.
            </p>
            <p>
              If you need someone who can get the job done on time, I&apos;m your girl!
            </p>
            <p>
              Whether I&apos;m developing an app, writing articles, or graphic designing, I&apos;m driven by a desire to build, learn, and grow in everything I do. I&apos;m always excited to take on new challenges and make a meaningful impact through innovative solutions.
            </p>
            <p className="italic text-slate-500 mt-2">
              Current project: IoT-Based Automated Health Screening Kiosk for the University Clinic
            </p>
          </div>
        </div>

        {/* Right Column: Passport Graphic */}
        {/* justify-end pushes it completely to the right edge */}
        <div className="w-full md:w-1/2 flex justify-end relative z-10 mt-16 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            // origin-right makes it zoom inward toward the text, rather than off the screen
            className="cursor-pointer origin-right"
            style={{ transform: "rotate(6deg)" }} 
          >
            <img 
              src="/passport.png" 
              alt="Zsofia's Passport Details" 
              // Significantly increased width and added a negative right margin to push it flush to the edge
              className="w-[500px] md:w-[750px] h-auto drop-shadow-2xl rounded-sm -mr-6"
            />
          </motion.div>
        </div>
      </section>

{/* --- TECH STACK SECTION --- */}
      {/* Changed pb-32 to pb-8 to pull the social icons way up */}
      <section className="w-full flex flex-col items-center pb-8 z-10">
        <h2 className="text-6xl font-bold text-[#3B1D1D] tracking-tight mb-2">
          Tech Stack.
        </h2>
        {/* Changed mb-12 to mb-4 to snap the image closer to the text */}
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-slate-500 text-sm mb-4">
          + frameworks, technologies, and languages I&apos;m currently learning...
        </p>
        
        <img 
          src="/tech-stack.png" 
          alt="Logos of HTML, Java, VS Code, JS, C#, Python, PHP, MySQL, React, .NET, Git, Tailwind" 
          className="w-full max-w-[1200px] h-auto object-contain px-3"
        />
      </section>

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