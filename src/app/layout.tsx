import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";


export const metadata: Metadata = {
  title: "Sleepnest",
  description: "Sleepnest – Tabiiy mahsulotlar. Yotoq to'shaklari va to'plamlar sifatini his qiling. Ekologik toza, qulay va bardoshli mahsulotlar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Header/>
        <div className="container">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
