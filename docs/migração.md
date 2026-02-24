# 🚀 Migração — Galeteria: De Projeto de Curso → Projeto Comercial

> **Data:** 23/02/2026  
> **De:** `~/faculdade/Antigravity/Curso/Modulo_01/Galeteria/Fase_01_Landing_Page/`  
> **Para:** `~/comercial/Galeteria/`  
> **Domínios adquiridos:** `galetoseespetos.com.br` · `galetoseespetos.com` · `galetoseespetos.store` · `galetoseespetos.online`

---

## 📌 Situação Atual

| Item | Valor |
|---|---|
| **Repositório GitHub** | `robsoncruz-dev/galeteria-recanto-da-sustenta` |
| **Branch** | `main` |
| **Deploy atual** | GitHub Pages (gratuito) |
| **URL atual** | `robsoncruz-dev.github.io/galeteria-recanto-da-sustenta` |
| **Workflow** | `.github/workflows/static.yml` (deploy automático no push) |
| **Commits** | 5+ commits com histórico de evolução |
| **Pasta local** | `~/faculdade/.../Galeteria/Fase_01_Landing_Page/` |
| **Pasta comercial existente** | `~/comercial/Galeteria/` (contém apenas `Galeteria.md` — plano de marketing) |

---

## 🎯 Objetivo da Migração

1. **Mover o projeto** para `~/comercial/Galeteria/` como projeto comercial definitivo
2. **Criar novo repositório** no GitHub com nome profissional
3. **Manter hospedagem gratuita** no GitHub Pages
4. **Configurar domínio customizado** usando os domínios comprados
5. **Preservar o histórico** de commits do projeto original

---

## 🧠 Análise Estratégica dos 4 Domínios

### Recomendação de uso

| Domínio | Uso recomendado | Justificativa |
|---|---|---|
| **galetoseespetos.com.br** | 🏆 **Domínio principal** | `.com.br` é o padrão brasileiro, passa confiança ao público local |
| **galetoseespetos.com** | 🔄 **Redirect → .com.br** | Proteção de marca internacional, redireciona para o principal |
| **galetoseespetos.store** | 🛒 **Futuro: loja/delivery** | Ideal para quando o sistema de pedidos online (Fase 3) estiver pronto |
| **galetoseespetos.online** | 📱 **Futuro: cardápio digital** | Link curto para clientes acessarem o cardápio pelo celular |

> [!TIP]
> **Para agora:** Use apenas `galetoseespetos.com.br` como domínio principal no GitHub Pages e `galetoseespetos.com` como redirect. Os outros dois podem ser configurados futuramente quando houver mais páginas/subprojetos.

> [!IMPORTANT]
> O GitHub Pages suporta **apenas 1 domínio customizado por repositório**. Para usar múltiplos domínios apontando para o mesmo site, você precisará configurar os redirects no **registrador DNS** (onde comprou os domínios), não no GitHub.

---

## 📂 Estrutura Proposta — Pasta Comercial

```
~/comercial/Galeteria/
│
├── Galeteria.md                    ← Plano de marketing (já existe)
├── migração.md                     ← Este documento (será movido junto)
├── CNAME                           ← Arquivo para GitHub Pages + domínio custom
├── README.md                       ← Descrição profissional do projeto
├── index.html                      ← Landing page principal
├── style.css                       ← Estilos
├── script.js                       ← Lógica
├── assets/                         ← Imagens e recursos
│   └── ...
├── .github/
│   └── workflows/
│       └── static.yml              ← Deploy automático
└── docs/                           ← Documentação interna (não vai pro deploy)
    ├── Galeteria.md                ← Plano de marketing
    ├── migração.md                 ← Este arquivo
    ├── segundo.md                  ← Planejamento original das fases
    └── avaliação_modulo_01.md      ← Avaliação do módulo
```

> [!NOTE]
> Os arquivos de documentação (`.md`) devem ir para uma pasta `docs/` para manter a raiz limpa e profissional. O `Galeteria.md` do plano de marketing também se move para `docs/`.

