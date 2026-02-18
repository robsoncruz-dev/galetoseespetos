# 📋 Análise Estrutural — Landing Page Galeteria "Recanto da Sustenta"

> **Data:** 18/02/2026
> **Base de análise:** Pesquisa de galeterias reais + Parecer Técnico do Projeto 1 (Mermaid Viewer) + Plano de Marketing `Galeteria.md`

---

## 1. Pesquisa de Referências — Galeterias Reais

### 🔍 Sites Analisados

| Galeteria | URL | Destaques de Design |
|---|---|---|
| **Galeto Di Paolo** | dipaolo.com.br | Hero fullscreen com foto do galeto, navegação minimalista, CTA "Ver Menu" proeminente, cor predominante escura com detalhes dourados |
| **Galeto Mamma Mia** | galetomammamia.com.br | Frase de impacto ("Sabor é o nosso segredo"), storytelling do fundador, seção Delivery integrada, links para iFood e app próprio |
| **Galeteria Beira Lago** | galeteriabeiralago.com.br | Destaque para rodízio, informação de localização/eventos, foco em acompanhamentos tradicionais |
| **A Galeteria Assados** | agaleteriaassados.com.br | Duas unidades, pedidos online, opção de reservas, tradição desde 1987 |

### 📊 Padrões Identificados nos Sites Reais

| Padrão | Frequência | Aplicação para "Recanto da Sustenta" |
|---|---|---|
| **Hero com foto de galeto em destaque** | 4/4 sites | ✅ Essencial — Imagem gerada via IA como placeholder |
| **Frase de impacto** | 3/4 sites | ✅ "Galeto artesanal feito com amor" ou similar |
| **Storytelling / História** | 3/4 sites | ✅ Seção "Sobre" com narrativa do negócio |
| **CTA para pedido/delivery** | 4/4 sites | ✅ Botão WhatsApp como CTA principal |
| **Cardápio visível na landing** | 3/4 sites | ✅ 3-5 itens principais com preço |
| **Localização com mapa** | 4/4 sites | ✅ Google Maps integrado |
| **Redes sociais no footer** | 4/4 sites | ✅ Instagram, TikTok, Kwai |
| **Cores quentes (marrom/dourado/vermelho)** | 3/4 sites | ✅ Paleta quente com tons terrosos |

---

## 2. Tendências de Design 2025-2026 para Food Landing Pages

### 🎨 Tendências Aplicáveis

| Tendência | Descrição | Como aplicar |
|---|---|---|
| **Dark Theme** | Fundo escuro destaca fotos vibrantes de comida | Tema escuro com detalhes dourados/amber, toggle para light |
| **Mobile-First** | 70%+ dos acessos via celular | Desenvolver primeiro para mobile, depois desktop |
| **Hero imersivo** | Seção inicial ocupa tela inteira com imagem de impacto | Fullscreen hero com overlay de texto e CTA |
| **Micro-animações** | Transições suaves e elementos interativos | Fade-in no scroll, hover effects nos cards do cardápio |
| **Autenticidade artesanal** | Elementos que remetem a feito à mão | Texturas rústicas sutis, tipografia com caráter |
| **Glassmorphism** | Efeito de vidro fosco em cards e overlays | Cards do cardápio com blur de fundo |

---

## 3. Lições do Parecer Técnico — Projeto 1 (Mermaid Viewer)

> **Referência:** `duvidas.md`, seção 5 — Nota: **8.9/10**

### ✅ O que repetir (sucessos do Projeto 1)

| Prática | Resultado no P1 | Aplicação na Landing Page |
|---|---|---|
| **CSS Custom Properties para temas** | 🟢 Padrão profissional | Usar `--bg-primary`, `--accent`, `--text` etc. para sistema de cores |
| **Persistência com localStorage** | 🟢 Tema salvo | Salvar preferência dark/light do usuário |
| **Tratamento de erros** | 🟢 Feedback claro | Fallbacks para imagens, mapa offline, etc. |
| **Responsividade com media queries** | 🟢 Mobile-friendly | Media queries para 768px, 480px |
| **SEO básico** | 🟢 Meta tags corretas | `<title>`, `<meta description>`, `viewport`, `lang="pt-BR"` |
| **Documentação completa** | 🟢 `inicio.md` detalhado | Manter documentação do processo |

### ⚠️ O que corrigir (pontos de atenção do P1)

