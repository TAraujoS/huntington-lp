import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import Image from "next/image";

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
      <Script id="meta-pixel-code" strategy="afterInteractive">
        {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '922731863058737');
            fbq('track', 'PageView');
          `}
      </Script>

      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=922731863058737&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
