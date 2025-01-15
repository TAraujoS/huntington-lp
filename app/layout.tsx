import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/Header";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huntington: Centro de Reprodução Humana",
  description: "Centro de Reprodução Humana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={rubik.className}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        {/* Footer */}
      </body>
    </html>
  );
}
