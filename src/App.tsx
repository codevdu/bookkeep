import { useState } from "react";
import Text from "./components/ui/text";
import Badge from "./components/ui/badge";
import Button from "./components/button";
import InputText from "./components/input";

export default function App() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSimulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <div className="min-h-screen bg-parchment-100 p-8 text-ink-dark selection:bg-book-light">
      {/* Cabeçalho do Dashboard */}
      <header className="max-w-5xl mx-auto mb-12 flex justify-between items-center border-b border-ink-light/10 pb-6">
        <div>
          <Text as="h1" variant="logo-lg-bold">BookKeep</Text>
          <Text as="p" variant="body-sm" className="mt-1">
            Painel de Teste de Componentes do Sistema de Biblioteca
          </Text>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="sm">Ver Relatórios</Button>
          <Button variant="primary" size="sm">Novo Empréstimo</Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto space-y-12">
        
        {/* ================= SEÇÃO 1: GUIA DE ESTILOS ================= */}
        <section className="bg-parchment-200 p-6 rounded-xl shadow-book border border-ink-light/5">
          <Text as="h2" variant="book-title-lg" className="mb-6">1. Guia de Estilos (Componentes Isolados)</Text>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Teste de Tipografia */}
            <div className="space-y-3">
              <Text as="h3" variant="book-title-md" className="border-b border-ink-light/10 pb-2">Tipografia (Text)</Text>
              <div className="flex flex-col gap-2">
                <Text variant="logo-lg-bold">Logo LG Bold (BookKeep)</Text>
                <Text variant="book-title-lg">Título de Livro Grande (Serif)</Text>
                <Text variant="book-title-md">Título de Livro Médio (Serif)</Text>
                <Text variant="book-author">Autor de Livro (Sans Italic)</Text>
                <Text variant="body-md-bold">Texto Corpo Médio Negrito</Text>
                <Text variant="body-md">Texto Corpo Médio Padrão</Text>
                <Text variant="body-sm">Texto Corpo Pequeno / Secundário</Text>
              </div>
            </div>

            {/* Teste de Badges & Inputs */}
            <div className="space-y-6">
              <div>
                <Text as="h3" variant="book-title-md" className="border-b border-ink-light/10 pb-2 mb-3">Status (Badge)</Text>
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge variant="available">Disponível</Badge>
                  <Badge variant="borrowed">Emprestado</Badge>
                </div>
              </div>

              <div>
                <Text as="h3" variant="book-title-md" className="border-b border-ink-light/10 pb-2 mb-3">Campos (InputText)</Text>
                <div className="space-y-4">
                  <div>
                    <Text variant="body-sm" className="block mb-1">Buscar por título ou código:</Text>
                    <InputText 
                      placeholder="Ex: O Alquimista..." 
                      value={search} 
                      onChange={(e) => setSearch(e.target.value)} 
                    />
                  </div>
                  <div>
                    <Text variant="body-sm" className="block mb-1">Campo Desativado:</Text>
                    <InputText placeholder="ID do Sistema (Bloqueado)" disabled />
                  </div>
                </div>
              </div>
            </div>

            {/* Teste de Botões */}
            <div className="md:col-span-2 space-y-3">
              <Text as="h3" variant="book-title-md" className="border-b border-ink-light/10 pb-2">Ações (Button)</Text>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary">Botão Primário</Button>
                <Button variant="secondary">Botão Secundário</Button>
                <Button variant="danger">Botão Alerta</Button>
                <Button variant="primary" size="sm">Primário Pequeno</Button>
                <Button variant="primary" disabled>Botão Desativado</Button>
              </div>
            </div>

          </div>
        </section>

        {/* ================= SEÇÃO 2: CENÁRIO REAL DE USO ================= */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <Text as="h2" variant="book-title-lg">2. Exemplo Prático: Lista de Livros & Empréstimos</Text>
            <Button variant="secondary" size="sm" onClick={handleSimulateLoading} disabled={isLoading}>
              {isLoading ? "Atualizando..." : "Simular Sync de Dados"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card Livro 1 - Disponível */}
            <div className="bg-parchment-200 p-5 rounded-xl shadow-book flex flex-col justify-between h-52 border border-ink-light/5">
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <Badge variant="available" loading={isLoading}>Disponível</Badge>
                  <Text variant="body-sm" className="tabular-nums">Reg. #4102</Text>
                </div>
                <Text as="h4" variant="book-title-md" className="line-clamp-2">Dom Casmurro</Text>
                <Text variant="book-author">Machado de Assis</Text>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="primary" size="sm" className="w-full" disabled={isLoading}>Emprestar</Button>
              </div>
            </div>

            {/* Card Livro 2 - Emprestado */}
            <div className="bg-parchment-200 p-5 rounded-xl shadow-book flex flex-col justify-between h-52 border border-ink-light/5">
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <Badge variant="borrowed" loading={isLoading}>Emprestado</Badge>
                  <Text variant="body-sm" className="tabular-nums">Reg. #1092</Text>
                </div>
                <Text as="h4" variant="book-title-md" className="line-clamp-2">O Hobbit</Text>
                <Text variant="book-author">J.R.R. Tolkien</Text>
                <Text variant="body-sm" className="mt-2 block italic">Devolução em: 15/06</Text>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="secondary" size="sm" className="w-full" disabled={isLoading}>Receber Devolução</Button>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}