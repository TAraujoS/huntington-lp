"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { MenuMobile } from "./MenuMobile";
import { navItems } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    if (pathname !== "/") {
      window.location.href = `/${href}`;
    } else {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-white border-b h-20 border-gray-200 shadow-sm xl:px-20">
      <div className="w-full flex h-full items-center justify-between py-5 px-4 md:px-8">
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <div className="flex items-center">
          <Image
            src="../assets/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-24 h-9"
          />
        </div>

        <nav className="hidden lg:flex justify-between w-3/5 space-x-8">
          {navItems.map((item) =>
            item.dropdown ? (
              <HoverCard key={item.label}>
                <HoverCardTrigger className="text-gray-neutral font-semibold text-xs hover:text-blue-normal cursor-pointer">
                  {item.label}
                </HoverCardTrigger>
                <HoverCardContent className="bg-white border border-gray-200 shadow-lg rounded-md p-2 w-auto">
                  {item.dropdown.map((subItem, index) => (
                    <Link
                      key={index}
                      onClick={() => handleNavigation(subItem.href)}
                      href={subItem.href}
                      className="text-gray-neutral font-normal text-xs hover:text-blue-normal focus:text-blue-normal focus:bg-white block px-4 py-2 rounded"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </HoverCardContent>
              </HoverCard>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-neutral font-semibold text-xs hover:text-blue-normal"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div>
          <Button
            variant="default"
            className="bg-blue-normal text-white font-black text-xs hover:bg-blue-dark"
          >
            <Link href="/agendar" className="lg:hidden">
              AGENDAR
            </Link>
            <Link href="/agendar" className="hidden lg:inline">
              AGENDAR CONSULTA
            </Link>
          </Button>
        </div>
      </div>

      <MenuMobile isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};
