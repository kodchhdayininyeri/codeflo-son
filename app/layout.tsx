import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "CodeFlo - AI-Powered Business Automation & Workflow Solutions",
  description: "Boost productivity and revenue with AI-driven automation tailored for your business. AI Agents, Workflow Automation, and Lead Generation.",
  keywords: "AI automation, workflow automation, lead generation, AI agents, business automation, productivity",
  authors: [{ name: "CodeFlo" }],
  openGraph: {
    title: "CodeFlo - AI-Powered Business Automation",
    description: "Automate your business with AI agents and custom workflows",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
