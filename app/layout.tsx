import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nidhal Kissoum - AI Engineer & Full-Stack Developer",
  description: "Portfolio of Nidhal Kissoum, AI engineer (RAG, AI agents, PyTorch, EEG/BCI) and full-stack developer (Go, Next.js, Java), based in Algiers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
