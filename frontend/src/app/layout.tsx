import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/navBar/NavBar";
import NavLink from "@/components/layout/navBar/NavLink";
import ConditionalNavBar from "@/components/layout/navBar/ConditionalNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  weight: ["400", "700"],
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Insigh Design System",
  description:
    "A modern design system for building beautiful and functional user interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${robotoCondensed.variable} antialiased`}
      >
        <NavBar>
          <NavLink />
        </NavBar>
        {children}
      </body>
    </html>
  );
}
