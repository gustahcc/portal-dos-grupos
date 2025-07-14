import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const grupos = [
  {
    categoria: "Empregos Home Office",
    nome: "Vagas Home Office Brasil",
    link: "https://t.me/vagashomeofficebr",
    membros: "12.000+",
    idioma: "Português"
  },
  {
    categoria: "Filmes e Séries",
    nome: "Filmes Lançamentos 2025",
    link: "https://t.me/filmeslancamentos2025",
    membros: "18.000+",
    idioma: "Português"
  },
  {
    categoria: "Estudos e ENEM",
    nome: "Grupo ENEM 2025",
    link: "https://t.me/enem2025grupo",
    membros: "6.500+",
    idioma: "Português"
  },
  {
    categoria: "Apostas e Futebol",
    nome: "Apostas Esportivas BR",
    link: "https://t.me/apostasesportivasbr",
    membros: "21.300+",
    idioma: "Português"
  },
  {
    categoria: "Tecnologia e Marketing",
    nome: "Marketing Digital Atualizado",
    link: "https://t.me/marketingdigital2025",
    membros: "15.400+",
    idioma: "Português"
  },
  {
    categoria: "Internacionais",
    nome: "Crypto Signals Global",
    link: "https://t.me/cryptosignalsglobal",
    membros: "35.000+",
    idioma: "Inglês"
  },
  {
    categoria: "Empreendedorismo",
    nome: "Negócios Digitais Brasil",
    link: "https://t.me/negociosdigitaisbr",
    membros: "9.800+",
    idioma: "Português"
  },
  {
    categoria: "Cursos e Educação",
    nome: "Cursos Gratuitos e Certificados",
    link: "https://t.me/cursosgratuitoscertificados",
    membros: "14.200+",
    idioma: "Português"
  },
  {
    categoria: "Saúde e Bem-estar",
    nome: "Saúde Natural e Fitoterapia",
    link: "https://t.me/saudenaturalgrupo",
    membros: "3.200+",
    idioma: "Português"
  },
  {
    categoria: "Música e Entretenimento",
    nome: "Músicas MP3 e Lançamentos",
    link: "https://t.me/musicasmp3oficial",
    membros: "11.000+",
    idioma: "Português"
  }
];

export default function GruposTelegram() {
  const [busca, setBusca] = useState("");

  const filtrados = grupos.filter((g) =>
    g.nome.toLowerCase().includes(busca.toLowerCase()) ||
    g.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Portal dos Grupos</h1>
      <p className="text-center text-muted-foreground mb-6">
        Encontre grupos públicos do Telegram por tema, idioma ou interesse.
      </p>
      <Input
        placeholder="Buscar por categoria ou nome..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="mb-6"
      />

      <div className="grid gap-4">
        {filtrados.map((grupo, i) => (
          <Card key={i} className="hover:shadow-lg transition">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-1">{grupo.nome}</h2>
              <p className="text-sm text-muted-foreground mb-2">{grupo.categoria} · {grupo.idioma} · {grupo.membros}</p>
              <a href={grupo.link} target="_blank">
                <Button variant="outline">Entrar no Grupo</Button>
              </a>
            </CardContent>
          </Card>
        ))}

        {filtrados.length === 0 && (
          <p className="text-center text-muted-foreground">Nenhum grupo encontrado.</p>
        )}
      </div>
    </div>
  );
}
