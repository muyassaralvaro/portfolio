import Link from "next/link";
import Reveal from "./reveal-animation";

const contactLinks = [
  { label: "Gmail", href: "mailto:muyassaralvaro@gmail.com", icon: "fa-envelope" },
  {
    label: "Github",
    href: "https://github.com/muyassaralvaro",
    icon: "fa-brands fa-github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alvaromuyassar",
    icon: "fa-brands fa-linkedin",
    external: true,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-base-100 px-4 pb-6 pt-10 text-base-content sm:px-6 sm:pb-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <section className="relative overflow-hidden rounded-2xl bg-[#0b0f19] px-6 py-10 text-white sm:px-10 sm:py-12 md:px-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-md">
                <span className="mb-2 block h-0.5 w-10 bg-blue-500" />
                <h2 className="text-3xl font-[950] uppercase tracking-tight sm:text-4xl md:text-5xl">
                  LET&apos;S BUILD<br />SOMETHING.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <p className="max-w-md text-xs sm:text-sm text-white/70">
                  I&apos;m always open to discussing new opportunities, interesting projects, or just having a tech chat.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2 text-xs font-semibold text-white/90 backdrop-blur-xs transition hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
                    >
                      <i aria-hidden="true" className={link.icon.includes("fa-brands") ? link.icon : `fa-solid ${link.icon}`} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <p
              aria-hidden="true"
              className="hand-note absolute bottom-4 right-6 hidden rotate-[-8deg] text-base text-white/60 lg:block"
            >
              Good people.<br />
              Build great things. ↙
            </p>
          </section>
        </Reveal>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-base-content/10 pt-6 text-xs text-base-content/60 sm:flex-row">
          <Link href="/" className="font-extrabold tracking-wider text-base-content">
            A.M
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden h-px w-8 bg-base-content/30 sm:inline-block" />
            <span className="text-[11px] uppercase tracking-widest">
              TURNING IDEAS INTO IMPACTFUL SOLUTIONS.
            </span>
          </div>
          <p>© {currentYear} A.M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
