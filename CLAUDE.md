# Landing Page — Keyla Cristina 44561

## O que é

Landing page de campanha para **Keyla Cristina**, candidata a **Deputada Estadual pela
Bahia** (número 44561, União Brasil). Espelhada na estrutura da página de Dr. Pablício
Medeiros (`../pablicio-medeiros`): storytelling + trajetória + causas + plano de governo +
captação de leads via popup, com identidade visual própria (rosa/magenta + verde, a partir
da arte oficial "Agora é ELA" e do Instagram @keyla.baofc).

## TSE — status

O Instagram oficial já mostra "Candidata a Deputada Estadual • vote 44561" (não mais
"pré-candidata"), e o print de Ficha de Qualificação do TSE enviado pelo responsável mostra
um Relatório Financeiro já protocolado para a candidatura. Por isso a página usa linguagem
de campanha oficial ("Vote 44561", pedido direto de voto), no mesmo padrão já usado na
página do Dr. Pablício quando a candidatura dele foi confirmada como registrada.

**Cuidados de LGPD aplicados desde o início (mesmo padrão do Pablício):** o formulário
"Quero fazer parte" (`LeadForm.tsx`) não pergunta nada sobre religião/fé, mesmo a
biografia da candidata tendo forte ligação com a igreja — convicção religiosa é dado
pessoal **sensível** pela LGPD (Art. 5º, II). A fé aparece normalmente na narrativa da
página (`content.ts > bio`, `valores`), só não vira campo de formulário.

**Sem seção de coligação/apoio de outros políticos:** ao contrário do Pablício (que tinha
uma seção "Diálogo e Articulação" com fotos ao lado de outras lideranças), esta página não
tem nenhuma foto desse tipo — não havia material disponível, e alegar apoio de terceiros
sem autorização/registro formal é risco de TSE. Se a campanha quiser adicionar isso depois,
seguir o mesmo padrão de legenda do Pablício: identificação factual de quem está na foto,
nunca "apoio de fulano".

**Sem estatísticas numéricas inventadas:** a seção que no template do Pablício era "Stats"
(números de impacto, com fonte citada — Codevasf) foi substituída aqui por `Trajetoria.tsx`,
uma linha do tempo qualitativa dos marcos reais da candidata (vereadora mais jovem da Bahia,
presidente da Câmara, secretária de Ação Social etc.). Não havia números verificáveis
(ex: "quantas famílias" o Nossa Sopa atendeu) fornecidos pela campanha — evite adicionar
números sem confirmar a fonte com quem passou as informações.

**Banner oficial "Agora é ELA" tinha texto de exemplo/placeholder:** o arquivo original
(`WhatsApp Image 2026-08-31 at 13.46.41.jpeg`) trazia no canto superior direito
"CNPJ: XX.XXX.XXX/0001-XX" e "COLIGAÇÃO: EXEMPLO DE COLIGAÇÃO" — claramente um mockup não
preenchido pela agência de design. O recorte usado no `og-image.jpg` e no `logo-oficial.webp`
corta essa faixa de propósito. **Se esse banner for usado em outras peças (impresso, redes
sociais), a campanha precisa preencher esses campos com os dados reais antes de publicar.**

## Segunda rodada de conteúdo (03/09/2026) — HTML de referência com fotos reais

O responsável enviou um segundo arquivo, `keyla-44561-landing-page.html` (mockup estático
feito por outra ferramenta/agência), contendo texto e **18 fotos reais da campanha**
embutidas em base64. Esse material foi extraído e incorporado:

