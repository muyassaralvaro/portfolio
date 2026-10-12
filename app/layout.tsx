import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alvaro Muyassar — Full-Stack Developer",
    template: "%s | Alvaro Muyassar",
  },
  description:
    "Alvaro Muyassar builds enterprise web applications, workflow tools, and responsive interfaces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full w-full flex-col">{children}</body>
      {process.env.NEXT_PUBLIC_FONTAWESOME_KIT_ID ? (
        <Script
          src={`https://kit.fontawesome.com/${process.env.NEXT_PUBLIC_FONTAWESOME_KIT_ID}.js`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      ) : null}
    </html>
  );
}
