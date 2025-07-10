import { Apple } from "lucide-react";
import Image from "next/image";
import { projects } from "./data";
import { Project } from "./data";
import Link from "next/link";

function ProjectCard({
  slug,
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
          rel="noopener noreferrer"
          className="sm :hover:bg-zinc-200 flex grow items-center justify-center gap-2 py-4 transition-all sm:dark:hover:bg-zinc-800"
        >
          <Apple className="mr-2 inline size-5" />
          View on App Store
        </a>
        <Link
          href={`/projects/${slug}`}
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          View details
        </Link>
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
