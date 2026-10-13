import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import InitialLoad from "./components/initial-load";
import { siteUrl, socialImage } from "./data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Alvaro Muyassar — Full-Stack Developer";
const description = "Alvaro Muyassar builds Laravel enterprise systems and Next.js apps. Explore five case studies, from workplace safety and software audits to Nourish.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Alvaro Muyassar",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Alvaro Muyassar",
    locale: "en_US",
    type: "website",
    images: [socialImage],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha384-nRgPTkuX86pH8yjPJUAFuASXQSSl2/bBUiNV47vSYpKFxHJhbcrGnmlYpYJMeD7a"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-full w-full flex-col">
        <InitialLoad>{children}</InitialLoad>
        <noscript><style>{"#site-loading{display:none!important}"}</style></noscript>
      </body>
    </html>
  );
}
