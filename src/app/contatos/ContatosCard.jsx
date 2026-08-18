"use client";

import { motion } from "framer-motion";
import { MessageCircle, Globe, Mail, ArrowUpRight } from "lucide-react";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

const LINKS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5521999677146",
    icon: MessageCircle,
    iconWrap: "bg-[#25D366]/10",
    iconColor: "text-[#25D366]",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gsr.negocioscorporativos/",
    icon: InstagramIcon,
    iconWrap: "bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5]",
    iconColor: "text-white",
    external: true,
  },
  {
    label: "Site Oficial",
    href: "https://gsrnc.com.br/",
    icon: Globe,
    iconWrap: "bg-gsr-gold/10",
    iconColor: "text-gsr-gold",
    external: true,
  },
  {
    label: "E-mail",
    href: "mailto:gabrielsenra@gsrnc.com.br",
    icon: Mail,
    iconWrap: "bg-gsr-gold/10",
    iconColor: "text-gsr-gold",
    external: false,
  },
];

export default function ContatosCard() {
  return (
    <main className="min-h-screen w-full bg-gsr-bg flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[420px] bg-white border border-gsr-border rounded-card shadow-gsr-lg p-8 flex flex-col items-center"
      >
        <div className="h-24 w-24 rounded-full bg-white border border-gsr-border shadow-gsr-md flex items-center justify-center overflow-hidden mb-5">
          <img
            src="/assets/navbar-icon.png"
            alt="GSR Company"
            className="h-16 w-16 object-contain"
          />
        </div>

        <h1 className="font-title text-2xl font-normal text-gsr-text-primary text-center">
          GSR Company
        </h1>

        <p className="mt-2 text-sm text-gsr-text-secondary text-center max-w-[320px] leading-relaxed">
          GSR Company — negócios corporativos com foco em estratégia e
          performance. Fale com a gente.
        </p>

        <div className="mt-7 w-full flex flex-col gap-3">
          {LINKS.map(({ label, href, icon: Icon, iconWrap, iconColor, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-3 w-full bg-gsr-bg border border-gsr-border rounded-gsr px-4 py-3.5 transition-all duration-300 hover:border-gsr-gold hover:shadow-gsr-sm"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconWrap}`}
              >
                <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={2} />
              </span>
              <span className="flex-1 text-center text-sm font-medium text-gsr-text-primary font-sans">
                {label}
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-gsr-border group-hover:text-gsr-text-secondary transition-colors duration-300" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs text-gsr-text-secondary/70 text-center">
          © 2026 GSR Company
        </p>
      </motion.div>
    </main>
  );
}
