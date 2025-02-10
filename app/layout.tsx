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
  title: "Infertilidade Feminina: Tratamento Especializado | ProFIV",
  description:
    "Encontre na ProFIV as melhores soluções para infertilidade feminina! Tratamentos inovadores para transformar seu sonho em realidade. Agende sua consulta!",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: "infertilidade feminina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={rubik.className}>
      <Script
        type="text/javascript"
        async
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/30c67d99-c436-4075-8903-a4298085cdf6-loader.js"
      ></Script>
      <Script
        src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
        strategy="lazyOnload"
        type="text/javascript"
        async
      />
      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
