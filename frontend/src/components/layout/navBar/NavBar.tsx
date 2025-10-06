"use client";
import { useState } from "react";
import { UserRound, Menu, X } from "lucide-react";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar = ({ children }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-insigh-melanzane-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Insigh</div>

        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden md:flex items-center space-x-4">{children}</div>
      </div>

      {isOpen && <div className="md:hidden mt-4 space-y-2">{children}</div>}
    </nav>
  );
};

export default NavBar;
