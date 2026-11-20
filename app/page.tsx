import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { Experience } from "@/components/experience";
import { getGitHubProjects } from "@/lib/github";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { username, projects, error } = await getGitHubProjects();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Projects username={username} projects={projects} error={error} />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
