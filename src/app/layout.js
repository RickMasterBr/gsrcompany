import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata = {
  title: "GSR Company — Design System Mestre",
  description: "Biblioteca de componentes de UI e documentação oficial dos tokens locais da GSR Company.",
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

