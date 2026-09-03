// Conteúdo central da página — edite aqui sem mexer nos componentes.

export const candidato = {
  nome: "Keyla Cristina",
  nomeCompleto: "Keyla Cristina Fernandes da Silva",
  numero: "44561",
  cargo: "Deputada Estadual",
  uf: "Bahia",
  partido: "União Brasil",
  partidoSigla: "UNIÃO",
  slogan: "Um coração da Chapada, pra cuidar da Bahia.",
  bandeira: "Fé, Família e Cuidado",
  cidadeBase: "Iraquara",
};

// Cole aqui o link do vídeo (YouTube, Vimeo ou um .mp4 direto). Deixe vazio para
// mostrar o placeholder "vídeo em breve".
export const videoUrl = "/video-keyla.mp4";

export const hero = {
  headline: "Um coração da Chapada, pra cuidar da Bahia.",
  apoio: "Cuidado, presença e trabalho social para toda a Bahia.",
  ctaPrimario: "Conheça a trajetória",
  ctaSecundario: "Faça parte",
};

export const contato = {
  whatsapp: "5575998866906",
  whatsappExibicao: "(75) 99886-6906",
  email: "contato@keylacristina.com.br",
  cnpjResponsavel: "68.319.522/0001-94",
  instagram: "https://www.instagram.com/keyla.baofc/",
  facebook: "https://www.facebook.com/share/1bBexKN4fD/?mibextid=wwXIfr",
};

export const cores = {
  rosaEscuro: "#7a1550",
  rosa: "#c12974",
  verdeEscuro: "#5c7a2e",
  verde: "#83af47",
  dourado: "#f2b705",
};

export const cidadesRegiao = [
  "Iraquara",
  "Seabra",
  "Palmeiras",
  "Lençóis",
  "Mucugê",
  "Ibicoara",
  "Nova Redenção",
  "Iraquara - povoado",
  "Souto Soares",
  "Itaetê",
  "Boninal",
  "Bonito",
  "Ibitiara",
  "Utinga",
  "Wagner",
  "Andaraí",
  "Outra cidade",
];

export const valores = [
  {
    icone: "dove",
    titulo: "Fé cristã",
    texto:
      "Uma trajetória que começou na igreja — catequista, sempre presente nos grupos de jovens. Fé que se transforma em serviço ao próximo.",
  },
  {
    icone: "handshake",
    titulo: "Compromisso com quem precisa",
    texto:
      "Anos de atuação direta com famílias carentes, sempre por perto e de mãos na massa, não só no discurso.",
  },
  {
    icone: "family",
    titulo: "Família",
    texto:
      "Como primeira-dama de Iraquara e mãe, entende a família como a base de tudo — e trabalha para protegê-la.",
  },
  {
    icone: "sprout",
    titulo: "Empreendedorismo feminino",
    texto:
      "Projetos que ajudaram mulheres a empreender e sustentar suas famílias com as próprias mãos.",
  },
  {
    icone: "cap",
    titulo: "Educação e proteção à infância",
    texto:
      "Criadora do Educar é Proteger, acolhendo crianças no contraturno escolar com aula, arte e alimentação.",
  },
  {
    icone: "scale",
    titulo: "Cidadania que chega perto",
    texto:
      "Da Caravana da Cidadania ao cadastro do Bolsa Família: serviço público levado até a porta de quem precisa.",
  },
];

export type Marco = {
  ano: string;
  titulo: string;
  texto: string;
};

export const trajetoria: Marco[] = [
  {
    ano: "Desde criança",
    titulo: "Uma vida dentro da igreja",
    texto:
      "Catequista e sempre presente em grupos de jovens, Keyla aprendeu cedo que fé e serviço andam juntos.",
  },
  {
    ano: "Sala de aula",
    titulo: "Professora",
    texto:
      "Antes da política, a rotina de formar gente — de perto, todos os dias.",
  },
  {
    ano: "Vereadora",
    titulo: "A mais jovem vereadora da Bahia",
    texto:
      "Eleita vereadora de Iraquara sendo, à época, a mais jovem vereadora do estado.",
  },
  {
    ano: "Presidente da Câmara",
    titulo: "Uma gestão que deu independência à Casa",
    texto:
      "Como presidente da Câmara de Iraquara, conduziu a gestão que tornou o Legislativo municipal independente.",
  },
  {
    ano: "Secretária de Ação Social",
    titulo: "Empreendedorismo feminino e apoio às famílias",
    texto:
      "Projetos voltados ao empreendedorismo feminino e a famílias carentes ganharam força na Secretaria.",
  },
  {
    ano: "Primeira-dama de Iraquara",
    titulo: "Nasce o Educar é Proteger",
    texto:
      "Ao lado da Fundação Itaú, criou o projeto que acolhe crianças carentes no contraturno escolar com cursos, dança, música, balé e alimentação.",
  },
  {
    ano: "Ação social",
    titulo: "Nossa Sopa e o PAA Alimento nas comunidades",
    texto:
      "Trouxe o programa Nossa Sopa e levou o PAA Alimento às comunidades através de cozinhas industriais — gerando renda para famílias e alimento para quem mais precisava.",
  },
  {
    ano: "Caravana da Cidadania",
    titulo: "Serviço público até a porta de casa",
    texto:
      "Criou a Caravana da Cidadania, levando psicóloga, enfermeira, emissão de documentos e cadastro do Bolsa Família direto às comunidades.",
  },
  {
    ano: "Agora",
    titulo: "Candidata a Deputada Estadual — 44561",
    texto:
      "Quer levar esse mesmo jeito de cuidar — de perto, na prática — para a Assembleia Legislativa da Bahia.",
  },
];

