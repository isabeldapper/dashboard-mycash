# 📋 Contexto do Projeto - Dashboard Mycash+

> **Documento descritivo completo do sistema de gestão financeira familiar**

---

## 🎯 VISÃO GERAL DO SISTEMA

O **mycash+** é um sistema web completo de gestão financeira familiar que permite múltiplos membros de uma família controlarem suas finanças de forma colaborativa. 

### Características Principais

- **Aplicação de Página Única (SPA)**: Navegação fluida entre diferentes seções
- **Gestão Colaborativa**: Múltiplos membros da família podem gerenciar finanças juntos
- **Sistema Completo**: Dashboard, transações, membros, cartões, contas e objetivos

---

## 🏗️ ESTRUTURA DE NAVEGAÇÃO

### Sistema de Abas

O sistema é dividido em **6 abas principais**:

1. **Dashboard** - Visão geral financeira
2. **Transações** - Histórico e registro de movimentações
3. **Membros** - Gerenciamento de membros da família
4. **Cartões** - Gestão de cartões de crédito
5. **Contas** - Contas bancárias
6. **Objetivos** - Metas financeiras

### Sidebar (Desktop)

**Visibilidade:** Apenas em resoluções **≥1280px**

**Conteúdo:**
- Logotipo do mycash+
- Links de navegação para todas as abas
- Estados: Expandido (com texto) e Colapsado (apenas ícones)

**Comportamento:**
- Empurra o conteúdo (não sobrepõe)
- Pode ser expandida/colapsada pelo usuário
- Mantém estado entre navegações

### Header Mobile

**Visibilidade:** Apenas em resoluções **<1280px**

**Conteúdo:**
- Menu hambúrguer (abre drawer com navegação)
- Ações principais (ex: nova transação)
- Logo ou título da página atual

**Comportamento:**
- Drawer overlay para navegação
- Some completamente no desktop

---

## 💾 SISTEMA DE DADOS E ESTADO

### Armazenamento Central

- **Estado Global**: Gerenciado via contexto/store para garantir consistência
- **Sincronização**: Todos os componentes reagem às mudanças de dados
- **Persistência**: Dados salvos no Supabase

### Tipos de Dados Armazenados

#### 1. Transações

```typescript
interface Transaction {
  id: string;
  valor: number;
  descricao: string;
  categoria: Category;
  data: Date;
  tipo: 'receita' | 'despesa';
  conta?: Account;      // Para receitas/despesas
  cartao?: Card;        // Para despesas no cartão
  membro: Member;
  status: 'pendente' | 'concluido';
  recorrente?: {
    frequencia: 'mensal' | 'semanal' | 'anual';
    proximaData: Date;
  };
  parcelado?: {
    parcelaAtual: number;
    totalParcelas: number;
  };
}
```

**Regras:**
- Receitas sempre vinculadas a uma conta
- Despesas podem ser em conta ou cartão
- Status "pendente" para despesas futuras
- Recorrentes geram nova transação automaticamente
- Parceladas têm vínculo entre si

#### 2. Contas Bancárias

```typescript
interface Account {
  id: string;
  nome: string;
  tipo: 'corrente' | 'poupanca';
  saldoAtual: number;
  cor: string;          // Cor identificadora (hex)
  icone?: string;       // Ícone opcional
}
```

**Regras:**
- Saldo calculado automaticamente com base em transações
- Cor única para identificação visual
- Tipos: corrente ou poupança

#### 3. Membros da Família

```typescript
interface Member {
  id: string;
  nomeCompleto: string;
  papel: 'pai' | 'mae' | 'filho' | 'filha' | 'outro';
  fotoPerfil?: string;
  rendaEstimada?: number;
  cor: string;          // Cor identificadora
}
```

**Regras:**
- Cada transação vinculada a um membro
- Foto de perfil opcional
- Renda estimada para planejamento

#### 4. Cartões de Crédito

```typescript
interface Card {
  id: string;
  nome: string;         // Ex: "Nubank", "Inter"
  bandeira: 'visa' | 'mastercard' | 'elo' | 'amex';
  limite: number;
  faturaAtual: number;
  diaFechamento: number;
  diaVencimento: number;
  cor: string;
  tema: 'escuro' | 'verde-limao' | 'neutro';
}
```

