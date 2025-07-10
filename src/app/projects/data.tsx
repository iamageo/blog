import { ReactNode } from "react";

export interface Project {
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url: string;
  technologies: ReactNode;
}

export const projects: Project[] = [
  {
    slug: "abacato",
    name: "Abacato",
    description:
      "A minimalist and elegant weight-tracking app built for iOS. Log your daily progress, visualize trends over time, and stay consistent.",
    url: "https://apps.apple.com/us/app/abacato/id6740468183",
    imageUrl: "/projects/abacato.png",
    githubUrl: "",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-white dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">Swift</span>
        <span className="rounded-full bg-[#F05138] px-2.5 py-0.5 text-sm text-white dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">SwiftUI</span>
        <span className="rounded-full bg-[#4A90E2] px-2.5 py-0.5 text-sm text-white dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">Core Data</span>
      </div>
    ),
  },
  {
    slug: "termos-medicos",
    name: "Termos Médicos",
    description:
      "Master medical vocabulary quickly and intuitively with an offline dictionary of over 1,200 terms, interactive flashcards for memorization, and a favorite system for quick access — all in your pocket.",
    url: "https://apps.apple.com/us/app/termos-m%C3%A9dicos/id6469733188",
    imageUrl: "/projects/termos-medicos.png",
    githubUrl: "",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#02569B] px-2.5 py-0.5 text-sm text-white dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">Flutter</span>
        <span className="rounded-full bg-[#FFCA28] px-2.5 py-0.5 text-sm text-black dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">Dart</span>
      </div>
    ),
  },
  {
    slug: "consulta-cnpj",
    name: "Consulta CNPJ 2024",
    description:
      "Find updated company information in seconds: name, CNPJ, status, address and more. Save frequent searches, generate PDF reports and enjoy a clean, user-friendly interface — completely free.",
    url: "https://apps.apple.com/us/app/consulta-cnpj-2025/id6687796780",
    imageUrl: "/projects/consulta-cnpj.png",
    githubUrl: "",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#02569B] px-2.5 py-0.5 text-sm text-white dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">Flutter</span>
        <span className="rounded-full bg-[#FFCA28] px-2.5 py-0.5 text-sm text-black dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">Dart</span>
      </div>
    ),
  },
];