export type Causa = {
  icone: string;
  titulo: string;
  texto: string;
};

export const causas: Causa[] = [
  {
    icone: "heart-handshake",
    titulo: "Educar é Proteger",
    texto:
      "Projeto criado com a Fundação Itaú que acolhe crianças carentes no contraturno escolar — cursos, dança, música, balé e alimentação, para que a escola não seja o único lugar seguro do dia.",
  },
  {
    icone: "soup",
    titulo: "Nossa Sopa",
    texto:
      "Programa que levou alimento quente a famílias carentes de Iraquara, feito com o mesmo cuidado de quem cozinha para a própria casa.",
  },
  {
    icone: "wheat",
    titulo: "PAA Alimento nas comunidades",
    texto:
      "Cozinhas industriais que geram renda para famílias produtoras e, ao mesmo tempo, levam alimento a quem mais precisa — dos dois lados, uma comunidade mais forte.",
  },
  {
    icone: "car-front",
    titulo: "Caravana da Cidadania",
    texto:
      "Psicóloga, enfermeira, retirada de documentos e cadastro do Bolsa Família levados diretamente às comunidades — serviço público de porta em porta.",
  },
];

export type Proposta = {
  titulo: string;
  problema?: string;
  objetivo: string;
  comoFunciona?: string[];
  frase: string;
};

export type Eixo = {
  numero: string;
  icone: string;
  titulo: string;
  resumo: string;
  propostas: Proposta[];
};

