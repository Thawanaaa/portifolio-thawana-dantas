"use client";

import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute -right-36 -top-32 size-[30rem] rounded-full bg-rose-50 blur-3xl" />
      <div className="section-wrap relative grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-24">
        <motion.div
          id="sobre"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            Portfólio · 2026
          </span>
          <h1
            id="hero-title"
            className="mt-6 text-[clamp(3.2rem,9vw,6.6rem)] font-bold leading-[0.94] tracking-[-0.075em] text-zinc-950"
          >
            Thawana
            <br />
            <span className="text-rose-900">Dantas.</span>
          </h1>
          <p className="mt-7 text-xl font-semibold tracking-tight text-zinc-800 sm:text-2xl">
            Desenvolvedora Front-end
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Tenho 28 anos e estou em transição de carreira para a tecnologia,
            trazendo minha experiência em gestão e atendimento. Fui campeã do
            DemoDay do Porto Digital com o projeto Avança Fácil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button-primary" href="#projetos">
              Ver projetos <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <a
            className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-rose-900"
            href="#projetos"
          >
            Conheça meu trabalho <ArrowDown size={15} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-[25rem] items-center justify-center py-4"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-5 inset-y-8 rounded-[45%] bg-gradient-to-br from-rose-100 via-rose-50 to-[#FAFAFA] blur-sm"
          />
          <div className="relative aspect-[4/5] w-[84%] overflow-hidden rounded-[48%_48%_2rem_2rem] border-[6px] border-white bg-rose-50 shadow-card ring-1 ring-rose-100">
            <Image
              src="/thawana-dantas.jpg"
              alt="Thawana Dantas"
              fill
              priority
              sizes="(min-width: 768px) 21rem, 75vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute bottom-8 left-0 rounded-xl border border-rose-100 bg-white/95 px-4 py-3 shadow-card backdrop-blur-sm">
            <span className="block text-xs font-medium text-zinc-500">
              Campeã do DemoDay
            </span>
            <span className="mt-1 block text-sm font-bold text-rose-900">
              Porto Digital · Avança Fácil
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
