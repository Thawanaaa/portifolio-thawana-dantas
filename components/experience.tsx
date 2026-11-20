"use client";

import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  "Gerente administrativa",
  "Vendedora de e-commerce",
  "Estagiária no Comitê de Ética",
];

export function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experience-title"
      className="bg-white py-20 sm:py-28"
    >
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Trajetória profissional</span>
          <h2 id="experience-title" className="section-heading">
            Experiência profissional
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {experiences.map((experience) => (
              <li
                key={experience}
                className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-[#fafafa] p-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-900">
                  <BriefcaseBusiness size={18} aria-hidden="true" />
                </span>
                <span className="font-semibold text-zinc-800">{experience}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
