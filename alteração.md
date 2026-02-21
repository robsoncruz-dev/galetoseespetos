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
