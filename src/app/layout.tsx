import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VoltMaster - Eletricista de Elite",
  description: "Eletricista que não leva choque na carreira!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
          <Header />
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