---

## 🔀 Estratégia Git — Duas Opções

### Opção A: Novo Repositório (✅ Recomendada)

**Vantagens:**
- Nome profissional limpo (`galetoseespetos` em vez de `galeteria-recanto-da-sustenta`)
- Configuração limpa do GitHub Pages com domínio custom desde o início
- Separação clara entre projeto de aprendizado e projeto comercial
- URL do Pages será `galetoseespetos.com.br` e não um subpath longo

**Desvantagens:**
- Perde o histórico de commits (a menos que faça um mirror, conforme detalhado abaixo)

---

### Opção B: Renomear o Repositório Existente

**Vantagens:**
- Mantém todo o histórico de commits
- Menos trabalho de configuração

**Desvantagens:**
- O repository antigo pode ter configurações residuais do Pages
- Renomear pode causar redirects automáticos no GitHub (ficam ativos por um tempo, depois expiram)
- Menos "profissional" — carrega a história do projeto educacional

---

### 🏆 Recomendação: Opção A com Preservação de Histórico

A melhor abordagem é **criar um novo repositório** mas **copiar o histórico Git** junto. Isso dá o melhor dos dois mundos.

---

## 📋 Passo a Passo Completo da Migração

### Fase 1 — Preparar a Pasta Comercial

```bash
# 1. Copiar os arquivos do projeto para a pasta comercial
cp -r ~/faculdade/Antigravity/Curso/Modulo_01/Galeteria/Fase_01_Landing_Page/* \
      ~/comercial/Galeteria/

# 2. Copiar a pasta .git (preserva o histórico!)
cp -r ~/faculdade/Antigravity/Curso/Modulo_01/Galeteria/Fase_01_Landing_Page/.git \
      ~/comercial/Galeteria/

# 3. Copiar o workflow do GitHub Actions
cp -r ~/faculdade/Antigravity/Curso/Modulo_01/Galeteria/Fase_01_Landing_Page/.github \
      ~/comercial/Galeteria/

# 4. Copiar a documentação para a pasta docs/
mkdir -p ~/comercial/Galeteria/docs
cp ~/faculdade/Antigravity/Curso/Modulo_01/Galeteria/segundo.md \
   ~/comercial/Galeteria/docs/
cp ~/faculdade/Antigravity/Curso/Modulo_01/Galeteria/avaliação_modulo_01.md \
   ~/comercial/Galeteria/docs/
# Mover o Galeteria.md (plano de marketing) para docs/
mv ~/comercial/Galeteria/Galeteria.md ~/comercial/Galeteria/docs/
```

### Fase 2 — Criar o Novo Repositório no GitHub

```bash
# 1. Ir para a pasta comercial
cd ~/comercial/Galeteria/

# 2. Criar o arquivo CNAME para domínio customizado
echo "galetoseespetos.com.br" > CNAME

# 3. Atualizar o README.md para versão profissional
# (será feito um README adequado)

# 4. Criar o novo repositório no GitHub via CLI
gh repo create galetoseespetos --public --source=. --push

# OU, se preferir criar manualmente no GitHub:
# - Vá em github.com → New Repository → Nome: galetoseespetos
# - NÃO inicialize com README, .gitignore ou license
# - Depois, localmente:
git remote set-url origin https://github.com/robsoncruz-dev/galetoseespetos.git
```

### Fase 3 — Configurar e Fazer o Push

```bash
# 1. Adicionar todos os arquivos novos
git add .

# 2. Commit da migração
git commit -m "chore: migração para projeto comercial com domínio customizado"

# 3. Push para o novo repositório
git push -u origin main
```

### Fase 4 — Configurar GitHub Pages + Domínio Custom

#### No GitHub (via browser):

1. Vá em **Settings** → **Pages** do novo repositório
2. Em **Source**, selecione: **GitHub Actions**
3. Em **Custom domain**, digite: `galetoseespetos.com.br`
4. Marque ✅ **Enforce HTTPS**
5. Clique **Save**

