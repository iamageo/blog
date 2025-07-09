import { Apple } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "Abacato",
    description:
      "A minimalist and elegant weight-tracking app built for iOS. Log your daily progress, visualize trends over time, and stay consistent.",
    url: "https://apps.apple.com/us/app/abacato/id6740468183",
    imageUrl: "/projects/abacato.png",
    githubUrl: "",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-white dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Swift
        </span>
        <span className="rounded-full bg-[#F05138] px-2.5 py-0.5 text-sm text-white dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          SwiftUI
        </span>
        <span className="rounded-full bg-[#4A90E2] px-2.5 py-0.5 text-sm text-white dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Core Data
        </span>
      </div>
    ),
  },
  {
    name: "Termos Médicos",
    description:
      "Master medical vocabulary quickly and intuitively with an offline dictionary of over 1,200 terms, interactive flashcards for memorization, and a favorite system for quick access — all in your pocket.",
    url: "https://apps.apple.com/us/app/termos-m%C3%A9dicos/id6469733188",
    imageUrl: "/projects/termos-medicos.png",
    githubUrl: "",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#02569B] px-2.5 py-0.5 text-sm text-white dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Flutter
        </span>
        <span className="rounded-full bg-[#FFCA28] px-2.5 py-0.5 text-sm text-black dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Dart
        </span>
      </div>
    ),
  },
  {
    name: "Consulta CNPJ 2024",
    description:
      "Find updated company information in seconds: name, CNPJ, status, address and more. Save frequent searches, generate PDF reports and enjoy a clean, user-friendly interface — completely free.",
    url: "https://apps.apple.com/us/app/consulta-cnpj-2025/id6687796780",
    imageUrl: "/projects/consulta-cnpj.png",
    githubUrl: "",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-[#02569B] px-2.5 py-0.5 text-sm text-white dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Flutter
        </span>
        <span className="rounded-full bg-[#FFCA28] px-2.5 py-0.5 text-sm text-black dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Dart
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={620}
        height={324}
        alt="Logo for css2wind website"
      />
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        <a
          href={url}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <Apple strokeWidth={1.4} className="size-5" /> View on AppStore
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </>
  );
}
