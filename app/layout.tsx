import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import Script from "next/script";
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
  icons: {
    icon: [
      { url: '/x.png', sizes: '32x32', type: 'image/png' },
      { url: '/x.png', sizes: '16x16', type: 'image/png' }
    ],
  },
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
      <head>
        {/* Critical CSS - Load instantly to prevent flash */}
        <style dangerouslySetInnerHTML={{__html: `
          html, body {
            background-color: #000000 !important;
            color: #ffffff !important;
            margin: 0;
            padding: 0;
          }

          #quikquery_widget_container {
            opacity: 0;
            animation: fadeIn 0.3s ease-in 1s forwards;
            z-index: 999999 !important;
            position: fixed !important;
          }
          #quikquery_root {
            z-index: 999999 !important;
          }

          /* Fix: Chat container viewport overflow - Safari uyumlu */
          #quikquery_widget_container .custom-scrollbar[style*="max-height: 35rem"],
          #quikquery_widget_container .custom-scrollbar[style*="min-height: 29rem"] {
            max-height: 35rem !important;
            max-height: calc(100vh - 200px) !important;
            min-height: auto !important;
          }

          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased bg-black text-white`}
      >
        {children}

        {/* QuikQuery Widget */}
        <Script
          id="quikquery_setup_script"
          src="https://www.quikquery.io/widget/setup.js?id=6920a925060b664793dd653d"
          strategy="afterInteractive"
          data-website-id="6920a925060b664793dd653d"
          data-sources="show"
          data-project-name="Ask AI"
          data-project-color="#000000"
          data-project-logo="https://www.quikquery.io/images/landing/logo/Q2.png"
          data-chat-logo="https://www.quikquery.io/images/landing/logo/Q2.png"
          data-launcher-position="right-bottom"
          data-launcher-offset-x="50"
          data-launcher-offset-y="50"
        />

        {/* Override QuikQuery global CSS (AFTER it loads) */}
        <Script id="quikquery-override" strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `
          setTimeout(() => {
            const style = document.createElement('style');
            style.textContent =
              'body:not(#quikquery_root):not(#quikquery_widget_container) a:not([class*="quikquery"]) { color: inherit; text-decoration: inherit; }' +
              'body:not(#quikquery_root):not(#quikquery_widget_container) h1:not([class*="quikquery"]), ' +
              'body:not(#quikquery_root):not(#quikquery_widget_container) h2:not([class*="quikquery"]), ' +
              'body:not(#quikquery_root):not(#quikquery_widget_container) h3:not([class*="quikquery"]) { font-size: revert; font-weight: revert; }';
            document.head.appendChild(style);
          }, 1500);
        `}} />
      </body>
    </html>
  );
}