#### No Registrador de Domínios (onde comprou os domínios):

Você precisará adicionar registros **DNS** para que o domínio aponte para o GitHub Pages.

**Para `galetoseespetos.com.br` (domínio principal):**

| Tipo | Host | Valor | TTL |
|---|---|---|---|
| `A` | `@` | `185.199.108.153` | 3600 |
| `A` | `@` | `185.199.109.153` | 3600 |
| `A` | `@` | `185.199.110.153` | 3600 |
| `A` | `@` | `185.199.111.153` | 3600 |
| `CNAME` | `www` | `robsoncruz-dev.github.io` | 3600 |

> [!IMPORTANT]
> Os 4 IPs `185.199.10X.153` são os servidores oficiais do GitHub Pages. Todos devem ser adicionados para redundância.

**Para `galetoseespetos.com` (redirect):**

| Tipo | Host | Valor | TTL |
|---|---|---|---|
| `CNAME` | `@` ou `www` | `galetoseespetos.com.br` | 3600 |

> [!NOTE]
> A maioria dos registradores oferece opção de **"Redirecionamento de domínio"** ou **"Forwarding"**, que é mais simples do que configurar DNS manualmente para redirects. Procure essa opção no painel do registrador.

---

### Fase 5 — Verificação

```bash
# 1. Verificar se o site está no ar
curl -I https://galetoseespetos.com.br

# 2. Verificar se o HTTPS está funcionando
curl -I https://www.galetoseespetos.com.br

# 3. Verificar propagação DNS (pode levar até 48h)
dig galetoseespetos.com.br +short

# 4. Testar no navegador
# Acessar: https://galetoseespetos.com.br
```

### Fase 6 — Limpar o Repositório Antigo

```bash
# Opção 1: Arquivar o repositório antigo (recomendado)
# No GitHub → Settings → Danger Zone → Archive this repository

# Opção 2: Deletar (se não quiser manter)
# gh repo delete robsoncruz-dev/galeteria-recanto-da-sustenta --yes
```

> [!CAUTION]
> **Não delete o repositório antigo imediatamente!** Espere até confirmar que o novo está funcionando 100%. Arquive-o primeiro — você pode deletar depois de algumas semanas.

---

## ⚠️ Nuances e Cuidados Importantes

### 1. GitHub Pages — Limitações com Múltiplos Domínios

O GitHub Pages suporta **apenas 1 domínio customizado** por repositório. Para os 4 domínios:

| Domínio | Configuração |
|---|---|
| `galetoseespetos.com.br` | ✅ Configurado diretamente no GitHub Pages (CNAME) |
| `galetoseespetos.com` | 🔄 Redirect no registrador → `.com.br` |
| `galetoseespetos.store` | 🔄 Redirect no registrador → `.com.br` (ou guardar para futuro) |
| `galetoseespetos.online` | 🔄 Redirect no registrador → `.com.br` (ou guardar para futuro) |

### 2. Sobre o `www` vs sem `www`

- Configure **ambos** (`galetoseespetos.com.br` e `www.galetoseespetos.com.br`)
- O GitHub Pages faz o redirect automaticamente entre um e outro
- Escolha um como principal (recomendo **sem** `www` — mais moderno e curto)

### 3. Tempo de Propagação DNS

- Mudanças DNS podem levar de **5 minutos a 48 horas** para propagar
- O certificado HTTPS do GitHub Pages pode levar **até 24h** para ser emitido
- Durante esse período, o site pode mostrar erro de certificado — é normal

### 4. Arquivo CNAME

- O arquivo `CNAME` na raiz do repositório **deve conter apenas o domínio**, sem `https://` e sem barra final
- Conteúdo correto: `galetoseespetos.com.br`
- Conteúdo errado: `https://galetoseespetos.com.br/`

### 5. O que Acontece com o Projeto na Pasta `faculdade`