| Ponto de Atenção | No P1 | Correção na Landing Page |
|---|---|---|
| **Arquivo único de 968 linhas** | 🟡 Ok para P1, mas não recomendado | ✅ **Separar em 3 arquivos:** `index.html`, `style.css`, `script.js` |
| **Sem testes** | 🟡 Esperado no P1 | ✅ Verificação manual no navegador + checklist de responsividade |
| **Sem README.md no repositório** | ⚠️ Faltou | ✅ Criar `README.md` desde o início |
| **securityLevel loose** | 🟡 N/A | N/A (não usa Mermaid) |

### 🎯 Recomendações do Parecer aplicadas

1. **Separar responsabilidades** → `index.html` + `style.css` + `script.js` (3 arquivos)
2. **README.md no repo** → Criar junto com o projeto
3. **Versionamento semântico** → Iniciar com `v1.0.0` ao publicar

---

## 4. Proposta de Estrutura da Landing Page

### 📐 Wireframe em Seções

```
┌──────────────────────────────────────────────┐
│              ★ HERO SECTION ★                │
│  ┌─────────────────────────────────────────┐ │
│  │  [Logo/Nome: Recanto da Sustenta]       │ │
│  │  "Galeto artesanal feito com amor"      │ │
│  │                                         │ │
│  │  [🍗 Imagem hero do galeto dourado]     │ │
│  │                                         │ │
│  │  [ 📱 Peça pelo WhatsApp ]  ← CTA      │ │
│  └─────────────────────────────────────────┘ │
├──────────────────────────────────────────────┤
│              ★ SOBRE NÓS ★                  │
│  História curta + diferenciais               │
│  Ícones: 🔥 Na Brasa | 🌿 Tempero Caseiro  │
│          ❤️ Feito com Amor                   │
├──────────────────────────────────────────────┤
│            ★ NOSSO CARDÁPIO ★               │
│  ┌────────┐ ┌────────┐ ┌────────┐          │
│  │ Galeto │ │ Combo  │ │ Acomp. │          │
│  │ Inteiro│ │ Família│ │  Espec.│          │
│  │ R$ 35  │ │ R$ 59  │ │ R$ 12  │          │
│  └────────┘ └────────┘ └────────┘          │
│              [ Ver Cardápio Completo ]       │
├──────────────────────────────────────────────┤
│          ★ CUPOM PRIMEIRA COMPRA ★          │
│  "Mostre esta tela e ganhe 10% de desconto" │
│  Código: BEMVINDO10                          │
├──────────────────────────────────────────────┤
│            ★ HORÁRIO & LOCAL ★              │
│  📍 Endereço + Google Maps embutido          │
│  🕐 Horários de funcionamento               │
├──────────────────────────────────────────────┤
│               ★ FOOTER ★                    │
│  📱 Instagram | 🎵 TikTok | 📹 Kwai        │
│  © 2026 Recanto da Sustenta                  │
└──────────────────────────────────────────────┘
        ┌──────────────────┐
        │ 💬 WhatsApp FAB  │  ← Botão flutuante fixo
        └──────────────────┘
```

### 🎨 Design System Proposto

| Token | Valor | Uso |
|---|---|---|
| `--bg-dark` | `#1a1a1a` | Fundo principal (dark mode) |
| `--bg-light` | `#faf8f5` | Fundo principal (light mode) |
| `--accent-gold` | `#d4a057` | Destaques, badges, CTAs |
| `--accent-red` | `#c0392b` | Hover, promoções |
| `--text-primary` | `#f1f1f1` / `#2c2c2c` | Texto principal (dark/light) |
| `--text-secondary` | `#b0b0b0` / `#666666` | Texto secundário |
| `--card-bg` | `rgba(255,255,255,0.05)` | Cards com glassmorphism |
| `--font-display` | `'Playfair Display', serif` | Títulos — elegante |
| `--font-body` | `'Inter', sans-serif` | Corpo do texto — limpo |

### 📁 Estrutura de Arquivos

```
Fase_01_Landing_Page/
├── index.html          ← Estrutura semântica da landing page
├── style.css           ← Estilos (mobile-first, temas, animações)
├── script.js           ← Lógica mínima (tema, scroll, WhatsApp)
├── assets/
│   ├── hero-galeto.webp    ← Imagem hero (gerada por IA)
│   ├── galeto-inteiro.webp ← Foto cardápio item 1
│   ├── combo-familia.webp  ← Foto cardápio item 2
│   └── favicon.ico         ← Ícone da aba
├── README.md           ← Sobre o projeto e como rodar
└── estruct.md          ← Este arquivo (análise)
```