export const eixos: Eixo[] = [
  {
    numero: "01",
    icone: "heart-pulse",
    titulo: "Saúde",
    resumo: "Transparência na regulação e atendimento especializado mais perto de casa.",
    propostas: [
      {
        titulo: "Regulação Transparente",
        problema:
          "Pacientes e familiares enfrentam dificuldade para saber em que etapa está uma solicitação de regulação, quais critérios determinam prioridade e quanto tempo estão aguardando.",
        objetivo:
          "Criar ou aperfeiçoar mecanismos de transparência e acompanhamento das solicitações de regulação estadual.",
        comoFunciona: [
          "Consulta digital ou canais de atendimento para acompanhar solicitações",
          "Informações sobre data de entrada, especialidade, situação e encaminhamentos",
          "Indicadores agregados das filas por região e procedimento",
          "Mecanismos de atualização e correção de cadastros",
          "Critérios de prioridade clínica claros e auditáveis",
        ],
        frase:
          "Quem está esperando por atendimento tem direito a saber onde está na fila e o que está acontecendo com seu pedido.",
      },
      {
        titulo: "Saúde Mais Perto",
        objetivo:
          "Ampliar a oferta regionalizada de atendimento especializado e reduzir deslocamentos desnecessários para moradores do interior.",
        frase: "Ninguém deveria viajar horas para ser atendido perto de casa.",
      },
    ],
  },
  {
    numero: "02",
    icone: "graduation-cap",
    titulo: "Educação",
    resumo: "Encontrar talentos no interior e abrir portas para o primeiro emprego.",
    propostas: [
      {
        titulo: "Escola que Revela Talentos",
        objetivo:
          "Criar mecanismos para identificar, apoiar e dar visibilidade a talentos estudantis, especialmente em municípios menores.",
        comoFunciona: [
          "Feiras e mostras regionais",
          "Circuitos de ciência, cultura, tecnologia e esporte",
          "Bolsas, premiações ou apoio institucional conforme disponibilidade",
          "Parcerias com universidades e institutos",
          "Etapas municipais, territoriais e estaduais",
        ],
        frase:
          "Talento não nasce só nas grandes cidades. Ele precisa ser encontrado, apoiado e levado adiante.",
      },
      {
        titulo: "Educação Profissional no Interior",
        objetivo: "Aproximar a formação profissional das vocações econômicas locais.",
        comoFunciona: [
          "Mapear demandas regionais",
          "Fortalecer cursos ligados a turismo, agricultura, tecnologia, gastronomia, comércio, serviços e economia criativa",
          "Articular escolas, instituições profissionalizantes, empresas e municípios",
          "Criar trilhas de formação de curta duração quando adequadas",
        ],
        frase: "A escola também precisa abrir portas para o primeiro emprego e para quem quer empreender.",
      },
    ],
  },
  {
    numero: "03",
    icone: "drama",
    titulo: "Cultura",
    resumo: "Fortalecer as tradições do interior e registrar a cultura popular da Bahia.",
    propostas: [
      {
        titulo: "Cultura Viva do Interior",
        objetivo:
          "Fortalecer manifestações culturais tradicionais e ampliar o acesso de grupos do interior às políticas de fomento.",
        comoFunciona: [
          "Editais e chamadas regionalizadas",
          "Apoio técnico para inscrição em programas",
          "Circuitos culturais territoriais",
          "Preservação e documentação",
          "Critérios territoriais quando juridicamente adequados",
        ],
        frase:
          "A cultura da Bahia também mora nas comunidades, nas festas, nos grupos e nas tradições do interior.",
      },
      {
        titulo: "Mapa da Cultura Popular da Bahia",
        objetivo: "Criar um inventário colaborativo das manifestações culturais tradicionais do Estado.",
        comoFunciona: [
          "Cadastro de festas, grupos, mestres e artesãos",
          "Registro histórico e audiovisual",
          "Ferramenta pública de consulta",
          "Encaminhamento para políticas de preservação e fomento",
        ],
        frase: "O que não é registrado corre o risco de ser esquecido.",
      },
    ],
  },
  {
    numero: "04",
    icone: "volleyball",
    titulo: "Esporte",
    resumo: "Mais modalidades e mais chances de brilhar fora das capitais.",
    propostas: [
      {
        titulo: "Esporte em Cada Município",
        objetivo: "Expandir oportunidades de esporte e lazer para além do futebol.",
        comoFunciona: [
          "Núcleos esportivos regionais: futsal, vôlei, basquete, atletismo, ciclismo, capoeira, lutas, dança",
          "Inclusão de pessoas com deficiência",
          "Uso compartilhado de espaços públicos",
          "Formação e apoio técnico para gestores municipais",
        ],
        frase: "Esporte não pode ser privilégio de quem mora perto de um grande centro.",
      },
      {
        titulo: "Talento do Interior",
        objetivo: "Criar uma estratégia de identificação e encaminhamento de talentos esportivos.",
        comoFunciona: [
          "Festivais e seletivas regionais",
          "Banco de talentos esportivos",
          "Encaminhamento para programas estaduais",
          "Apoio a transporte e participação em competições conforme regras orçamentárias",
        ],
        frase: "Antes de chegar ao pódio, todo atleta precisa primeiro ser visto.",
      },
    ],
  },
  {
    numero: "05",
    icone: "route",
    titulo: "Infraestrutura",
    resumo: "Acompanhar cada obra até ela chegar de fato ao cidadão.",
    propostas: [
      {
        titulo: "Interior Conectado",
        objetivo: "Organizar uma agenda permanente de demandas de infraestrutura do interior.",
        comoFunciona: [
          "Mapear demandas por território",
          "Classificar por urgência e população afetada",
          "Apresentar indicações e requerimentos",
          "Acompanhar projetos e obras",
          "Publicar atualizações de andamento",
        ],
        frase: "Não basta anunciar a obra. É preciso acompanhar até ela chegar ao cidadão.",
      },
    ],
  },
  {
    numero: "06",
    icone: "droplet",
    titulo: "Água & Rural",
    resumo: "Água para viver, produzir e permanecer no campo.",
    propostas: [
      {
        titulo: "Água para Produzir",
        objetivo:
          "Fortalecer soluções de abastecimento e apoio à produção rural em regiões com maior vulnerabilidade hídrica.",
        comoFunciona: [
          "Mapeamento de comunidades prioritárias",
          "Apoio a cisternas e sistemas simplificados",
          "Recuperação e implantação de estruturas hídricas",
          "Apoio à pequena produção e irrigação quando tecnicamente viável",
          "Integração com políticas de agricultura familiar",
        ],
        frase: "Água é saúde, produção, renda e permanência das famílias no interior.",
      },
    ],
  },
  {
    numero: "07",
    icone: "map-pin",
    titulo: "Gabinete do Interior",
    resumo: "Um mandato que vai até a cidade, ouve e volta para prestar contas.",
    propostas: [
      {
        titulo: "Gabinete do Interior / Caravana do Interior",
        objetivo: "Criar uma rotina permanente de escuta, encaminhamento e prestação de contas.",
        comoFunciona: [
          "Visitas periódicas aos municípios",
          "Audiências e reuniões comunitárias",
          "Formulário de demandas com protocolo",
          "Classificação por tema e órgão responsável",
          "Relatórios de devolutiva",
          "Painel público de acompanhamento quando tecnicamente possível",
        ],
        frase: "O mandato vai até a cidade, ouve o problema e volta para mostrar o que foi feito.",
      },
    ],
  },
];

