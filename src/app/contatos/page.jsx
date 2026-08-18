import ContatosCard from "./ContatosCard";

export const metadata = {
  title: "Contatos | GSR Company",
  description:
    "Fale com a GSR Company pelos nossos canais oficiais de contato.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContatosPage() {
  return <ContatosCard />;
}
