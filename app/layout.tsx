import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nidhal Kissoum - Full-Stack Engineer",
  description: "Portfolio of Nidhal Kissoum, full-stack engineer (Go, Next.js, Java) and AI engineering, based in Algiers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
