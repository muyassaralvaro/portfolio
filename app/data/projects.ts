export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  period: string;
  summary: string;
  overview: string;
  role: string;
  stack: string[];
  highlights: string[];
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "work-permit-management-system",
    title: "Work Permit Management System",
    category: "Enterprise application",
    period: "Feb–Jun 2026",
    summary: "Digitized contractor work permits with JSA, staged approvals, and audit-ready PDFs.",
    overview: "A Laravel permit-to-work system for contractor requests, Job Safety Analysis, safety checks, staged reviews, and document output.",
    role: "Full-stack development",
    stack: ["Laravel 12", "Blade", "Bootstrap", "MySQL", "FPDI", "3rd Party API"],
    highlights: [
      "Built a staged approval flow for contractor work permits and JSA reviews.",
      "Connected permit data with external company systems and notifications.",
      "Generated signed, audit-ready PDF documents from permit records.",
    ],
    images: [
      { src: "/img/projects/workpermit/dashboard.webp", alt: "Work Permit dashboard with sanitized status cards and charts", width: 1440, height: 900 },
      { src: "/img/projects/workpermit/permits.webp", alt: "Sanitized Work Permit request list and filters", width: 1440, height: 900 },
      { src: "/img/projects/workpermit/jsa-detail.webp", alt: "Permit detail showing Job Safety Analysis and approval stages", width: 1440, height: 900 },
    ],
  },
  {
    slug: "ehs-academy",
    title: "EHS Academy LMS",
    category: "Learning management system",
    period: "Jul–Aug 2026",
    summary: "Centralized EHS courses, quizzes, Kiken Yochi exercises, and completion certificates.",
    overview: "An EHS learning platform that organizes courses and modules, checks understanding through quizzes and hazard-identification exercises, and tracks completion.",
    role: "Full-stack development",
    stack: ["Laravel 12", "Blade", "Bootstrap", "MySQL", "Laravel Excel", "3rd Party API"],
    highlights: [
      "Organized training into courses, modules, and learning materials.",
      "Added pre-tests, post-tests, and Kiken Yochi exercises.",
      "Tracked completion and generated training certificates and reports.",
    ],
    images: [
      { src: "/img/projects/ehs-academy/dashboard.webp", alt: "EHS Academy compliance and training analytics dashboard", width: 1440, height: 900 },
      { src: "/img/projects/ehs-academy/courses.webp", alt: "EHS Academy course list with learning progress", width: 1440, height: 900 },
      { src: "/img/projects/ehs-academy/course-settings.webp", alt: "EHS Academy course settings and module management", width: 1440, height: 900 },
    ],
  },
  {
    slug: "safety-compliance-genba",
    title: "Safety Compliance: Genba & Machine Information",
    category: "Safety operations platform",
    period: "Aug 2026–present",
    summary: "Tracks machine inspections, findings, assignments, and PICA corrective actions.",
    overview: "A safety operations platform for scheduling Genba and machine inspections, recording findings, and following Problem Identification and Corrective Action (PICA) work.",
    role: "Full-stack development",
    stack: ["Laravel 12", "Blade", "Bootstrap", "MySQL", "PhpSpreadsheet", "3rd Party API"],
    highlights: [
      "Built dashboards for inspection activity and open findings.",
      "Organized inspection schedules and machine safety categories.",
      "Tracked PICA records, assignments, and corrective actions.",
    ],
    images: [
      { src: "/img/projects/genba/dashboard.webp", alt: "Genba safety dashboard with sanitized inspection summaries", width: 1440, height: 900 },
      { src: "/img/projects/genba/schedules.webp", alt: "Genba inspection schedule categories", width: 1440, height: 900 },
      { src: "/img/projects/genba/pica.webp", alt: "Sanitized PICA corrective action list", width: 1440, height: 900 },
    ],
  },
  {
    slug: "software-audit-license-compliance",
    title: "Software Audit & License Compliance",
    category: "IT compliance platform",
    period: "2026",
    summary: "Compares Lansweeper inventory, licenses, and device references to surface compliance gaps and produce reports.",
    overview: "A Laravel audit platform that compares Lansweeper snapshots, reconciles software usage with license records, and checks device references for compliance reporting.",
    role: "Full-stack development",
    stack: ["Laravel 12", "Blade", "Bootstrap", "MySQL", "Lansweeper", "Laravel Excel"],
    highlights: [
      "Compared inventory snapshots for software and device changes.",
      "Monitored license usage and ungrouped software across uploads.",
      "Checked device, administrator, and exception references and produced reports.",
    ],
    images: [
      { src: "/img/projects/software-audit/dashboard.webp", alt: "Sanitized Lansweeper snapshot comparison dashboard", width: 1440, height: 900 },
      { src: "/img/projects/software-audit/licenses.webp", alt: "Sanitized software license monitoring page", width: 1440, height: 900 },
      { src: "/img/projects/software-audit/devices.webp", alt: "Sanitized device reference comparison dashboard", width: 1440, height: 900 },
    ],
  },
  {
    slug: "nourish",
    title: "Nourish",
    category: "Nutrition tracker",
    period: "2026",
    summary: "Tracks meals, nutrition targets, and weight progress; Laravel 13 agents estimate nutrients from meal photos.",
    overview: "A mobile-first meal tracker with a Next.js frontend and Laravel 13 API. Users log meals, review daily targets and weight trends, and edit photo-based nutrition estimates before saving.",
    role: "Full-stack development",
    stack: ["Next.js 16", "TypeScript", "Laravel 13", "REST API", "Laravel AI SDK", "Google OAuth"],
    highlights: [
      "Used laravel/ai and MealPhotoAgent for structured meal and nutrient estimates.",
      "Queued photo analysis through AnalyzeMealPhoto and kept estimates editable.",
      "Built daily nutrition tracking, weight history, and Google sign-in.",
    ],
    images: [
      { src: "/img/projects/nourish/daily-tracker.webp", alt: "Nourish daily tracker with a demo meal and nutrition goal", width: 430, height: 932 },
      { src: "/img/projects/nourish/meal-photo.webp", alt: "Nourish camera review with a stock sample salad photo", width: 430, height: 932 },
      { src: "/img/projects/nourish/analysis-result.webp", alt: "Nourish meal photo analysis result with editable nutrient estimates", width: 430, height: 932 },
      { src: "/img/projects/nourish/weight-progress.webp", alt: "Nourish profile showing a sanitized weight progress chart", width: 430, height: 932 },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
