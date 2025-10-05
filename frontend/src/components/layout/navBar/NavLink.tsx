import { UserRound } from "lucide-react";
import Link from "next/link";

const NavLink = () => {
  const links = [
    { href: "/", title: "Home", type: "text" },
    { href: "/library/button", title: "Button", type: "text" },
    { href: "/library/card", title: "Card", type: "text" },
    { href: "/library/input", title: "Input", type: "text" },
    { href: "/library/modal", title: "Modal", type: "text" },
    {
      href: "/auth",
      title: "Profile",
      type: "icon",
      icon: "user-round",
    },
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
            : link.icon === "user-round" && <UserRound size={20} />}
        </Link>
      ))}
    </>
  );
};

export default NavLink;
