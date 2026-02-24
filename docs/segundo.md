# 🍗 Módulo 01 — Projeto 2: Galeteria "Recanto da Sustenta"

> **Objetivo:** Criar o ecossistema digital da Galeteria, evoluindo em fases — de uma landing page simples até uma integração completa com delivery e redes sociais.

---

## 📌 Contexto

O plano de marketing original já existe em [`~/comercial/Galeteria/Galeteria.md`](file:///home/bluezchips/comercial/Galeteria/Galeteria.md) (298 linhas). Ele define:
- Estratégia local (flyers, parcerias, programa de indicação)
- Presença digital (Instagram, TikTok, Kwai)
- Landing page (seção 4.1) com cardápio, WhatsApp, mapa, cupom
- Calendário de conteúdo semanal

O desafio agora é **transformar esse plano em produto digital**, crescendo em fases.

---

## 📂 Estrutura de Pastas — Avaliação

### Estrutura atual encontrada

```
~/faculdade/Antigravity/Curso/Modulo_01/Galeteria/
├── Site/       ← vazia
├── App/        ← vazia
├── Integra/    ← vazia
└── segundo.md  ← este arquivo
```

### ✅ Avaliação: A ideia está correta, mas precisa de refinamento

A separação por pastas é **boa e segue a lógica do curso** (cada fase = uma pasta). No entanto, sugiro ajustes para tornar a estrutura mais clara e escalável:

---

### 📂 Estrutura Proposta (refinada)

```
~/faculdade/Antigravity/Curso/Modulo_01/Galeteria/
│
├── segundo.md                          ← Este arquivo (proposta e análise)
│
├── Fase_01_Landing_Page/               ← 🟢 Site institucional (HTML/CSS/JS)
│   ├── index.html                      ← Landing page principal
│   ├── style.css                       ← Estilos (mobile-first)
│   └── assets/                         ← Imagens, ícones
│
├── Fase_02_Cardapio_Digital/           ← 🟡 Cardápio interativo com categorias
│   ├── index.html                      ← Página do cardápio
│   ├── cardapio.js                     ← Lógica de filtros/categorias
│   ├── style.css
│   └── dados/
│       └── cardapio.json               ← Dados do cardápio (itens, preços)
│
├── Fase_03_Sistema_Pedidos/            ← 🟠 Pedidos via WhatsApp/Integração
│   ├── index.html                      ← Carrinho + resumo do pedido
│   ├── pedido.js                       ← Lógica do carrinho
│   ├── whatsapp.js                     ← Gerador de mensagem para WhatsApp
│   └── style.css
│
└── Fase_04_Painel_Admin/              ← 🔴 Dashboard simples (gestão)
    ├── admin.html                      ← Painel de controle
    ├── admin.js                        ← Lógica de gerenciamento
    └── style.css
```

---

### 🔄 Comparativo: Estrutura Original vs. Proposta

| Aspecto | Original (`Site/App/Integra/`) | Proposta (`Fase_01.../02.../03.../04...`) |
|---|---|---|
| **Clareza** | ❌ Nomes genéricos — "Site" de quê? "App" de quê? | ✅ Nomes descritivos com número da fase |
| **Ordem** | ❌ Sem indicação de sequência | ✅ Numeração indica progressão natural |
| **Escopo** | 🟡 3 pastas — pouco granular | ✅ 4 fases bem definidas com escopo claro |
| **Nomenclatura** | 🟡 CamelCase inconsistente | ✅ Snake_case com prefixo numérico |
| **Navegação** | ❌ "Integra" — integra o quê? | ✅ Cada pasta diz exatamente o que contém |

> **Recomendação:** Renomear as pastas existentes para a estrutura proposta antes de iniciar o desenvolvimento.

---

## 🎯 Detalhamento por Fase

### Fase 1 — Landing Page 🟢

**O que é:** Site institucional de uma única página da Galeteria "Recanto da Sustenta".

| Item | Detalhe |
|---|---|
| **Base de conteúdo** | Seção 4.1 do `Galeteria.md` |
| **Escopo** | 1 arquivo HTML + 1 CSS + assets |
| **Complexidade** | 🟢 Baixa |
| **Tempo estimado** | 1-2 horas |

**Seções da landing page:**

| Seção | Conteúdo | Prioridade |
|---|---|---|
| **Hero** | Nome "Recanto da Sustenta" + frase de impacto + foto/ilustração | ⭐ Essencial |
| **Sobre** | História rápida da galeteria, diferenciais | ⭐ Essencial |
| **Cardápio resumido** | 3-5 itens principais com preço | ⭐ Essencial |
| **Localização** | Endereço + mapa (Google Maps embed) | ⭐ Essencial |
| **WhatsApp** | Botão flutuante + link direto com mensagem pré-preenchida | ⭐ Essencial |
| **Horário** | Dias e horários de funcionamento | ⭐ Essencial |
| **Cupom** | "Mostre este cupom e ganhe 10% na primeira compra" | ⭐⭐ Desejável |
| **Redes sociais** | Links Instagram, TikTok, Kwai | ⭐⭐ Desejável |

**Habilidades praticadas:**
- Transformar documento `.md` em instrução para o agente
- Criar site responsivo com resultado visual atraente
- Iterar com feedback visual

---

### Fase 2 — Cardápio Digital 🟡

**O que é:** Cardápio interativo com categorias, filtros e visual atrativo.

| Item | Detalhe |
|---|---|
| **Novidade técnica** | Dados em JSON separados do HTML (separação dados/view) |
| **Escopo** | HTML + CSS + JS + JSON |
| **Complexidade** | 🟡 Média-baixa |
| **Tempo estimado** | 2-3 horas |

**Features:**

| Feature | Descrição |
|---|---|
| Categorias | Galetos, Acompanhamentos, Bebidas, Combos |
| Filtros | Filtrar por categoria (tabs ou botões) |
| Preços | Exibir preços formatados em R$ |
| Imagens | Foto de cada item (pode usar imagens geradas) |
| Destaque | Item em promoção com badge visual |

**Habilidades praticadas:**
- Trabalhar com dados externos (JSON)
- Manipulação do DOM com JavaScript vanilla
- Componentização visual (cards de produto)

---

### Fase 3 — Sistema de Pedidos 🟠

**O que é:** Carrinho simples que gera mensagem formatada para WhatsApp.

| Item | Detalhe |
|---|---|
| **Novidade técnica** | Estado do carrinho, localStorage, URL API do WhatsApp |
| **Escopo** | HTML + CSS + JS (múltiplos arquivos JS) |
| **Complexidade** | 🟠 Média |
| **Tempo estimado** | 3-4 horas |

**Features:**

| Feature | Descrição |
|---|---|
| Adicionar ao carrinho | Botão em cada item do cardápio |
| Quantidade | +/- para ajustar quantidade |
| Resumo | Sidebar/modal com itens selecionados e total |
| WhatsApp | Gera mensagem formatada e abre WhatsApp com pedido completo |
| Persistência | Carrinho salvo em localStorage (não perde ao recarregar) |

**Exemplo de mensagem gerada para WhatsApp:**

```
🍗 *Pedido — Recanto da Sustenta*

1x Galeto Inteiro (R$ 35,00)
2x Farofa Especial (R$ 12,00)
1x Guaraná 2L (R$ 10,00)

*Total: R$ 69,00*

📍 Retirar no local
```

**Habilidades praticadas:**
- Gerenciamento de estado (carrinho)
- Integração com API externa (WhatsApp URL scheme)
- localStorage avançado

---

### Fase 4 — Painel Admin 🔴

**O que é:** Dashboard simples para o dono gerenciar cardápio e ver estatísticas.

| Item | Detalhe |
|---|---|
| **Novidade técnica** | CRUD local, edição de JSON via interface |
| **Escopo** | HTML + CSS + JS |
| **Complexidade** | 🔴 Média-alta |
| **Tempo estimado** | 4-5 horas |

**Features:**

| Feature | Descrição |
|---|---|
| Listar itens | Tabela com todos os itens do cardápio |
| Adicionar item | Formulário para novo item (nome, preço, categoria) |
| Editar/Excluir | Inline edit ou modal de edição |
| Promoções | Marcar item como promoção com preço especial |
| Exportar | Salvar cardápio atualizado como JSON |

**Habilidades praticadas:**
- CRUD completo (Create, Read, Update, Delete)
- Formulários com validação
- Manipulação avançada de dados

---

## 📊 Visão Geral da Evolução

```
Fase 1             Fase 2             Fase 3             Fase 4
Landing Page   →   Cardápio Digital  →  Pedidos WhatsApp  →  Painel Admin
🟢 Simples         🟡 Médio-baixo       🟠 Médio             🔴 Médio-alto
1-2h               2-3h                 3-4h                 4-5h

HTML+CSS            + JavaScript         + Estado/Storage     + CRUD
                    + JSON               + Integração         + Dashboard
```

**Evolução de complexidade:**

| Fase | Tecnologia nova | Conceito novo |
|---|---|---|
| 1 | HTML/CSS puro | Layout responsivo, design atrativo |
| 2 | JavaScript + JSON | Dados separados da apresentação |
| 3 | localStorage + URL API | Estado, persistência, integração |
| 4 | CRUD interface | Gerenciamento de dados via UI |

---

## ✅ Parecer Técnico sobre a Estrutura

### O que está **certo** ✅

1. **Projeto com escala progressiva** — Cada fase adiciona complexidade real, não artificial
2. **Projeto útil** — O resultado é funcional para um negócio real
3. **Dentro do Módulo 01** — Todas as fases usam HTML/CSS/JS vanilla, coerente com o nível iniciante do curso
4. **Pastas separadas por fase** — Isolamento correto; cada fase pode ser trabalhada em instância separada
5. **Continuidade com Projeto 1** — O aluno já praticou HTML/CSS/JS no Mermaid Viewer; agora aplica em contexto de negócio

### O que sugiro **melhorar** ⚠️

1. **Renomear as pastas** — `Site/App/Integra/` → `Fase_01_Landing_Page/`, etc.
2. **Compartilhar assets entre fases** — Considerar uma pasta `_shared/` para logo, cores, fontes que são comuns
3. **README por fase** — Cada pasta de fase deveria ter um `README.md` com o que foi feito e aprendido

### O que **não** fazer ❌

1. **Não usar frameworks** — React/Vue/etc. ficam para módulos futuros. Aqui é vanilla
2. **Não pular fases** — A progressão é proposital; cada fase constrói sobre a anterior
3. **Não unificar tudo em um arquivo** — Diferente do Mermaid Viewer, aqui o objetivo é praticar separação de arquivos

---

## 🚀 Próximo Passo

> **Recomendação:** Renomear as pastas existentes para a estrutura proposta e iniciar a **Fase 1 — Landing Page** em uma instância separada do Antigravity, referenciando o `Galeteria.md` como base de conteúdo.

---

> *Projeto 2 — Do plano de marketing ao produto digital, passo a passo.* 🍗
