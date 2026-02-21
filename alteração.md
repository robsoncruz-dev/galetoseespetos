# 📋 Alteração da Semana — Galeteria Recanto da Sustenta

## Entendimento da Tarefa

Entendi que o site funciona como uma **landing page semanal** que é atualizada conforme a oferta de cada semana. Esta semana, temos **3 mudanças principais** a serem feitas:

---

## 1. 🚫 Remoção das Bebidas

**Situação atual:** O cardápio possui 4 cards — Galeto Inteiro, Combo Família, Acompanhamentos e **Bebidas**.

**O que fazer:** Remover completamente o card de Bebidas do cardápio, pois **não haverá bebidas nesta semana**. Isso inclui:
- Remover o bloco HTML do card de Bebidas (linhas 180-192 do `index.html`)
- A imagem `assets/bebidas.png` pode ser mantida no repositório para semanas futuras, mas não será referenciada

> [!NOTE]
> O grid passará de 4 cards para 4 cards igualmente, pois estamos substituindo Bebidas e Combo Família por Meio Galeto e os combos com guarnição.

---

## 2. 💰 Atualização de Preços e Itens do Cardápio

O cardápio atual será **completamente reestruturado**. Sai o antigo esquema e entra:

| Item | Preço Atual | Novo Preço |
|------|-------------|------------|
| Galeto Inteiro | R$ 89,90 | **R$ 79,99** |
| Meio Galeto | *(não existia)* | **R$ 47,99** |
| Galeto com Guarnição (Salpicão / Feijão Tropeiro / Batatas Assadas) | R$ 139,90 (antigo Combo Família) | **R$ 119,90** |
| Meio Galeto com Guarnição (Salpicão / Feijão Tropeiro / Batatas Assadas) | *(não existia)* | **R$ 69,99** |

### Detalhamento das mudanças no HTML:

- **Card 1 — Galeto Inteiro:** Atualizar preço de R$ 89,90 → R$ 79,99
- **Card 2 — Meio Galeto *(NOVO)*:** Substituir o "Combo Família" por "Meio Galeto" com preço R$ 47,99
- **Card 3 — Galeto com Guarnição:** Substituir "Acompanhamentos" por "Galeto com Guarnição" com as guarnições específicas (Salpicão, Feijão Tropeiro, Batatas Assadas) e preço R$ 119,90
- **Card 4 — Meio Galeto com Guarnição *(NOVO)*:** Substituir "Bebidas" por "Meio Galeto com Guarnição" com as mesmas guarnições e preço R$ 69,99

---

## 3. 🖼️ Adequação das Imagens

As imagens precisam ser **coerentes com os novos itens do cardápio**. Aqui está a situação:

| Card | Imagem Atual | O que precisa |
|------|-------------|---------------|
| Galeto Inteiro | `galeto-inteiro.png` — ✅ Está boa, galeto inteiro dourado no prato | Pode manter, já representa bem |
| Meio Galeto | `combo-familia.png` — ❌ Mostra galeto inteiro com acompanhamentos | **Precisa trocar** — deve mostrar um meio galeto (galeto cortado ao meio / metade de um galeto) |
| Galeto com Guarnição | `acompanhamentos.png` — ❌ Mostra polenta e farofa, não as guarnições certas | **Precisa trocar** — deve mostrar galeto inteiro acompanhado de salpicão, feijão tropeiro e batatas assadas |
| Meio Galeto com Guarnição | `bebidas.png` — ❌ Mostra bebidas | **Precisa trocar** — deve mostrar meio galeto acompanhado de salpicão, feijão tropeiro e batatas assadas |
| Hero | `hero-galeto.png` — ✅ Galeto inteiro na brasa com vapor | Pode manter |

### ⚠️ Estratégia para Geração de Imagens

O ponto crítico aqui é: **as imagens precisam parecer reais (fotos de comida)**, não geradas por IA. Para isso, a abordagem será:

1. **Estudar referências visuais reais** de:
   - **Meio galeto:** Como é servido em galeteiras reais — geralmente é um galeto cortado longitudinalmente ao meio, mostrando a carne exposta, dourado, servido em prato ou tábua
   - **Guarnições brasileiras:** Salpicão (salada com frango desfiado, cenoura, milho, maionese), feijão tropeiro (feijão com farinha, bacon, ovos, couve), batatas assadas (batatas rústicas douradas)

2. **Manter consistência visual** com as imagens existentes:
   - Iluminação quente (tom dourado/âmbar)
   - Cenário rústico (madeira, tigelas de barro, parede de pedra)
   - Estilo food photography profissional
   - Fundo escuro/desfocado (estilo restaurante)

3. **Gerar 3 novas imagens** mantendo a estética coerente:
   - `meio-galeto.png` — Meio galeto sozinho no prato/tábua
   - `galeto-guarnicao.png` — Galeto inteiro + salpicão + feijão tropeiro + batatas assadas
   - `meio-galeto-guarnicao.png` — Meio galeto + salpicão + feijão tropeiro + batatas assadas

---

## Resumo Visual da Transformação