O projeto original em `~/faculdade/Antigravity/Curso/Modulo_01/Galeteria/` **deve permanecer intocado** como referência do curso. Ele é um marco de aprendizado. Apenas:

- Não faça mais edições nessa pasta
- Toda evolução acontece em `~/comercial/Galeteria/`
- Se quiser, adicione uma nota no `segundo.md` indicando que o projeto migrou

### 6. Convenção de Nome do Repositório

| Nome | Análise |
|---|---|
| `galetoseespetos` | ✅ Limpo, match com o domínio, fácil de lembrar |
| `galetoseespetos-site` | ⚠️ Ok, mas redundante — todo repo no Pages é um site |
| `galetoseespetos.com.br` | ❌ Pontos e TLD no nome do repo é má prática |
| `galetos-e-espetos` | ⚠️ Ok, mas não dá match exato com os domínios |

**Recomendação:** `galetoseespetos` (sem hífens, sem extensão)

---

## 📊 Diagrama da Migração

```mermaid
flowchart TD
    A["📁 ~/faculdade/.../Galeteria/Fase_01_Landing_Page/"] -->|"Copiar arquivos + .git"| B["📁 ~/comercial/Galeteria/"]
    A -->|"Manter como arquivo de curso"| C["🗃️ Projeto de aprendizado (arquivado)"]
    
    B -->|"git remote set-url"| D["🌐 github.com/robsoncruz-dev/galetoseespetos"]
    D -->|"GitHub Pages + CNAME"| E["🌍 galetoseespetos.com.br"]
    
    F["galetoseespetos.com"] -->|"DNS Redirect"| E
    G["galetoseespetos.store"] -->|"Futuro"| H["🛒 Loja/Delivery"]
    I["galetoseespetos.online"] -->|"Futuro"| J["📱 Cardápio Digital"]
    
    K["🗃️ github.com/.../galeteria-recanto-da-sustenta"] -->|"Arquivar"| L["📦 Repositório arquivado"]
```

---

## ✅ Checklist de Migração

- [ ] Copiar arquivos do projeto para `~/comercial/Galeteria/`
- [ ] Copiar pasta `.git` para preservar histórico
- [ ] Copiar pasta `.github/workflows/`
- [ ] Organizar documentação em `docs/`
- [ ] Criar arquivo `CNAME` com `galetoseespetos.com.br`
- [ ] Atualizar `README.md` para versão profissional
- [ ] Criar novo repositório `galetoseespetos` no GitHub
- [ ] Mudar o remote do Git para o novo repositório
- [ ] Fazer commit e push
- [ ] Configurar GitHub Pages no novo repositório
- [ ] Configurar DNS do domínio `.com.br` apontando para GitHub Pages
- [ ] Configurar redirect do `.com` para `.com.br`
- [ ] Aguardar propagação DNS (até 48h)
- [ ] Verificar HTTPS funcionando
- [ ] Testar acesso pelo domínio customizado
- [ ] Arquivar repositório antigo no GitHub
- [ ] Adicionar nota no `segundo.md` sobre a migração

---

## 🔮 Visão Futura — Quando Escalar Além do GitHub Pages

O GitHub Pages é **perfeito para agora** (landing page estática, gratuita, com HTTPS). Mas quando as fases futuras exigirem backend (Fase 3 — Pedidos, Fase 4 — Admin), será necessário considerar:

| Necessidade | Solução |
|---|---|
| Landing page estática | ✅ GitHub Pages (grátis) |
| Cardápio com dados dinâmicos | ⚠️ Ainda cabe no Pages se usar JSON estático |
| Sistema de pedidos com backend | ❌ Precisa de servidor (VPS Hostinger, Vercel, etc.) |
| Painel admin | ❌ Precisa de servidor + banco de dados |

> [!TIP]
> Quando chegar a hora de escalar, os domínios `.store` e `.online` podem apontar para esses novos serviços, enquanto o `.com.br` continua sendo a porta de entrada principal.

---

## 🛡️ Segurança Anti-Hacker — Análise Profunda

