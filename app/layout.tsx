import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Shero Media Studio",
  description:
    "Discover Shero, a Motion Graphic Designer and Visual Effects Specialist crafting professional, visually stunning, and technically precise motion graphics and VFX. My work blends clarity, simplicity, and creativity to deliver captivating multi-style videos that engage audiences and elevate brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