// Grid rápido "O que a Keyla quer cuidar" — resumo visual dos mesmos 7 eixos
// acima, usado como abertura da seção de propostas.
export const prioridades = [
  { icone: "heart-pulse", titulo: "Saúde", texto: "Mais transparência e atendimento mais perto." },
  { icone: "graduation-cap", titulo: "Educação", texto: "Talentos e oportunidades profissionais no interior." },
  { icone: "drama", titulo: "Cultura", texto: "Valorizar quem mantém viva a cultura da Bahia." },
  { icone: "volleyball", titulo: "Esporte", texto: "Mais oportunidades para praticar e desenvolver talentos." },
  { icone: "route", titulo: "Infraestrutura", texto: "Cobrar, acompanhar e prestar contas." },
  { icone: "droplet", titulo: "Água & Rural", texto: "Água para viver, produzir e permanecer." },
  { icone: "map-pin", titulo: "Presença", texto: "Ouvir as comunidades e acompanhar suas demandas." },
];

export const bio = {
  fraseAbertura:
    "Você conhece uma mulher que nunca deixou de servir a própria terra?",
  aberturaTexto:
    "Keyla conhece — porque é ela mesma. Mãe, esposa e mulher de fé, desde menina em Iraquara, na Chapada Diamantina, sua vida sempre esteve ligada à igreja, à sala de aula e ao trabalho social. Antes de qualquer cargo, já era assim: perto das pessoas, resolvendo o que dava para resolver.",
  memoriaTitulo: "Uma menina da igreja de Iraquara que nunca deixou de servir.",
  memoriaTexto:
    "Antes da política, Keyla já estava lá: nos grupos de jovens, na catequese, nas salas de aula como professora. Cresceu vendo a fé e o serviço como a mesma coisa — e foi assim, servindo de perto, que aprendeu o que a sua gente mais precisa.",
  memoriaDestaque: "Porque amor por uma terra se mostra em quem nunca foi embora.",
  quemE: [
    "Mãe, esposa e mulher de fé, formada em Assistência Social — para Keyla, cuidar das pessoas sempre foi mais que uma profissão, foi propósito.",
    "Nasceu e cresceu em Iraquara, na Chapada Diamantina — e foi lá que construiu sua história antes mesmo de pensar em política.",
    "Desde cedo esteve envolvida na igreja: catequista, integrante de grupos de jovens, sempre próxima da comunidade.",
    "Formou-se professora, empreendeu e esteve à frente de um centro médico em Iraquara — sempre gerando oportunidade para quem estava por perto.",
    "Foi eleita vereadora sendo, à época, a mais jovem vereadora da Bahia — aprendeu que política se faz com presença, escuta e compromisso.",
    "Como presidente da Câmara de Iraquara, conduziu a gestão que tornou a Casa Legislativa independente.",
    "Foi secretária de Ação Social, levando projetos de empreendedorismo feminino e apoio a famílias carentes.",
    "Como primeira-dama de Iraquara, criou ao lado da Fundação Itaú o projeto Educar é Proteger, acolhendo crianças carentes no contraturno escolar com cursos, dança, música, balé e alimentação.",
    "Trouxe o programa Nossa Sopa e levou o PAA Alimento às comunidades através de cozinhas industriais — gerando renda para famílias e levando comida a quem mais precisava.",
    "Criou a Caravana da Cidadania, levando psicóloga, enfermeira, emissão de documentos e cadastro do Bolsa Família direto às comunidades.",
    "Agora, como candidata a Deputada Estadual, quer levar esse mesmo cuidado — o coração da Chapada — para cuidar de toda a Bahia.",
  ],
  citacao: "Um coração da Chapada, pra cuidar da Bahia.",
  autenticidadeTitulo: "Ela já faz, antes de prometer.",
  autenticidadeTexto:
    "Professora, vereadora, presidente da Câmara, secretária de Ação Social e primeira-dama — Keyla já esteve em quase todos os lugares onde se pode servir Iraquara. Criou programas que existem até hoje, como o Educar é Proteger, o Nossa Sopa e a Caravana da Cidadania. Agora quer levar esse mesmo jeito de cuidar — de perto, na prática — para a Assembleia Legislativa da Bahia.",
};