### Contexto: O que estamos protegendo?

Este é um projeto **estático hospedado no GitHub Pages** — o que já elimina muitos vetores de ataque comuns (SQL injection, RCE, session hijacking, etc.). **Não existe servidor seu para invadir**. Porém, um site comercial com domínio próprio introduz novos riscos que precisam ser mitigados **desde agora**.

```mermaid
flowchart LR
    subgraph "🟢 Não se Aplica (site estático)"
        A["SQL Injection"]
        B["XSS via Backend"]
        C["Session Hijack"]
        D["DDoS no servidor"]
    end
    subgraph "🔴 Riscos Reais"
        E["API Key exposta"]
        F["Sequestro de domínio"]
        G["Phishing/Spoofing"]
        H["Repo comprometido"]
        I["Falta de headers"]
        J["Clickjacking"]
    end
```

---

### 1. 🔴 VULNERABILIDADE CRÍTICA: API Key do Google Maps Exposta

**Encontrada em:** `index.html`, linha 273

```html
<!-- ❌ ATUAL — Chave exposta no código-fonte público -->
<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=...">
```

> [!CAUTION]
> **Esta API key está visível no código-fonte e no repositório público do GitHub.** Qualquer pessoa pode copiar e usar essa chave, gerando custos na conta do Google Cloud associada.

**Impacto:**
- Uso abusivo da chave por terceiros (bots, scrapers)
- Cobrança inesperada na conta Google Cloud
- Google pode desativar a chave, quebrando o mapa do site

**Solução imediata — Restringir a chave no Google Cloud Console:**

