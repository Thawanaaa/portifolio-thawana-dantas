"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Ferramentas", href: "#ferramentas" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
      <nav
        aria-label="Navegação principal"
        className="section-wrap flex min-h-[4.5rem] items-center justify-between"
      >
        <a
          href="#inicio"
          className="text-sm font-bold tracking-tight text-zinc-950 sm:text-base"
          onClick={() => setIsOpen(false)}
        >
          Thawana Dantas<span className="text-rose-900">.</span>
        </a>

        <div className="hidden items-center gap-4 lg:gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-rose-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-800 md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full border-b border-zinc-200 bg-white px-5 pb-4 shadow-card md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-b border-zinc-100 py-3 text-sm font-medium text-zinc-700 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
