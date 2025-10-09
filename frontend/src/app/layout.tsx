import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/navBar/NavBar";
import NavLink from "@/components/layout/navBar/NavLink";

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  preload: true,
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
      <body className={`${roboto.variable} antialiased`}>
        <NavBar>
          <NavLink />
        </NavBar>
        {children}
      </body>
    </html>
  );
}