```
ANTES (4 cards):                    DEPOIS (4 cards):
┌─────────────────────┐            ┌──────────────────────────────┐
│ Galeto Inteiro      │            │ Galeto Inteiro               │
│ R$ 89,90            │     →      │ R$ 79,99                     │
│ (imagem mantida)    │            │ (imagem mantida)             │
├─────────────────────┤            ├──────────────────────────────┤
│ Combo Família       │            │ Meio Galeto                  │
│ R$ 139,90           │     →      │ R$ 47,99                     │
│ (imagem: combo)     │            │ (NOVA imagem: meio galeto)   │
├─────────────────────┤            ├──────────────────────────────┤
│ Acompanhamentos     │            │ Galeto + Guarnição           │
│ R$ 14,99            │     →      │ R$ 119,90                    │
│ (imagem: porções)   │            │ (NOVA imagem: galeto+guarn.) │
├─────────────────────┤            ├──────────────────────────────┤
│ Bebidas             │            │ Meio Galeto + Guarnição      │
│ R$ 8,99             │     →      │ R$ 69,99                     │
│ (imagem: bebidas)   │            │ (NOVA imagem: meio+guarn.)   │
└─────────────────────┘            └──────────────────────────────┘
```

---

## Arquivos que Serão Alterados

| Arquivo | Tipo de Alteração |
|---------|-------------------|
| `index.html` | Atualização dos 4 cards do cardápio (textos, preços, referências de imagens) |
| `assets/meio-galeto.png` | **NOVA** — Imagem de meio galeto |
| `assets/galeto-guarnicao.png` | **NOVA** — Imagem de galeto inteiro + guarnições |
| `assets/meio-galeto-guarnicao.png` | **NOVA** — Imagem de meio galeto + guarnições |

> [!IMPORTANT]
> As imagens antigas (`combo-familia.png`, `acompanhamentos.png`, `bebidas.png`) **não serão deletadas** do repositório — apenas deixarão de ser referenciadas no HTML. Assim, podem ser reutilizadas em semanas futuras.

---

## Ordem de Execução

1. Pesquisar referências visuais reais de meio galeto e guarnições brasileiras
2. Gerar as 3 novas imagens com máxima fidelidade ao estilo fotográfico existente
3. Atualizar o `index.html` com os novos cards, textos, preços e referências de imagem
4. Verificar tudo no navegador

---

## 🔧 Ajuste Pós-Execução: Proporção das Guarnições

### Problema Identificado

Ao comparar as duas imagens com guarnição, percebe-se que as **tigelas de salpicão, feijão tropeiro e batatas assadas** são do **mesmo tamanho** tanto na foto do **Galeto Inteiro com Guarnição** quanto na foto do **Meio Galeto com Guarnição**.

Isso gera uma **incoerência visual e comercial:**
- Se o cliente paga R$ 119,90 pelo galeto inteiro com guarnição completa...
- ...e paga R$ 69,99 pelo meio galeto com guarnição...
- ...não faz sentido as porções de guarnição parecerem **idênticas** nas duas fotos.
- O cliente pode questionar: "Qual a diferença real entre os dois combos além de meio frango?"

### Solução

Regenerar **apenas** a imagem `meio-galeto-guarnicao.png` com as seguintes diferenças visuais em relação à versão do galeto inteiro:

| Elemento | Galeto Inteiro + Guarnição | Meio Galeto + Guarnição |
|----------|---------------------------|------------------------|
| Galeto | Inteiro, grande | Metade, menor |
| Tigelas de guarnição | Grandes, cheias | **Menores, com menos conteúdo** |
| Tábua/prato | Grande, farta | **Mais compacta, proporcional** |

A ideia é que a foto do "Meio Galeto com Guarnição" transmita visualmente a sensação de uma **refeição individual proporcionada**, enquanto a do "Galeto Inteiro com Guarnição" transmita a sensação de uma **refeição farta para compartilhar**.

### O que será feito

1. Gerar nova imagem `meio-galeto-guarnicao.png` com:
   - Tigelas/bowls menores (tipo ramekin ou tigela pequena)
   - Quantidade visivelmente menor de cada guarnição
   - Tábua ou prato menor, mais compacto
   - Manter a mesma estética (iluminação, cenário, estilo)
2. Substituir a imagem no `assets/`
3. Verificar no navegador

---

## 🎟️ Substituição da Seção de Cupom (BEMVINDO10)

### Situação Atual

A seção de promoção exibe o cupom `BEMVINDO10` com 10% de desconto na primeira compra. Como **não será aplicado esta semana**, precisamos substituir esse espaço por algo útil.

### Sugestões de Substituição

#### **Opção 1 — Chamada para o WhatsApp (Pedido Rápido)**
Transformar a seção num CTA direto para pedidos. Aproveita o destaque visual da seção para converter:
- 🍗 **"Peça agora pelo WhatsApp!"**
- *"Mande uma mensagem e garanta seu galeto fresquinho saindo da brasa."*
- Botão grande do WhatsApp com link direto

> **Vantagem:** Direciona para ação imediata de compra — a seção vira uma "máquina de conversão"

