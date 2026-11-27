import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/app/lib/metadata";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-white text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
