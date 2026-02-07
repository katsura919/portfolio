import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  verification: {
    google: "MS81FUbndjoCpBqbvqqBN3pVsnN6Lg5fft04",
  },
  title: "Jan Paul | Full Stack Developer",
  description: "Portfolio website showcasing my work as a Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="MS81FUbndjoCpBqbvqqBN3pVsnN6Lg5fft04"
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