#### **Opção 2 — Depoimento / Prova Social**
Simular um depoimento de cliente satisfeito, gerando confiança:
- ⭐⭐⭐⭐⭐
- *"Melhor galeto da região! Sempre crocante e suculento. Minha família inteira adora."*
- — Maria S., cliente frequente

> **Vantagem:** Gera credibilidade, principalmente por ser uma galeteria nova/em inauguração

#### **Opção 3 — Dica da Semana / Novidade**
Usar o espaço para destacar o que há de **novo esta semana**:
- 🆕 **"Novidade da semana!"**
- *"Agora temos Meio Galeto! Porção individual com o mesmo sabor artesanal, ideal para você."*
- Preço em destaque: **a partir de R$ 47,99**

> **Vantagem:** Divulga o novo item que os clientes talvez não conheçam ainda

#### **Opção 4 — Informação sobre Encomendas**
Informar sobre encomendas antecipadas ou eventos:
- 📦 **"Faça sua encomenda!"**
- *"Planejando um churrasco ou evento? Encomende seus galetos com antecedência pelo WhatsApp."*

> **Vantagem:** Abre uma nova frente de receita (eventos, festas, reuniões)

#### **Opção 5 — Manter a Seção Oculta**
Simplesmente remover/ocultar a seção inteira. O site ficaria: Hero → Sobre → Cardápio → Localização → Footer.

> **Vantagem:** Mais limpo, sem "enrolação". Porém desperdiça um ponto visual de destaque no site.

### Minha Recomendação

Eu iria de **Opção 3 (Novidade da Semana)**, pois:
- O "Meio Galeto" é um item **novo** que os clientes não conhecem
- É a informação mais relevante e diferenciada da semana
- Aproveita o destaque visual da seção para divulgar o que há de novo
- Pode ser facilmente atualizada a cada semana com a novidade do momento

---

## 🎭 Opção 6 — Teaser "Cortina de Mistério" (Análise)

### A Ideia

Ao invés de substituir o cupom por outra informação, **criar um efeito de antecipação**: algo "escondido" atrás de uma cortina/véu visual, com uma mensagem que gera curiosidade, tipo:

> *"Uma novidade que vai te surpreender está chegando... 👀"*

O conceito é: o cliente vê que **tem algo ali**, mas não sabe o quê. Isso gera o impulso de **voltar ao site** na próxima semana para descobrir.

### Por que funciona (Análise de Marketing)

1. **Gatilho de Curiosidade** — O cérebro humano não tolera bem a incompletude. Quando algo é parcialmente revelado, criamos uma necessidade natural de "fechar" essa informação (*efeito Zeigarnik*).

2. **Retenção e Retorno** — O cliente que vê o teaser tem um motivo concreto para voltar ao site: descobrir a novidade.

3. **Valorização da Promoção Futura** — Quando o cupom finalmente aparecer, terá mais impacto emocional. O cliente já estava esperando.

4. **Baixo Custo, Alto Engajamento** — Não precisa oferecer nada agora. O simples ato de "esconder" algo já gera engajamento.

### Como seria visualmente

```
┌──────────────────────────────────────────────┐
│                                              │
│                 🎁 ou 👀                     │
│                                              │
│     "Algo especial está sendo preparado      │
│          para você... Aguarde! 🔥"           │
│                                              │
│        ┌─────────────────────────┐           │
│        │   ? ? ? ? ? ? ? ? ? ?  │  ← blur   │
│        │   EM BREVE AQUI...     │  ← desfoque│
│        └─────────────────────────┘           │
│                                              │
│   "Fique de olho — você vai                  │
│    se surpreender 😉"                        │
│                                              │
└──────────────────────────────────────────────┘
```

### Possíveis Variações de Mensagem

| Variação | Texto Principal | Texto Secundário |
|----------|----------------|------------------|
| Mistério | 🎁 *"Tem surpresa vindo aí..."* | "Fique de olho, novidades em breve!" |
| Construção | 🚧 *"Algo especial em construção"* | "Estamos preparando algo especial pra você" |
| Elegante | ✨ *"Em breve, um presentinho pra você"* | "Acompanhe nossas novidades pelo WhatsApp" |

### Implementação Técnica

O efeito visual pode ser feito **apenas com CSS**, sem JavaScript adicional:
- **CSS blur/desfoque** sobre o texto do cupom (como se estivesse atrás de um vidro fosco)
- **Gradiente de cortina** com animação sutil de "respiração/pulso"
- **Ícone animado** (🎁 pulsando ou brilhando com `@keyframes`)
- O bloco do `promo-code` vira uma caixa com `? ? ? ? ?` e borda pontilhada com efeito desfocado

### Minha Opinião

Acho essa abordagem **muito mais inteligente** que as opções anteriores:

- ✅ Não desperdiça o espaço visual de destaque
- ✅ Gera curiosidade e motivo para o cliente voltar
- ✅ Quando o cupom voltar, o impacto será maior
- ✅ É elegante — mostra profissionalismo e planejamento
- ✅ Pode ser reutilizado sempre que não houver promoção ativa

**Recomendo fortemente esta abordagem.** Qual variação de mensagem prefere?

