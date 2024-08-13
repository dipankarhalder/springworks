import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { IChildren } from "@/interface";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Springworks",
  description:
    "Software Engineer 6+ years of experience in Web application development. I also worked in ChatBots and BlockChain.",
};

export default function RootLayout({ children }: Readonly<IChildren>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-slate-50 font-sans antialiased flex",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
