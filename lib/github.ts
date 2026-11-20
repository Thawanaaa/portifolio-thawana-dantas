import type { Project } from "@/data/portfolio";

type GitHubRepository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
  private: boolean;
};

type GitHubProjectsResult = {
  username: string | null;
  projects: Project[];
  error: string | null;
};

function isGitHubRepository(value: unknown): value is GitHubRepository {
  if (typeof value !== "object" || value === null) return false;
  return (
    "id" in value &&
    typeof value.id === "number" &&
    "name" in value &&
    typeof value.name === "string" &&
    "description" in value &&
    (typeof value.description === "string" || value.description === null) &&
    "html_url" in value &&
    typeof value.html_url === "string" &&
    "homepage" in value &&
    (typeof value.homepage === "string" || value.homepage === null) &&
    "language" in value &&
    (typeof value.language === "string" || value.language === null) &&
    "topics" in value &&
    Array.isArray(value.topics) &&
    value.topics.every((topic) => typeof topic === "string") &&
    "fork" in value &&
    typeof value.fork === "boolean" &&
    "archived" in value &&
    typeof value.archived === "boolean" &&
    "private" in value &&
    typeof value.private === "boolean"
  );
}

function getLiveUrl(homepage: string | null | undefined) {
  if (!homepage) return null;

  try {
    const url = new URL(homepage);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

export async function getGitHubProjects(): Promise<GitHubProjectsResult> {
  const username = process.env.GITHUB_USERNAME?.trim() || null;
  const token = process.env.GITHUB_TOKEN?.trim();

  if (!username) {
    return {
      username: null,
      projects: [],
      error: "Defina GITHUB_USERNAME no arquivo .env.local para carregar seus projetos.",
    };
  }

  if (!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(username)) {
    return {
      username,
      projects: [],
      error: "O valor de GITHUB_USERNAME não parece ser um usuário válido do GitHub.",
    };
  }

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100&type=owner`,
      {
        headers,
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(8000),
      },
    );

    if (!response.ok) {
      console.error(
        `GitHub API retornou ${response.status} ao buscar repositórios de ${username}.`,
      );
      let errorMessage =
        "Não foi possível carregar os projetos do GitHub agora. Tente novamente mais tarde.";

      if (response.status === 404) {
        errorMessage =
          "Não encontramos esse usuário no GitHub. Confira GITHUB_USERNAME no .env.local.";
      } else if (response.status === 403 || response.status === 429) {
        errorMessage =
          "O limite de consultas do GitHub foi atingido. Configure um GITHUB_TOKEN no .env.local para continuar carregando os projetos.";
      } else if (response.status === 401) {
        errorMessage =
          "O GITHUB_TOKEN configurado é inválido. Confira o token no .env.local.";
      }

      return {
        username,
        projects: [],
        error: errorMessage,
      };
    }

    const payload: unknown = await response.json();
    if (!Array.isArray(payload)) {
      throw new Error("A resposta da API do GitHub não está no formato esperado.");
    }

    const repositories = payload.filter(isGitHubRepository);
    const projects = repositories
      .filter(
        (repository) =>
          !repository.fork && !repository.archived && !repository.private,
      )
      .slice(0, 6)
      .map((repository, index): Project => {
        const technologies = [
          repository.language,
          ...(Array.isArray(repository.topics) ? repository.topics : []),
        ]
          .filter((technology): technology is string => Boolean(technology))
          .filter(
            (technology, technologyIndex, list) =>
              list.indexOf(technology) === technologyIndex,
          )
          .slice(0, 4);

        return {
          id: repository.id,
          title: repository.name,
          description:
            repository.description || "Repositório público de Thawana Dantas no GitHub.",
          technologies: technologies.length ? technologies : ["GitHub"],
          category: repository.language || "Projeto open source",
          repository: repository.html_url,
          live: getLiveUrl(repository.homepage),
          accent: (["plum", "blush", "sand"] as const)[index % 3],
        };
      });

    return { username, projects, error: null };
  } catch (error) {
    console.error(`Erro ao buscar repositórios do GitHub para ${username}.`, error);
    return {
      username,
      projects: [],
      error: "O GitHub não respondeu. Verifique sua conexão e tente novamente.",
    };
  }
}