1. Acesse [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials)
2. Clique na chave `AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
3. Em **Application restrictions** (Restrições de aplicativo):
   - Selecione: **HTTP referrers (websites)**
   - Adicione os domínios permitidos:
     ```
     galetoseespetos.com.br/*
     www.galetoseespetos.com.br/*
     galetoseespetos.com/*
     robsoncruz-dev.github.io/*
     localhost/*
     ```
4. Em **API restrictions** (Restrições de API):
   - Selecione: **Restrict key**
   - Marque apenas: **Maps Embed API**
5. Clique **Save**

> [!TIP]
> Mesmo com a chave visível no HTML, a **restrição por referrer** faz com que ela só funcione quando chamada do seu domínio. Se alguém copiar a chave e tentar usar em outro site, a API do Google vai rejeitar.

**Solução alternativa (sem chave):**

Trocar o Google Maps Embed por um **iframe do OpenStreetMap** (gratuito, sem chave):

```html
<!-- ✅ ALTERNATIVA — OpenStreetMap (sem API key) -->
<iframe
  src="https://www.openstreetmap.org/export/embed.html?bbox=-40.295,-20.335,-40.290,-20.330&layer=mapnik&marker=-20.3325,-40.2925"
  allowfullscreen loading="lazy">
</iframe>
```

| Opção | Custo | Requer Chave | Qualidade Visual |
|---|---|---|---|
| Google Maps (com restrição) | Grátis até 28k loads/mês | Sim, mas restrita | ⭐⭐⭐⭐⭐ |
| OpenStreetMap | 100% grátis | Não | ⭐⭐⭐⭐ |

---

### 2. 🟡 Arquivo `.gitignore` — Impedir vazamento de dados

**Problema:** O repositório atual **não tem `.gitignore`**. Isso significa que qualquer arquivo sensível criado na pasta (notas pessoais, backups, arquivos do editor, tokens) pode ser commitado acidentalmente e ficar exposto no GitHub público.

**Criar o arquivo `.gitignore` na raiz:**

```gitignore
# === Sistema Operacional ===
.DS_Store
Thumbs.db
*.swp
*.swo
*~

# === Editores ===
.vscode/
.idea/
*.sublime-*

# === Ambiente ===
.env
.env.local
.env.*.local

# === Notas pessoais / sensíveis ===
*.bak
*.log
notas-pessoais/
TODO-privado.md

# === Node (para fases futuras) ===
node_modules/
package-lock.json
```

> [!IMPORTANT]
> Crie o `.gitignore` **antes do primeiro commit** no novo repositório. Arquivos já commitados não são retroativamente ignorados — seria necessário removê-los do histórico.

---

### 3. 🔒 Security Headers — Camada Invisível de Proteção

O GitHub Pages **não permite configuração de headers HTTP diretamente**, mas podemos adicionar proteções equivalentes via **meta tags no HTML** e no **arquivo `_headers`** (se usar Cloudflare no futuro).

**Adicionar estas meta tags no `<head>` do `index.html`:**

```html
<!-- ===== SECURITY HEADERS (meta-tag equivalent) ===== -->

<!-- Previne que seu site seja carregado em iframe de outro domínio (anti-clickjacking) -->
<meta http-equiv="X-Frame-Options" content="DENY">

<!-- Bloqueia sniffing de conteúdo (evita que navegadores interpretem errado o tipo do arquivo) -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">

<!-- Ativa proteção anti-XSS do navegador -->
<meta http-equiv="X-XSS-Protection" content="1; mode=block">

<!-- Controla o que é enviado no header Referer (privacidade da dona) -->
<meta name="referrer" content="strict-origin-when-cross-origin">

<!-- Content Security Policy — controla de onde recursos podem ser carregados -->
<meta http-equiv="Content-Security-Policy"
  content="
    default-src 'self';
    script-src 'self';
    style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
    font-src https://fonts.gstatic.com;
    img-src 'self' data:;
    frame-src https://www.google.com https://www.openstreetmap.org;
    connect-src 'self';
    base-uri 'self';
    form-action 'none';
  ">
```

**O que cada diretiva CSP faz:**

| Diretiva | O que controla | Configuração |
|---|---|---|
| `default-src 'self'` | Base de segurança | Só permite carregar recursos do próprio domínio |
| `script-src 'self'` | JavaScript | Bloqueia scripts de terceiros injetados |
| `style-src` | CSS | Permite Google Fonts + estilos inline |
| `font-src` | Fontes | Permite apenas o Google Fonts CDN |
| `img-src 'self' data:` | Imagens | Permite imagens locais e favicons data URI |
| `frame-src` | Iframes | Permite apenas Google Maps / OpenStreetMap |
| `form-action 'none'` | Formulários | **Bloqueia** — não temos formulários (impede phishing via injeção) |

> [!WARNING]
> A CSP é poderosa, mas se configurada errado, pode **quebrar funcionalidades do site**. Depois de adicionar, teste tudo (mapa, fontes, imagens, animações). Se algo parar de funcionar, verifique o Console do navegador (F12) para ver qual política está bloqueando.

---

### 4. 🔐 Proteção do Domínio — Anti-Sequestro

O domínio é o ativo mais valioso do projeto digital. Se alguém conseguir `transferir` ou `alterar o DNS` do domínio, pode redirecionar todos os clientes para um site falso.

#### 4.1 — Domain Lock (Trava de Transferência)

No painel do registrador onde comprou os domínios:

- [ ] Ativar **Domain Lock** (ou "Trava de Domínio") em **todos os 4 domínios**
- [ ] Isso impede que o domínio seja transferido para outro registrador sem autorização explícita

#### 4.2 — DNSSEC (Validação Criptográfica do DNS)

O DNSSEC garante que as respostas DNS são autênticas e não foram alteradas por um atacante (previne DNS spoofing).

- [ ] Verificar se o registrador oferece **DNSSEC**
- [ ] Se disponível, ativar para `galetoseespetos.com.br`
- Nem todos os registradores brasileiros suportam; verifique na área de administração DNS

#### 4.3 — WHOIS Privacy (Privacidade dos Dados de Registro)

O registro de domínio expõe dados pessoais (nome, e-mail, telefone) publicamente via WHOIS. 

- [ ] Ativar o **WHOIS Privacy Protection** (se o registrador oferecer)
- Para domínios `.com.br`, o **registro.br** já oculta dados de pessoa física, mas domínios `.com`, `.store` e `.online` podem expor dados

#### 4.4 — Renovação Automática

- [ ] Ativar **renovação automática** nos 4 domínios
- Domínio expirado pode ser comprado por terceiros imediatamente

> [!CAUTION]
> **Cenário real:** Se o domínio `.com.br` expirar, outra pessoa pode comprá-lo e criar um site falso se passando pela galeteria. Clientes que digitarem o endereço seriam redirecionados para o site fraudulento. **Renovação automática é obrigatória.**

---

### 5. 🏛️ Segurança do Repositório GitHub

#### 5.1 — Proteção da Branch `main`

No GitHub → Settings → Branches → Add branch protection rule:

| Configuração | Valor | Motivo |
|---|---|---|
| Branch name pattern | `main` | Protege a branch de deploy |
| Require pull request reviews | ⚠️ Opcional solo dev | Não obrigatório se só você commita |
| Require status checks | ⚠️ Opcional | Útil quando tiver testes |
| Include administrators | ✅ Sim | Nem admin faz push direto sem querer |

> [!NOTE]
> Para um projeto solo, a proteção de branch é **boa prática mas não é urgente**. Torna-se essencial se outro desenvolvedor entrar no projeto.

#### 5.2 — Autenticação 2FA no GitHub

- [ ] Verificar se **2FA está ativado** na conta `robsoncruz-dev`
- GitHub → Settings → Password and Authentication → Two-factor authentication
- Se alguém acessar a conta GitHub, pode alterar o site, o DNS e tudo mais

#### 5.3 — Tokens e Secrets

- **Nunca** coloque senhas, tokens ou chaves em arquivos do repositório
- Se no futuro precisar de secrets (ex: API de delivery), use:
  - GitHub → Settings → Secrets and Variables → Actions

---

### 6. 📧 Proteção contra Phishing e E-mail Spoofing

Com domínio próprio, atacantes podem tentar enviar e-mails **se passando** pela galeteria (ex: "pedido confirmado", "promoção especial" com links maliciosos).

**Configurar estes registros DNS para proteção contra e-mail spoofing:**

| Tipo | Host | Valor | Função |
|---|---|---|---|
| `TXT` | `@` | `v=spf1 -all` | Declara que **nenhum servidor** está autorizado a enviar e-mails do domínio |
| `TXT` | `_dmarc` | `v=DMARC1; p=reject; rua=mailto:seu@email.com` | Rejeita e-mails não autorizados e reporta tentativas |

> [!IMPORTANT]
> Como a galeteria **não usa e-mail com domínio próprio** (ex: contato@galetoseespetos.com.br), essa configuração diz explicitamente: "Qualquer e-mail vindo deste domínio é falso — rejeite." Isso protege os clientes contra phishing.

---

### 7. 🔍 Integridade do Código — Subresource Integrity (SRI)

Atualmente o projeto usa **apenas recursos locais** (CSS e JS próprios), o que é excelente para segurança. A única dependência externa é a **Google Fonts** via `@import` no CSS.

**Status atual — BOM:**

| Recurso | Origem | Risco |
|---|---|---|
| `style.css` | Local | ✅ Seguro |
| `script.js` | Local | ✅ Seguro |
| Google Fonts | CDN externo | 🟡 Risco baixo (Google) |
| Google Maps iframe | CDN externo | 🟡 Risco baixo (sandboxed) |

**Recomendação para o futuro:**
Se no futuro adicionar bibliotecas externas via CDN (ex: analytics, slider, pagamento), **sempre usar SRI**:

```html
<!-- ✅ Com SRI — o navegador verifica a integridade do arquivo -->
<script
  src="https://cdn.example.com/lib.js"
  integrity="sha384-HASH_AQUI"
  crossorigin="anonymous">
</script>

<!-- ❌ Sem SRI — se o CDN for hackeado, código malicioso roda no seu site -->
<script src="https://cdn.example.com/lib.js"></script>
```

---

### 8. 🕷️ Proteção contra Scraping e Clonagem do Site

Como o site é público e estático, qualquer pessoa pode copiar o HTML. Não existe proteção técnica 100%, mas podemos dificultar:

**Criar `robots.txt` na raiz do projeto:**

```txt
# robots.txt — Galeteria Galetos e Espetos
User-agent: *
Allow: /

# Bloqueia bots de IA / scraping agressivo
User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /

Sitemap: https://galetoseespetos.com.br/sitemap.xml
```

> [!NOTE]
> O `robots.txt` é uma **convenção**, não uma trava técnica. Bots maliciosos podem ignorá-lo. Mas bots legítimos (Google, Bing, bots de IA) respeitam.

---

### 9. 📊 Panorama Completo de Segurança

```mermaid
flowchart TD
    subgraph "🔴 Fazer AGORA (Migração)"
        A1["Restringir API Key do Google Maps"] 
        A2["Criar .gitignore"]
        A3["Adicionar Security Headers (meta tags)"]
        A4["Ativar Domain Lock nos 4 domínios"]
        A5["Criar robots.txt"]
        A6["Ativar 2FA no GitHub"]
        A7["SPF + DMARC anti-phishing"]
    end
    subgraph "🟡 Fazer em BREVE"
        B1["Ativar DNSSEC"]
        B2["WHOIS Privacy nos .com/.store/.online"]
        B3["Renovação automática nos 4 domínios"]
        B4["Branch protection no main"]
    end
    subgraph "🟢 Quando Escalar (Fases 2-4)"
        C1["SRI em scripts externos"]
        C2["Rate limiting (se API própria)"]
        C3["CORS configurado"]
        C4["Autenticação no Admin (Fase 4)"]
        C5["Helmet.js / security headers no server"]
    end
```

---

### ✅ Checklist de Segurança — Adicionar à Migração

- [ ] **Restringir API Key** do Google Maps (referrer + API restriction)
- [ ] **Criar `.gitignore`** antes do primeiro commit
- [ ] **Adicionar meta tags de segurança** no `<head>` do HTML (CSP, X-Frame, etc.)
- [ ] **Criar `robots.txt`** na raiz
- [ ] **Ativar 2FA** na conta GitHub
- [ ] **Ativar Domain Lock** nos 4 domínios
- [ ] **Configurar SPF + DMARC** no DNS (anti-phishing)
- [ ] **Ativar renovação automática** dos domínios
- [ ] Verificar se **DNSSEC** está disponível no registrador
- [ ] Verificar se **WHOIS Privacy** está ativo nos domínios internacionais

---

### 🎯 Veredicto Final de Segurança

| Categoria | Status Atual | Após Migração |
|---|---|---|
| **Hosting** | ✅ GitHub Pages (infraestrutura Google/Fastly) | ✅ Mantém |
| **HTTPS** | ✅ Automático no GitHub Pages | ✅ Mantém (Let's Encrypt) |
| **API Keys** | 🔴 Exposta sem restrição | ✅ Restrita por referrer |
| **Security Headers** | 🔴 Nenhum | ✅ CSP + X-Frame + Referrer |
| **Domínio** | ⚪ Não existia | ✅ Lockado + DNSSEC + SPF |
| **Git** | 🟡 Sem .gitignore | ✅ .gitignore + branch protection |
| **Anti-Phishing** | ⚪ Não se aplicava | ✅ SPF + DMARC |
| **Código** | ✅ Vanilla, zero dependência | ✅ Mantém |

> O maior ponto forte deste projeto em termos de segurança é que **ele é 100% estático e vanilla** — zero frameworks, zero dependências NPM, zero banco de dados. Isso elimina **90% dos vetores de ataque** mais comuns na web. As medidas acima cobrem os 10% restantes.

---

> *Da sala de aula para o mercado. A Galeteria cresceu — e o projeto também.* 🍗🚀
