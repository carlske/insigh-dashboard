"use client";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const links = [
  { href: "/", title: "Home", type: "icon", icon: "home" },
  { href: "/library/button", title: "Button", type: "text" },
  { href: "/library/card", title: "Card", type: "text" },
  { href: "/library/input", title: "Input", type: "text" },
  { href: "/library/modal", title: "Modal", type: "text" },
  { href: "/export", title: "Export", type: "text" },
];

const NavLink = () => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-white px-3 hover:text-gray-300 inline-flex items-center transition-colors"
          prefetch={true}
        >
          {link.type === "icon" ? <HomeIcon size={20} /> : link.title}
        </Link>
      ))}
    </>
  );
};

export default memo(NavLink);
