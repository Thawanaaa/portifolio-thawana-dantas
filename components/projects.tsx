"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";

const coverStyles = {
  plum: "from-[#f9e9ee] via-[#f2d5df] to-[#e6b9c9]",
  blush: "from-[#fff0f2] via-[#f7dce2] to-[#efd0d7]",
  sand: "from-[#f6ede9] via-[#f0dfda] to-[#e5c7bf]",
};

type ProjectsProps = {
  username: string | null;
  projects: Project[];
  error: string | null;
};

export function Projects({ username, projects, error }: ProjectsProps) {
  return (
    <section
      id="projetos"
      aria-labelledby="projects-title"
      className="bg-[#fafafa] py-20 sm:py-28"
    >
      <div className="section-wrap">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">Repositórios do GitHub</span>
            <h2 id="projects-title" className="section-heading">
              Projetos reais, direto do{" "}
              <span className="text-rose-900">meu GitHub.</span>
            </h2>
          </div>
          <p className="section-copy m-0 max-w-sm">
            Repositórios públicos atualizados automaticamente a partir do
            GitHub.
          </p>
        </div>

        {error && (
          <div
            role="status"
            className="mt-8 rounded-xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm leading-6 text-rose-900"
          >
            {error}
          </div>
        )}

        {projects.length === 0 && !error && (
          <p className="mt-8 rounded-xl border border-zinc-200 bg-white px-5 py-8 text-center text-sm text-zinc-600">
            Ainda não há repositórios públicos para exibir.
          </p>
        )}

        {projects.length > 0 && (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.42, delay: index * 0.08 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              >
                <div
                  className={`relative mx-3 mt-3 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${coverStyles[project.accent]}`}
                  aria-hidden="true"
                >
                  <div className="absolute left-5 top-5 text-xs font-bold tracking-[0.18em] text-rose-900/65">
                    THAWANA DANTAS · {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="w-[72%] rounded-xl border border-white/90 bg-white/80 p-4 shadow-[0_20px_40px_-24px_rgba(24,24,27,0.35)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.03]">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="h-2 w-14 rounded-full bg-rose-900/80" />
                      <span className="flex gap-1">
                        <i className="size-1.5 rounded-full bg-rose-300" />
                        <i className="size-1.5 rounded-full bg-rose-500" />
                        <i className="size-1.5 rounded-full bg-rose-900" />
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2.5 w-3/4 rounded-full bg-zinc-300" />
                      <div className="h-2 w-full rounded-full bg-zinc-200" />
                      <div className="h-2 w-4/5 rounded-full bg-zinc-200" />
                    </div>
                    <div className="mt-4 flex gap-2">
                      <span className="h-7 flex-1 rounded-md bg-rose-900" />
                      <span className="h-7 w-10 rounded-md bg-rose-100" />
                    </div>
                  </div>
                  <span className="absolute bottom-4 right-4 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[0.65rem] font-semibold text-rose-900 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="break-all text-xl font-bold tracking-tight text-zinc-900">
                      {project.title}
                    </h3>
                    <span className="shrink-0 pt-1 text-xs font-semibold tracking-widest text-zinc-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
                    {project.description}
                  </p>
                  <ul
                    aria-label={`Tecnologias: ${project.technologies.join(", ")}`}
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-900"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-5 border-t border-zinc-100 pt-4">
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-700 transition-colors hover:text-rose-900"
                      aria-label={`Ver código de ${project.title} no GitHub`}
                    >
                      <Github size={16} aria-hidden="true" /> Código
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-900 transition-colors hover:text-rose-700"
                        aria-label={`Abrir demonstração de ${project.title}`}
                      >
                        Ver projeto <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-xs font-medium text-zinc-500">
                        Sem demo publicada
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {username && (
          <div className="mt-8 text-center">
            <a
              href={`https://github.com/${encodeURIComponent(username)}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rose-900 transition-colors hover:text-rose-700"
            >
              Ver todos os repositórios no GitHub
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
