import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huntington: Centro de Reprodução Humana",
  description: "Centro de Reprodução Humana",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={rubik.className}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1WVFMTV3FK"
        ></Script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-1WVFMTV3FK');
            `}
        </Script>
      </head>
      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <Script
        src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
        strategy="lazyOnload"
        type="text/javascript"
        async
      />
    </html>
  );
}
