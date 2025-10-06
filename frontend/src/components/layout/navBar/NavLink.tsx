import { HomeIcon } from "lucide-react";
import Link from "next/link";

const NavLink = () => {
  const links = [
    { href: "/", title: "Home", type: "icon", icon: "home" },
    { href: "/library/button", title: "Button", type: "text", icon: "button" },
    { href: "/library/card", title: "Card", type: "text", icon: "card" },
    { href: "/library/input", title: "Input", type: "text", icon: "input" },
    { href: "/library/modal", title: "Modal", type: "text", icon: "modal" },
    { href: "/export", title: "Export", type: "text", icon: "export" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-white px-3 hover:text-gray-300 inline-flex items-center"
        >
          {link.type === "text"
            ? link.title
            : link.icon === "home" && <HomeIcon size={20} />}
        </Link>
      ))}
    </>
  );
};

export default NavLink;