- **Fotos**: extraídas do HTML com um script Python (`base64` + `PyMuPDF`/`Pillow`, ver
  histórico da conversa) e salvas em `src/assets/`. A foto de estúdio com fundo já removido
  (`keyla-hero-photo.webp`, 620×959, WebP com alpha) substituiu o recorte feito com `rembg`
  na primeira versão — é uma foto de estúdio, sem fundo, muito mais limpa. As demais 17 fotos
  são fotos reais de eventos de campanha (São João, visitas a comunidades, encontros) usadas
  nas novas seções `QuemEKeyla.tsx` (6 fotos, carrossel "Quem é Keyla") e `Territorio.tsx`
  (10 fotos, galeria em mosaico "Presença no território") + `SloganFeature.tsx` (1 foto de
  fundo). Todos os `alt` text vieram do HTML original.
- **Propostas reais**: o HTML trazia um plano de governo detalhado e específico (problema →
  objetivo → como funciona → frase) em 7 eixos — Saúde, Educação, Cultura, Esporte,
  Infraestrutura, Água & Rural, Gabinete do Interior — que **substituiu** os eixos
  especulativos da primeira versão (que tinham sido inferidos a partir só da biografia,
  sem um plano de governo formal). `content.ts > eixos` e `Plan.tsx` foram reescritos para
  essa estrutura mais rica.
- **Bio**: os dados novos do HTML ("mãe, esposa, mulher de fé", "formada em Assistência
  Social", "esteve à frente de um centro médico em Iraquara") foram **mesclados** — não
  substituídos — na narrativa já existente (vereadora, presidente da Câmara, secretária de
  Ação Social, primeira-dama, Educar é Proteger, Nossa Sopa, PAA, Caravana da Cidadania), já
  que as duas fontes descrevem a mesma pessoa em momentos/ângulos diferentes.
- Paleta de cores do HTML de referência (`--pink:#C12974`, `--green:#83AF47`, mais um azul
  `--blue:#2A6FD8` que não estava na primeira versão) confirma a paleta já usada — o azul do
  HTML aparece só como uma cor de apoio pontual (usada em `Plan.tsx` para o ícone de
  Infraestrutura/Educação), não como cor estrutural da página.

## Sem backend de leads (por decisão do responsável, 03/09/2026)

Diferente do Pablício (que tem um projeto Supabase dedicado para salvar os leads), aqui o
formulário **não salva nada em banco de dados** — só monta a mensagem e abre o WhatsApp da
campanha (`LeadForm.tsx > handleSubmit`). Por isso não há `SupportersCounter`,
`useLeadsCount`, `src/lib/supabase.ts` nem variáveis de ambiente `VITE_SUPABASE_*` neste
projeto. Se a campanha quiser ativar isso depois, seguir o mesmo passo a passo documentado
no `CLAUDE.md` do `pablicio-medeiros` (criar projeto Supabase, tabela `leads` com RLS,
função `get_leads_count()`).

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, sem arquivo de config — usa arbitrary values)
- lucide-react (ícones)
- Sem Supabase (ver acima)

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

- `src/data/content.ts` — **edite aqui** para trocar textos, propostas, cores, contato,
  cidades do dropdown, link do vídeo etc. Os componentes só consomem esse arquivo.
- `src/components/` — uma seção da página por arquivo, nesta ordem em `App.tsx`:
  - `Hero`, `VideoVsl` — abertura e vídeo
  - `QuemEKeyla` — carrossel horizontal com 6 fotos reais de campanha + biografia curta
    (vem do HTML de referência enviado depois — ver seção acima)
  - `Memoria`, `Bio` — história pessoal em texto (narrativa longa)
  - `Trajetoria` — linha do tempo dos marcos da carreira (substitui o "Stats" do template
    original, que usava estatísticas numéricas)
  - `Territorio` — galeria em mosaico com 10 fotos reais de visitas/eventos nas comunidades
    (substitui o "Articulacao" do template original — galeria de fotos com outros políticos,
    que não se aplica aqui; aqui são fotos só da candidata e do povo)
  - `Values` — ideias centrais (ícones + valores)
  - `Causas` — os 4 projetos sociais que a candidata já criou em Iraquara (Educar é
    Proteger, Nossa Sopa, PAA Alimento, Caravana da Cidadania)
  - `Plan` — grid rápido "prioridades" + plano de governo detalhado em 7 eixos (accordion),
    cada proposta com problema/objetivo/como funciona/frase — conteúdo vindo do HTML de
    referência, não mais especulado a partir só da bio
  - `Authenticity`
  - `SloganFeature` — seção de destaque em tela cheia com foto de fundo + slogan em itálico
  - `FinalCta`, `ParticiparCta`, `Footer`
