export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  repository: string;
  live: string | null;
  accent: "plum" | "blush" | "sand";
};

export const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces acessíveis e consistentes",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Produtividade & Dados",
    description: "Ferramentas para colaboração, planilhas e análise",
    skills: [
      "Google Drive",
      "Google Docs",
      "Google Sheets",
      "Google Forms",
      "Microsoft Excel",
      "Power BI",
    ],
  },
  {
    title: "Ferramentas",
    description: "Fluxos de trabalho bem cuidados",
    skills: ["Git & GitHub", "Figma", "Tailwind CSS", "Vercel"],
  },
];
