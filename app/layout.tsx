import type { Metadata } from "next";
import { Caprasimo, Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 1. initializing fonts
// caprasimo requires a specific weight since it's not a variable-weight font
const caprasimo = Caprasimo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caprasimo",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

// 2. update your website's metadata (Browser Tab Title & Description)
export const metadata: Metadata = {
  title: "Zsofia Antolijao | Portfolio",
  description: "Portfolio of Zsofia Antolijao - Software Developer and Writer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // 3. inject all the font variables into the HTML so Tailwind can read them
      className={`${caprasimo.variable} ${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      {/* 4. off-white paper background color here! */}
      <body className="min-h-full flex flex-col bg-[#FCFAF8] text-zinc-900 font-sans">
        {children}
      </body>
    </html>
  );
}