---

## 5. Checklist de Implementação

- [ ] Gerar imagens de galeto via IA para hero e cardápio
- [ ] Criar `style.css` com design system (CSS Custom Properties + mobile-first)
- [ ] Criar `index.html` com todas as seções do wireframe
- [ ] Criar `script.js` com tema dark/light, smooth scroll, WhatsApp link
- [ ] Botão flutuante do WhatsApp com mensagem pré-preenchida
- [ ] Testar responsividade (mobile 375px, tablet 768px, desktop 1440px)
- [ ] Testar em ambos os temas (dark/light)
- [ ] Criar `README.md` do projeto
- [ ] Deploy no GitHub Pages (seguindo fluxo do Projeto 1)

---

## 6. Verificação

### Testes Manuais no Navegador

1. **Abrir** `index.html` no Firefox/Chrome
2. **Verificar** cada seção (hero, sobre, cardápio, cupom, mapa, footer)
3. **Redimensionar** janela para testar responsividade (mobile → desktop)
4. **Alternar** tema dark/light e verificar que persiste ao recarregar
5. **Clicar** no botão WhatsApp e verificar que abre com mensagem pré-preenchida
6. **Verificar** mapa interativo do Google Maps (precisa de internet)
7. **Testar** smooth scroll nos links de navegação

---

> *Análise concluída. Pronto para iniciar implementação da Fase 1.* 🍗

---

## 7. Análise — Cronograma com Narrativa de Marketing

### 💡 O Insight

O dono propôs substituir a palavra **"Fechado"** nos dias sem atendimento por frases narrativas que reforçam o processo artesanal, como:
- *"Colhendo o melhor tempero"*
- *"Marinando e temperando para o melhor sabor"*

### ✅ Avaliação: Excelente Estratégia

Este insight se alinha com **3 pilares de marketing gastronômico**:

| Pilar | Como a narrativa atende |
|-------|------------------------|
| **Storytelling de marca** | Transforma uma informação "negativa" (fechado) em reforço do cuidado artesanal |
| **Percepção de valor** | O cliente entende que o produto leva *dias* de preparo — justifica preço e qualidade |
| **Diferenciação** | Galeterias industriais não precisam de dias de preparo; a narrativa destaca o artesanal |

**Por que funciona:** O cliente que vê "Preparando a brasa 🔥" em vez de "Fechado" não sente rejeição — sente **antecipação**. É a mesma técnica de pizzarias artesanais que dizem *"massa fermentando por 72h"*.

### 📋 Proposta de Cronograma Narrativo

O funcionamento real é **Sábado e Domingo**. Para os demais dias, cada frase conta uma etapa do processo:

| Dia | Status | Narrativa |
|-----|--------|-----------|
| Segunda | Descanso | 🌿 *Colhendo os melhores temperos* |
| Terça | Preparação | 🧂 *Marinando com nosso tempero secreto* |
| Quarta | Preparação | 🍋 *Temperando para o sabor perfeito* |
| Quinta | Preparação | ⏳ *Deixando o tempo fazer sua mágica* |
| Sexta | Pré-operação | 🔥 *Acendendo a brasa para o fim de semana* |
| **Sábado** | **Aberto** | **11h às 16h** |
| **Domingo** | **Aberto** | **11h às 16h** |

### 🎯 Por que essa sequência

1. **Segunda = Descanso narrativo** — referência a ingredientes frescos, pós fim de semana
2. **Terça a Quinta = Jornada de preparo** — constrói uma história linear (marinar → temperar → descansar)
3. **Sexta = Clímax** — "acendendo a brasa" cria urgência e expectativa para o sábado
4. **Sábado/Domingo = Recompensa** — o cliente chega com a percepção de que esperou por algo especial

### 🔧 Implementação no HTML

A proposta é usar **duas colunas por linha**: dia da semana (esquerda) e narrativa/horário (direita), com estilização diferente para dias abertos vs. dias narrativos:

- Dias narrativos: texto em *itálico*, cor `--text-secondary`, com emoji
- Dias abertos: texto em **negrito**, cor `--accent-gold`, destaque visual

Isso cria hierarquia visual onde Sábado e Domingo "brilham" em dourado enquanto os demais dias contam a história em tom mais suave.