**Regras:**
- Fatura calculada com base em transações pendentes
- Percentual de uso: `(faturaAtual / limite) * 100`
- Tema visual customizável

#### 5. Categorias

```typescript
interface Category {
  id: string;
  nome: string;
  tipo: 'receita' | 'despesa';
  cor: string;
  icone: string;
}
```

**Listas Separadas:**
- **Receitas**: Salário, Freelance, Investimentos, Outros
- **Despesas**: Alimentação, Transporte, Moradia, Lazer, Saúde, Educação, Outros

#### 6. Objetivos

```typescript
interface Goal {
  id: string;
  nome: string;
  valorMeta: number;
  valorGuardado: number;
  prazo: Date;
  cor: string;
  icone: string;
}
```

**Cálculo:**
- Progresso: `(valorGuardado / valorMeta) * 100`

---

## 🏠 DASHBOARD - COMPONENTES DETALHADOS

### 1. Cards de Resumo

#### Saldo Total

**Cálculo:**
```
Saldo Total = Σ saldos positivos das contas - Σ faturas pendentes dos cartões
```

**Visual:**
- Card destacado com efeito "blob" verde-limão
- Valor grande e proeminente
- Indicador de variação (↑ ou ↓) comparado ao mês anterior

**Exemplo:**
```
Contas:
- Nubank: R$ 5.000
- Inter: R$ 3.000
Total contas: R$ 8.000

Cartões (faturas pendentes):
- Nubank: R$ 1.200
- Inter: R$ 800
Total faturas: R$ 2.000

Saldo Total = R$ 8.000 - R$ 2.000 = R$ 6.000
```

#### Receitas do Período

**Cálculo:**
```
Receitas = Σ transações tipo "receita" no período selecionado
```

**Visual:**
- Card com cor verde
- Ícone de seta para cima
- Comparação com período anterior

#### Despesas do Período

**Cálculo:**
```
Despesas = Σ transações tipo "despesa" no período selecionado
```

**Visual:**
- Card com cor vermelha/laranja
- Ícone de seta para baixo
- Comparação com período anterior

### 2. Widget de Cartões de Crédito

**Layout:**
- Carrossel horizontal (mobile)
- Grid 2-3 colunas (desktop)

**Cada Card Exibe:**
- Nome do cartão (ex: "Nubank")
- Bandeira (Visa, Mastercard, etc)
- Valor da fatura atual
- Barra de progresso do limite
- Percentual de uso

**Cálculo do Percentual:**
```
Percentual = (faturaAtual / limite) * 100
```

**Temas Visuais:**
- **Escuro**: Fundo escuro, texto claro
- **Verde-limão**: Destaque com cor primária
- **Neutro**: Fundo claro, texto escuro

**Interação:**
- Click abre modal com detalhes completos
- Mostra histórico de faturas
- Permite adicionar transação direto no cartão

### 3. Widget de Próximas Despesas

**Funcionalidade:**
- Lista cronológica de despesas pendentes
- Ordenadas por data (mais próximas primeiro)
- Máximo de 5-7 itens visíveis

**Cada Item Exibe:**
- Descrição da despesa
- Valor
- Data de vencimento
- Categoria (com cor)
- Checkbox para marcar como "paga"

**Comportamento ao Marcar como Paga:**

1. **Despesa Simples:**
   - Status muda para "concluído"
   - Remove da lista de próximas despesas

2. **Despesa Recorrente:**
   - Status atual muda para "concluído"
   - Cria nova transação pendente para próximo período
   - Exemplo: Aluguel mensal

3. **Despesa Parcelada:**
   - Marca parcela atual como "concluída"
   - Próxima parcela aparece na lista
   - Exemplo: 3/12 → 4/12

**Visual:**
- Hover: Destaque sutil
- Checkbox grande (touch-friendly)
- Indicador visual de recorrente/parcelado

### 4. Gráfico de Fluxo Financeiro

**Tipo:** Gráfico de barras ou linha

