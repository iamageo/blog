import Link from "next/link";

export const BackToProjectsButton = () => {
  return (
    <div className="text-center pt-10">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 rounded bg-zinc-50 px-4 py-2 text-sm ring-1 ring-zinc-400 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-500 hover:dark:bg-zinc-800"
      >
        ← Back to Projects
      </Link>
    </div>
  );
};