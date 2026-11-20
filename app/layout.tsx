import type { Metadata } from "next";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thawana Dantas | Desenvolvedora Front-end",
  description:
    "Portfólio de Thawana Dantas — desenvolvimento front-end com foco em experiências digitais acessíveis, rápidas e cuidadosas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
