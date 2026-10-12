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
  whatItDoes: string[];
  howBuilt: string[];
  role: string;
  website?: string;
  stack: string[];
  highlights: string[];
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "nourish",
    title: "Nourish",
    category: "Nutrition tracker",
    period: "2026",
    summary: "Tracks meals, nutrition targets, and weight progress; Laravel 13 agents estimate nutrients from meal photos.",
    whatItDoes: [
      "Nourish gives people one place to record meals, set a weight goal, and compare each day's intake with their own nutrition targets. The home view combines saved meals with calories, macronutrients, and other nutrients; the calendar puts daily progress in context, while the profile records weight check-ins and trends. Targets can be edited as needs change, without rewriting earlier days.",
      "For faster logging, a user can photograph a meal and receive an estimate for the whole dish, including serving size and nutrients. The result opens as an editable draft: the user checks the name and numbers before saving. Manual entry remains available when a photo or AI estimate is unsuitable.",
    ],
    howBuilt: [
      "I built the mobile-first interface in Next.js 16 and TypeScript, with Home, Calendar, Camera, and Profile screens connected to a Laravel 13 REST API. Google sign-in uses Laravel sessions, and the API owns profiles, dated target versions, weight entries, meals, and daily summaries. Saved meal items keep the values the user confirmed; missing nutrient estimates stay unknown instead of becoming false zeros.",
      "For photo logging, Laravel validates and re-encodes uploads before keeping them in private storage. AnalyzeMealPhoto runs in a queue and calls MealPhotoAgent through the Laravel AI SDK (laravel/ai) for structured dish and nutrient estimates. The frontend polls the analysis, then presents the response for correction and confirmation. The separate review step keeps an AI guess from silently becoming a logged meal.",
    ],
    role: "Full-stack development",
    website: "https://nourish.my.id",
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
  {
    slug: "software-audit-license-compliance",
    title: "Software Audit & License Compliance",
    category: "IT compliance platform",
    period: "2026",
    summary: "Compares Lansweeper inventory, licenses, and device references to surface compliance gaps and produce reports.",
    whatItDoes: [
      "This internal audit platform turns Lansweeper inventory uploads into a view of what changed between snapshots. Reviewers can inspect software and device differences, search the affected assets, and see software grouped by its licensing classification instead of sorting through raw inventory rows.",
      "The license area compares installed software with recorded entitlements and shows usage, remaining quantities, and ungrouped items needing review. A separate device comparison checks inventory against asset, administrator, and exception references. Reporting views bring these checks together for follow-up and export.",
    ],
    howBuilt: [
      "I built the workflow with Laravel, Blade, Bootstrap, and MySQL. Upload and comparison services keep Lansweeper snapshots separate, normalize software names and groups, and calculate changes between selected uploads. LicenseUsageService applies the relevant paid, free, and unclassified rules to usage rows so overages remain visible.",
      "I kept the device reference checks and license reporting in dedicated services rather than mixing them into dashboard templates. Reference uploads feed the device comparison; report rows use a selected inventory snapshot and license data. Laravel Excel supports spreadsheet import and export, while the UI lets reviewers drill into the underlying rows before using a report.",
    ],
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
    slug: "ehs-academy",
    title: "EHS Academy: Learning Management System",
    category: "Learning management system",
    period: "Jul–Aug 2026",
    summary: "Centralized EHS courses, quizzes, Kiken Yochi exercises, and completion certificates.",
    whatItDoes: [
      "EHS Academy brings workplace safety training into a course catalog. Employees move through lessons and materials, take pre-tests and quizzes, and complete Kiken Yochi exercises that ask them to identify hazards. Their course and lesson progress determines what is still to do and when a completion certificate is available.",
      "EHS staff can create courses, arrange lessons and slides, manage questions, and review Kiken Yochi submissions. Dashboards and completion reports give training owners a view of participation and results across the workforce.",
    ],
    howBuilt: [
      "I used Laravel, Blade, Bootstrap, and MySQL to model courses, lessons, slides, quiz questions and submissions, Kiken Yochi submissions, and progress records. The learner pages assemble these records into a course path; the admin pages let EHS staff reorder lessons and slides and update course content without changing code.",
      "Quiz and Kiken Yochi flows save separate submissions so attempts and review outcomes can be shown alongside progress. A dashboard service aggregates course and task data for different staff views. Certificate and reporting routes read those same completion records, with Laravel Excel handling spreadsheet reports.",
    ],
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
    slug: "work-permit-management-system",
    title: "Work Permit Management System",
    category: "Enterprise application",
    period: "Feb–Jun 2026",
    summary: "Digitized contractor work permits with JSA, staged approvals, and audit-ready PDFs.",
    whatItDoes: [
      "The system moves contractor work permits from a request through safety review and final document output. Contractors enter work details, required documents, and a Job Safety Analysis (JSA) with steps, hazards, and controls. Reviewers see which stage is waiting for action and can approve, reject, or request a revision rather than passing paper forms between teams.",
      "Permit and JSA approvals form related but distinct paths. The required reviewers vary with the permit and work type, while the permit detail keeps the current status, supporting checks, and revision history together. Once ready, the system produces a bundled PDF for the work record and audit trail.",
    ],
    howBuilt: [
      "I built the contractor and staff flows in Laravel, Blade, Bootstrap, and MySQL around WorkPermit, Jsa, and approval records. Server-side rules validate submissions and decide which approval stage can act next. Drafts, rejections, resubmissions, extensions, and JSA revisions are handled as explicit states so a returned request can be corrected without losing its context.",
      "The document pipeline renders permit and JSA data, adds approval QR marks, fills supporting templates, and merges attachments with FPDI. A queued bundle job regenerates the PDF as permit forms and approvals change, so the download reflects the stored record.",
    ],
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
    slug: "safety-compliance-genba",
    title: "Safety Compliance: Genba & Machine Information",
    category: "Safety operations platform",
    period: "Aug 2026–present",
    summary: "Tracks machine inspections, findings, assignments, and PICA corrective actions.",
    whatItDoes: [
      "This platform schedules Genba walks and inspections for areas, machines, and equipment. Participants can use target QR codes and checklists to record what they inspected. A failed check becomes an abnormality with its inspection context and evidence, giving EHS staff a clear starting point for follow-up.",
      "EHS staff review findings, assign responsible people, and track countermeasures through verification. Related abnormalities can be gathered into a PICA activity for corrective action and exported as a report. Dashboards and schedules show what needs inspection and which findings remain open.",
    ],
    howBuilt: [
      "I built the scheduling, inspection, finding, and assignment screens with Laravel, Blade, Bootstrap, and MySQL. The data model links inspection logs and checklist results to their target and schedule; recording a failed item creates the abnormality in the same transaction. ChecklistService evaluates inspection frequency and recent results to show due work and target health.",
      "PICA records link findings to their analysis, countermeasures, owners, and verification. For exports, PicaExportService fills the existing spreadsheet template with those related records using PhpSpreadsheet, preserving the report layout while making the source data traceable back to inspections.",
    ],
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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