- `src/components/Modal.tsx` + `src/context/LeadModalContext.tsx` — popup de captação de
  leads. Qualquer botão pode abrir com `const { openModal } = useLeadModal()`.
- `src/lib/video.ts` — detecta se o link em `content.ts > videoUrl` é YouTube, Vimeo ou um
  arquivo de vídeo direto.
- `src/assets/keyla-hero-photo.webp` — foto de estúdio já sem fundo (WebP com alpha,
  620×959), extraída do HTML de referência — usada no Hero e no avatar do formulário de
  leads. Substituiu o recorte feito com `rembg` na primeira versão do projeto.
- `src/assets/quem-0N-*.webp` (6) — fotos do carrossel "Quem é Keyla".
- `src/assets/territorio-N.webp` (10) — fotos da galeria "Território".
- `src/assets/slogan-feature-bg.webp` — foto de fundo da seção de destaque final.
- `src/assets/logo-oficial.webp` — recorte do logotipo oficial "Keyla ♥ 44561" extraído do
  banner de campanha, usado na tela de abertura (`IntroSplash.tsx`).
- `public/video-keyla.mp4` — vídeo enviado pela campanha (15s), usado na seção "A história
  dela".
- `public/og-image.jpg` — recorte do banner oficial "Agora é ELA" (sem a faixa de texto
  placeholder do topo), usado na prévia de compartilhamento (WhatsApp/Instagram/Facebook).

## Cores

Extraídas do material de identidade visual oficial (`Apresentação Final Keyla —
Deputada-Estadual.pdf`) e confirmadas no Instagram/banner de campanha:

- Rosa/magenta: `#c12974` (oficial), escurecido para `#7a1550` em fundos grandes
- Verde: `#83af47` (oficial), escurecido para `#5c7a2e`
- Dourado (acento/CTA): `#f2b705`

Definidas em `src/index.css` (`@theme` + `:root`) e usadas tanto via tokens Tailwind
(`bg-brand-blue-900`, `bg-brand-green-500` etc. — nomes mantidos do template original por
compatibilidade, mas apontando para a paleta rosa/verde) quanto via valores hex diretos nos
componentes.

## Dados de contato (rodapé)

- E-mail: contato@keylacristina.com.br
- WhatsApp: (75) 99886-6906
- Domínio: https://keylacristina.com.br/
- CNPJ do responsável pela contratação: 68.319.522/0001-94 (extraído do print da Ficha de
  Qualificação do TSE enviado pelo responsável — **confirmar com a campanha que este é de
  fato o CNPJ correto para o rodapé/disclaimer legal**, já que não foi informado
  explicitamente para esse fim).

## Pendências / dados a confirmar

- **Confirmar o CNPJ do rodapé** com a campanha (ver acima).
- **Facebook**: `content.ts > contato.facebook` está como `"#"` (placeholder) — não foi
  enviado nenhum link.
- **Vídeo institucional mais longo**: o vídeo atual (`video-keyla.mp4`) tem 15s — dá pra
  trocar por um mais longo em `content.ts > videoUrl` quando a campanha tiver um pronto.
- **Domínio no Open Graph**: já apontado para `https://keylacristina.com.br` (domínio real
  informado) — conferir se está no ar antes de divulgar o link.

## Próximos passos sugeridos

- `/conectar-github` — subir o projeto pro GitHub
- Deploy: Vercel ou Netlify (configurar o domínio `keylacristina.com.br`)
