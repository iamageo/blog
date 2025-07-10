import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Apple } from "lucide-react";
import { projects } from "../data";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 py-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          src={project.imageUrl}
          alt={project.name}
          width={120}
          height={120}
        />
        <h1 className="text-3xl font-semibold">{project.name}</h1>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-black px-4 py-2 text-white transition hover:bg-zinc-800"
        >
          <Apple className="mr-2 inline size-5" />
          View on App Store
        </a>
      </div>

      {project.slug === "consulta-cnpj" && (
        <div className="prose prose-zinc dark:prose-invert">
          {/* Aqui entra a política de privacidade completa que você já me enviou, com <h3><strong>...</strong></h3> e <ul> */}
          <h2><strong>Política de Privacidade</strong></h2>
          <p>...</p>
        </div>
      )}

      <div className="text-center">
        <Link href="/projects" className="text-sm text-zinc-500 hover:underline">
          ← Back to projects
        </Link>
      </div>
    </div>
  );
}