**Dados:**
- Eixo X: Meses ou semanas
- Eixo Y: Valores em R$
- Duas séries: Receitas (verde) e Despesas (vermelho)

**Interação:**
- Tooltip ao passar o mouse
- Mostra valores exatos
- Permite filtrar por categoria

**Responsividade:**
- Mobile: Gráfico simplificado, scroll horizontal
- Desktop: Gráfico completo

---

## 🎭 MODAIS DO SISTEMA

### 1. Modal: Nova Transação

**Campos:**
- **Tipo**: Radio button (Receita / Despesa)
- **Valor**: Input numérico (R$)
- **Descrição**: Text input
- **Categoria**: Select dropdown
- **Data**: Date picker
- **Conta/Cartão**: Select (condicional ao tipo)
- **Membro**: Select dropdown
- **Recorrente**: Checkbox + frequência
- **Parcelado**: Checkbox + número de parcelas

**Validações:**
- Valor > 0 (obrigatório)
- Descrição (obrigatório)
- Categoria (obrigatório)
- Data (obrigatório)
- Conta ou Cartão (obrigatório)

**Comportamento:**
- Receita: Mostra apenas contas
- Despesa: Mostra contas E cartões
- Recorrente: Mostra campo de frequência
- Parcelado: Mostra número de parcelas

**Ações:**
- Botão "Cancelar" (fecha modal)
- Botão "Adicionar" (salva e fecha)

**Feedback:**
- Toast de sucesso: "Transação adicionada com sucesso!"
- Toast de erro: "Erro ao adicionar transação"

### 2. Modal: Adicionar Membro

**Campos:**
- Nome completo
- Papel (select)
- Foto de perfil (upload)
- Renda estimada (opcional)
- Cor identificadora (color picker)

**Validações:**
- Nome obrigatório
- Papel obrigatório
- Cor única (não pode repetir)

### 3. Modal: Adicionar Cartão

**Campos:**
- Nome do cartão
- Bandeira (select)
- Limite
- Dia de fechamento
- Dia de vencimento
- Tema visual (select)

**Validações:**
- Todos os campos obrigatórios
- Limite > 0
- Dia fechamento: 1-31
- Dia vencimento: 1-31

### 4. Modal: Detalhes do Cartão

**Exibe:**
- Informações completas do cartão
- Fatura atual detalhada
- Histórico de faturas anteriores
- Gráfico de uso ao longo do tempo
- Lista de transações do cartão

**Ações:**
- Editar informações
- Ver transações
- Adicionar nova transação

---

## 🧮 CÁLCULOS E LÓGICA DE NEGÓCIO

### Saldo Total
```
Saldo Total = Σ(saldos das contas) - Σ(faturas pendentes dos cartões)
```

### Saldo de Conta
```
Saldo Conta = Saldo Inicial + Σ(receitas) - Σ(despesas da conta)
```

### Fatura do Cartão
```
Fatura = Σ(despesas do cartão com status "pendente" no período de faturamento)
```

### Percentual de Uso do Cartão
```
Percentual = (Fatura Atual / Limite Total) × 100
```

### Progresso de Objetivo
```
Progresso = (Valor Guardado / Valor Meta) × 100
```

### Filtragem Hierárquica

**Filtros Disponíveis:**
1. **Período**: Hoje, Semana, Mês, Ano, Customizado
2. **Membro**: Todos, Específico

**Comportamento:**
- Todos os componentes do dashboard reagem simultaneamente
- Gráficos atualizam automaticamente
- Cards de resumo recalculam
- Listas filtram itens

**Exemplo:**
```
Filtro: "Mês Atual" + "João"
Resultado:
- Receitas: Apenas de João no mês atual
- Despesas: Apenas de João no mês atual
- Gráfico: Dados de João no mês atual
```

---

## 🎨 ESTADOS VISUAIS E ACESSIBILIDADE

### Estados de Hover

**Avatares de Membros:**
- Escala: 1.1 (aumenta 10%)
- Transição suave (200ms)
- Sombra aumenta

**Cards:**
- Sombra aumenta (elevation)
- Borda sutil aparece
- Cursor: pointer

**Botões:**
- Background escurece/clareia
- Escala: 1.02
- Transição: 150ms

