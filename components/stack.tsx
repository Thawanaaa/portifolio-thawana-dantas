"use client";

import {
  Braces,
  BarChart3,
  Code2,
  Compass,
  FileSpreadsheet,
  FileText,
  Figma,
  FolderOpen,
  ListChecks,
  PanelsTopLeft,
  Presentation,
  Table2,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";

const skillIcons = [
  [Code2, PanelsTopLeft, Braces, Braces, PanelsTopLeft, PanelsTopLeft],
  [FolderOpen, FileText, FileSpreadsheet, ListChecks, Table2, BarChart3],
  [Wrench, Figma, Code2, Compass],
];

export function Stack() {
  return (
    <section
      id="ferramentas"
      aria-label="Ferramentas"
      className="bg-white py-20 sm:py-28"
    >
      <div className="section-wrap">
        <span className="eyebrow">Ferramentas do dia a dia</span>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
              className="rounded-2xl border border-zinc-200 bg-[#fafafa] p-5 sm:p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-rose-50 text-rose-900">
                {groupIndex === 0 ? (
                  <Code2 size={20} aria-hidden="true" />
                ) : groupIndex === 1 ? (
                  <Presentation size={20} aria-hidden="true" />
                ) : (
                  <Wrench size={20} aria-hidden="true" />
                )}
              </div>
              <h3 className="mt-5 text-lg font-bold text-zinc-900">
                {group.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600">{group.description}</p>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill, skillIndex) => {
                  const Icon = skillIcons[groupIndex][skillIndex];
                  return (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm font-medium text-zinc-700"
                    >
                      <Icon
                        size={16}
                        className="shrink-0 text-rose-700"
                        aria-hidden="true"
                      />
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
