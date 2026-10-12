import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProjectShowcase from "../components/project-showcase";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected enterprise applications and workflow tools by Alvaro Muyassar.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-base-200 px-5 pb-20 pt-24 text-base-content sm:px-8 sm:pt-28">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-lg border border-base-content/15 bg-base-100 px-3.5 py-1.5 text-sm font-semibold shadow-xs transition hover:border-blue-500 hover:text-blue-500"
          >
            <span aria-hidden="true">←</span> Back to homepage
          </Link>
          <header className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
              Selected work
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-none sm:text-6xl">
              Projects
            </h1>
            <p className="mt-5 max-w-xl leading-7 text-base-content/75">
              Enterprise workflows, software compliance, and a personal nutrition tracker.
            </p>
          </header>

          <ProjectShowcase projects={projects} />
        </div>
      </main>
      <Footer />
    </>
  );
}
