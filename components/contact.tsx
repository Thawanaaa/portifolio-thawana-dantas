"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  MoveUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const email = "thawanadantastm@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      console.error("Não foi possível copiar o e-mail.", error);
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="bg-[#fafafa] pt-20 sm:pt-28"
    >
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-rose-900 px-6 py-10 text-white sm:px-12 sm:py-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-28 size-80 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-14 size-52 rounded-full border border-white/10"
          />
          <div className="relative max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-rose-100">
              Vamos conversar?
            </span>
            <h2
              id="contact-title"
              className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-5xl"
            >
              Um bom projeto começa com uma boa conversa.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-rose-100">
              Tem uma ideia, uma oportunidade ou só quer trocar experiências?
              Estou a um e-mail ou mensagem de distância.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-rose-900 transition-colors hover:bg-rose-50"
                aria-live="polite"
              >
                {copied ? (
                  <>
                    <Check size={17} aria-hidden="true" />
                    E-mail copiado
                  </>
                ) : (
                  <>
                    <Copy size={16} aria-hidden="true" />
                    {email}
                  </>
                )}
              </button>
              <a
                href="https://wa.me/5581998129180"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/60 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle size={17} aria-hidden="true" />
                WhatsApp: (81) 99812-9180
              </a>
            </div>
          </div>
        </motion.div>

        <footer className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Thawana Dantas. Feito com cuidado.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-rose-200 hover:text-rose-900"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-rose-200 hover:text-rose-900"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${email}`}
              aria-label="Enviar e-mail"
              className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-rose-200 hover:text-rose-900"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/5581998129180"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-rose-200 hover:text-rose-900"
            >
              <MessageCircle size={18} aria-hidden="true" />
            </a>
            <a
              href="#inicio"
              className="ml-2 inline-flex items-center gap-1 text-sm font-semibold text-zinc-600 transition-colors hover:text-rose-900"
            >
              Voltar ao topo <MoveUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
