import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata = {
  title: "GSR Company — Consultoria Estratégica de Alta Confiabilidade",
  description: "Segurança patrimonial e empresarial, compliance regulatório, governança corporativa, gestão de riscos, inteligência corporativa e outsource management. Identificamos riscos antes que se tornem passivos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geist.variable} scroll-smooth`}>
      <body className="bg-gsr-bg text-gsr-text-primary font-sans antialiased selection:bg-gsr-gold/20 selection:text-gsr-gold-dark min-h-screen">
        {children}
      </body>
    </html>
  );
}