### Estados de Foco

**Elementos Interativos:**
- Anel de foco: 2-3px
- Cor: Primária do design system
- Offset: 2px
- Visível apenas via teclado (não mouse)

### Estados de Carregamento

**Skeleton Loaders:**
- Usado em cards, listas e gráficos
- Animação de pulso ou shimmer
- Mantém layout (evita layout shift)

**Spinners:**
- Usado em botões durante ações
- Desabilita botão durante loading
- Texto muda para "Carregando..."

### Notificações Toast

**Tipos:**
- **Sucesso**: Verde, ícone de check
- **Erro**: Vermelho, ícone de X
- **Aviso**: Amarelo, ícone de alerta
- **Info**: Azul, ícone de info

**Comportamento:**
- Aparecem no topo direito (desktop)
- Aparecem no topo (mobile)
- Auto-dismiss após 3-5 segundos
- Podem ser fechadas manualmente
- Máximo 3 toasts simultâneos

**Exemplos:**
- "Transação adicionada com sucesso!" (sucesso)
- "Erro ao salvar. Tente novamente." (erro)
- "Limite do cartão atingindo 90%" (aviso)

### Acessibilidade

**Navegação por Teclado:**
- Tab: Navega entre elementos
- Enter/Space: Ativa botões
- Esc: Fecha modais
- Setas: Navega em listas/carrossel

**ARIA Labels:**
- Todos os botões têm labels descritivos
- Ícones têm aria-label
- Modais têm aria-labelledby e aria-describedby
- Listas têm role="list"

**Contraste de Cores:**
- Conformidade WCAG AA mínimo
- Textos: Contraste ≥ 4.5:1
- Elementos grandes: Contraste ≥ 3:1
- Validar com ferramentas (WAVE, axe)

**Leitores de Tela:**
- Estrutura semântica (header, nav, main, section)
- Headings hierárquicos (h1, h2, h3)
- Landmarks ARIA
- Live regions para atualizações dinâmicas
- Anúncios de mudanças de estado

**Responsividade Touch:**
- Touch targets ≥ 44x44px
- Espaçamento entre elementos ≥ 8px
- Inputs ≥ 48px de altura
- Font-size de inputs ≥ 16px (evita zoom iOS)

---

## 📱 RESPONSIVIDADE - RESUMO

### Mobile (< 768px)
- Layout em coluna única
- Header mobile com drawer
- Cards empilhados
- Gráficos simplificados
- Carrossel para cartões

### Tablet (768px - 1279px)
- Layout em 2 colunas
- Header mobile ainda presente
- Cards em grid 2 colunas
- Gráficos intermediários

### Desktop (≥ 1280px)
- Sidebar visível
- Layout em 3-4 colunas
- Cards em grid completo
- Gráficos completos
- Hover states ativos

---

## 🎯 PRIORIDADES DE IMPLEMENTAÇÃO

### Fase 1: Fundação (MVP)
1. ✅ Estrutura de navegação (Sidebar + Header Mobile)
2. ✅ Sistema de dados (Supabase)
3. ✅ Dashboard básico (cards de resumo)
4. ✅ Modal de nova transação
5. ✅ Lista de transações

### Fase 2: Funcionalidades Core
1. Widget de cartões
2. Widget de próximas despesas
3. Gráfico de fluxo financeiro
4. Filtros de período e membro
5. Gestão de membros

### Fase 3: Funcionalidades Avançadas
1. Objetivos financeiros
2. Transações recorrentes
3. Transações parceladas
4. Relatórios e insights
5. Exportação de dados

### Fase 4: Polimento
1. Animações e micro-interações
2. Otimizações de performance
3. Testes de acessibilidade
4. PWA (Progressive Web App)
5. Notificações

---

## 🔗 Integração com Documentação Existente

Este contexto complementa:
- [Project Rules](./project-rules.md) - Regras de desenvolvimento
- [Project Config](./project-config.md) - Configuração técnica
- [Workflows](./workflows/README.md) - Comandos de validação

---

**Última atualização:** 2026-01-18  
**Versão:** 1.0.0  
**Fonte:** Documento descritivo oficial do projeto
