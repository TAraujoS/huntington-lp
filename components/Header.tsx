"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MenuMobile } from "./MenuMobile";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "QUEM SOMOS", href: "/quem-somos" },
    { label: "INFERTILIDADE", href: "/infertilidade" },
    { label: "PROCEDIMENTOS", href: "/procedimentos" },
    { label: "EQUIPE", href: "/equipe" },
  ];

  return (
    <header className="bg-white border-b h-20 border-gray-200 shadow-sm lg:px-20">
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
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-neutral font-semibold text-sm hover:text-blue-default"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div>
          <Button
            variant="default"
            className="bg-blue-default text-white font-black text-sm hover:bg-blue-dark"
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