// Cards da seção "Quem é Keyla" — cada card tem uma foto real da campanha
// (importada diretamente no componente QuemEKeyla.tsx).
export type QuemCard = {
  tag: string;
  titulo: string;
  texto: string;
  alt: string;
};

export const quemCards: QuemCard[] = [
  {
    tag: "Apresentação",
    titulo: "Essa sou eu, Keyla",
    texto:
      "Mãe, esposa e mulher de fé. Formada em Assistência Social, empreendedora e geradora de oportunidades — cuidar das pessoas sempre foi mais que uma profissão, sempre foi propósito.",
    alt: "Keyla em família, celebrando o Natal",
  },
  {
    tag: "Chapada",
    titulo: "Iraquara é a sua raiz",
    texto:
      "Uma mulher da Chapada que conhece de perto a realidade do interior baiano — suas festas, seu povo, suas dificuldades e sua força.",
    alt: "Keyla em festa de São João na Chapada Diamantina",
  },
  {
    tag: "Com as pessoas",
    titulo: "Sua relação com as pessoas",
    texto:
      "Como vereadora, aprendeu que política se faz com presença, escuta e compromisso. Perto de quem precisa, ouvindo antes de decidir.",
    alt: "Keyla ao lado de moradores em evento no interior da Bahia",
  },
  {
    tag: "Trajetória",
    titulo: "Experiência na vida pública",
    texto:
      "Passou pela vereança e pela frente de um centro médico em Iraquara — experiência de quem já trabalhou, empreendeu e serviu no interior da Bahia.",
    alt: "Keyla em encontro com a comunidade",
  },
  {
    tag: "Visão de futuro",
    titulo: "Por que decidiu entrar para a política",
    texto:
      "Para levar a experiência de quem empreende, cuida e conhece o interior até a Assembleia Legislativa da Bahia — cuidando de quem sempre cuidou dos outros.",
    alt: "Keyla em campanha no interior da Bahia",
  },
  {
    tag: "Agora é ela",
    titulo: "Agora é ela",
    texto:
      "Depois de anos de experiência ao lado do povo da Chapada, chegou a hora de representar a região onde ela mora.",
    alt: "Keyla em evento junino na Chapada Diamantina",
  },
];

// Galeria "Território" — presença nas comunidades da Chapada e do interior.
export type TerritorioItem = {
  legenda: string;
  alt: string;
};

export const territorioItems: TerritorioItem[] = [
  { legenda: "Escutar de perto.", alt: "Keyla na festa de São João em Iraquara" },
  { legenda: "Conhecer a realidade.", alt: "Keyla com moradoras em festa junina" },
  { legenda: "Entender as necessidades.", alt: "Keyla com grupo de moradores à noite" },
  { legenda: "Levar as demandas adiante.", alt: "Keyla visitando morador da zona rural" },
  { legenda: "Presença no interior.", alt: "Keyla em confraternização na comunidade" },
  { legenda: "Perto de quem precisa.", alt: "Keyla em evento noturno com moradores" },
  { legenda: "Construindo junto.", alt: "Keyla em evento com amigos e apoiadores" },
  { legenda: "Ouvindo o território.", alt: "Keyla em roda de conversa à noite" },
  { legenda: "Caminhando com a Chapada.", alt: "Keyla com grupo de apoiadores" },
  { legenda: "Sempre por perto.", alt: "Keyla em encontro comunitário" },
];

export const territorioFrases = [
  "Escutar de perto",
  "Conhecer a realidade",
  "Entender as necessidades",
  "Levar as demandas adiante",
];

export const rodapeLegal = {
  nomeCivil: candidato.nomeCompleto,
  disclaimer: `Propaganda eleitoral. ${candidato.nomeCompleto.toUpperCase()} ${candidato.numero} — Candidata a ${candidato.cargo} — ${candidato.partido} (${candidato.partidoSigla}).`,
  responsavel: `Responsável pela contratação: CNPJ ${contato.cnpjResponsavel}.`,
};
