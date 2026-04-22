function repairMojibake<T>(value: T): T {
  if (typeof value === 'string') {
    try {
      return decodeURIComponent(escape(value)) as T;
    } catch {
      return value;
    }
  }

  if (Array.isArray(value)) {
    return value.map((item) => repairMojibake(item)) as T;
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, repairMojibake(nestedValue)]),
    ) as T;
  }

  return value;
}

const ptBRRaw = {
  meta: {
    title: 'Sonoriza | Seu som merece ser ouvido',
    description:
      'Landing page oficial do Sonoriza: app na Google Play em teste fechado, Discover público no ar e curadoria editorial da música do Nordeste com base em Recife.',
    ogDescription:
      'Conheça o ecossistema Sonoriza: app Android em teste fechado, Discover público, playlists, tops, eventos, parceiros e contato direto para autorização de catálogo.',
    twitterDescription: 'App, Discover e curadoria editorial para a música do Nordeste.',
  },
  nav: {
    cta: 'Autorizar catálogo',
    languageLabel: 'Idioma',
    locales: {
      'pt-BR': 'PT',
      'en-US': 'EN',
    },
  },
  hero: {
    badge: 'Recife, PE • Google Play em teste fechado • Discover no ar',
    title: ['Seu som', 'merece mais', 'presença.'],
    subtitle:
      'O Sonoriza evoluiu para um ecossistema de descoberta musical com base em Recife: app Android já publicado na Google Play em teste fechado, Discover web público, curadoria editorial, tops, playlists, eventos e parceiros com foco na música do Nordeste.',
    primaryCta: 'Quero autorizar meu catálogo',
    secondaryCta: 'Conhecer o Discover',
    secondaryHref: 'https://discover.appsonoriza.com.br/',
    proofs: [
      { label: 'App Android na loja', href: 'https://play.google.com/store/apps/details?id=com.sonoriza.app' },
      { label: 'Discover público', href: 'https://discover.appsonoriza.com.br/' },
      { label: 'Base em Recife, foco no Nordeste', href: '#sobre' },
    ],
  },
  about: {
    label: 'Sobre o Sonoriza',
    title: ['Descoberta musical,', 'com base em Recife.'],
    body:
      'O Sonoriza começou em 2023 como um reprodutor local e hoje conecta app Android, Discover web e curadoria editorial em torno da música do Nordeste. Além da reprodução, o produto já organiza artistas, tops, playlists, eventos e parceiros em uma linguagem própria, com contato direto e proximidade com a cena regional.',
  },
  showcase: {
    label: 'Produto real',
    title: 'App publicado, Discover no ar, produto em operação.',
    body:
      'Em vez de prometer no discurso, a ideia aqui é mostrar o que já existe hoje: o app Android em teste fechado na Google Play, o Discover público na web e uma base editorial que já trabalha descoberta, catálogo, ranking e contexto cultural.',
    demo: {
      meta: 'Demonstração em vídeo',
      title: 'Do login até tocar uma música, simples e direto.',
      description:
        'Em 15 segundos, o vídeo mostra o app em uso real: login, entrada na home, escolha de faixa e reprodução sem fricção. É uma prova melhor do fluxo do que um conjunto de capturas estáticas.',
      video: '/assets/videos/sonoriza-app-demo.mp4',
      poster: '/assets/screens/home.jpeg',
    },
    proofs: [
      {
        eyebrow: 'Google Play',
        title: 'App Android em teste fechado',
        text: 'O Sonoriza já entrou na loja com distribuição real, ainda em fase controlada de validação.',
        href: 'https://play.google.com/store/apps/details?id=com.sonoriza.app',
        cta: 'Ver na Play Store',
      },
      {
        eyebrow: 'Sonoriza Discover',
        title: 'Camada web pública de descoberta',
        text: 'O Discover já está no ar com artistas, tops, explorar, páginas editoriais, eventos e parceiros.',
        href: 'https://discover.appsonoriza.com.br/',
        cta: 'Abrir Discover',
      },
      {
        eyebrow: 'Curadoria regional',
        title: 'Recife como base, Nordeste como recorte',
        text: 'O produto deixou de falar só de independência genérica e assume a música do Nordeste como eixo editorial.',
        href: '#sobre-projeto',
        cta: 'Entender a proposta',
      },
    ],
    cta: {
      label: 'Próximo passo',
      title: 'Seu catálogo pode entrar em um ecossistema já em operação.',
      text: 'Se o projeto fizer sentido para você, este é o momento de falar diretamente com quem constrói o Sonoriza e avaliar sua entrada no app, no Discover, em playlists, tops, eventos e campanhas editoriais como o São João.',
      primaryButton: 'Quero conversar sobre entrada',
      primaryHref: '#contato',
      secondaryButton: 'Ver o Discover',
      secondaryHref: 'https://discover.appsonoriza.com.br/',
    },
  },
  vitrine: {
    label: 'Discover e editorial',
    title: 'A camada editorial do Sonoriza já está no ar.',
    body:
      'O Discover não é mais só visão de produto. Ele já funciona como face editorial do ecossistema Sonoriza, conectando artistas, playlists, tops, explorar, eventos, parceiros e campanhas sazonais em torno da música do Nordeste.',
    previewLabel: 'Sonoriza Discover',
    previewStatus: 'Já no ar',
    waveTitle: 'A música do Nordeste',
    waveText:
      'Discover, artistas, playlists, eventos e parceiros organizados em uma linguagem editorial própria.',
    previewTitle: 'Descoberta, contexto e presença para a música do Nordeste',
    previewText:
      'Além do player, o Sonoriza agora organiza relevância cultural: destaque da semana, tops, playlists, eventos do Nordeste, parceiros curatoriais e ativações sazonais como o São João.',
    metrics: [
      { value: 'Fechado', label: 'Google Play' },
      { value: 'Online', label: 'Discover web' },
      { value: '2026', label: 'temporada junina' },
    ],
    tags: ['Destaque da semana', 'Eventos', 'Parceiros', 'Playlists', 'Tops', 'Explorar'],
    cards: [
      {
        title: 'Eventos do Nordeste',
        text: 'O produto já aponta para calendário cultural, line-ups, playlists oficiais e organização por estado, cidade e temporada.',
      },
      {
        title: 'Parceiros curatoriais',
        text: 'Páginas, marcas, produtores e mídias parceiras podem entrar como camada de contexto, recomendação e validação editorial.',
      },
      {
        title: 'Temporadas culturais',
        text: 'A linguagem visual e a curadoria podem abraçar ciclos como o São João sem perder a identidade do Sonoriza nem virar uma festa genérica.',
      },
      {
        title: 'Artistas, tops e playlists',
        text: 'Páginas de artista, tops, explorar e playlists ajudam a transformar o ecossistema em descoberta recorrente, não só reprodução.',
      },
    ],
    note:
      'Hoje o Sonoriza combina duas provas fortes ao mesmo tempo: o app Android já está na Google Play em teste fechado e o Discover já mostra na web a face editorial, regional e cultural do produto.',
    actions: [
      { label: 'Abrir Discover', href: 'https://discover.appsonoriza.com.br/', tone: 'primary' },
      { label: 'Ver app na Play Store', href: 'https://play.google.com/store/apps/details?id=com.sonoriza.app', tone: 'secondary' },
    ],
  },
  whyNow: {
    label: 'Por que agora',
    title: 'Por que vale entrar nesta fase?',
    body:
      'Nesta etapa, a proposta não é só disponibilizar música no app. É entrar enquanto o ecossistema já começa a operar com loja, Discover, editorial regional, eventos, parceiros e campanhas culturais com identidade própria.',
    cards: [
      {
        title: 'App já entrou na loja',
        text: 'O Sonoriza já está na Google Play em teste fechado, o que muda o patamar de validação do produto e da distribuição.',
      },
      {
        title: 'Discover público em operação',
        text: 'Artistas e projetos já podem se conectar a uma camada real de descoberta, com tops, playlists, explorar, eventos e parceiros.',
      },
      {
        title: 'Curadoria regional clara',
        text: 'O produto assume Recife e a música do Nordeste como eixo editorial, em vez de ficar preso a uma promessa genérica de independência.',
      },
      {
        title: 'Contato direto e entrada assistida',
        text: 'Você ainda fala diretamente com quem desenha o produto, conduz a curadoria e acompanha a entrada do material nesta fase.',
      },
    ],
  },
  pioneers: {
    label: 'Artistas pioneiros',
    title: 'Quem entrar agora ajuda a construir o começo.',
    intro:
      'Os artistas que participarem desta fase inicial do Sonoriza podem receber reconhecimento simbólico como pioneiros do projeto, com selo no app, possibilidade de destaque em espaços dedicados e um agradecimento especial pela confiança nesse início.',
    cards: [
      {
        title: 'Selo de pioneiro',
        text: 'Uma identificação simbólica para marcar os artistas que confiaram no Sonoriza ainda na fase inicial do catálogo.',
      },
      {
        title: 'Área de destaque',
        text: 'Os pioneiros podem ser incluídos em áreas editoriais de destaque dentro do app e da comunicação do projeto.',
      },
      {
        title: 'Agradecimento simbólico',
        text: 'Além do reconhecimento no produto, a ideia é registrar essa participação inicial com um item simbólico de agradecimento, conforme disponibilidade.',
      },
    ],
  },
  projectStory: {
    label: 'Sobre o projeto',
    title: 'Quem está por trás do Sonoriza.',
    name: 'Joseilton Ferreira Junior',
    role: 'Fundador e desenvolvedor do Sonoriza',
    badges: ['Recife, PE', 'Contato direto'],
    paragraphs: [
      'Sou Joseilton Ferreira Junior, fundador e desenvolvedor do Sonoriza. Trabalho com desenvolvimento de software desde 2020 e comecei a construir a base do projeto em 2023, quando um reprodutor local de música evoluiu para algo maior. Hoje conduzo o Sonoriza de ponta a ponta, da arquitetura até a experiência final do app, com base em Recife, Pernambuco.',
      'Nesta fase, você conversa diretamente comigo sobre autorização, envio de materiais, curadoria e entrada no catálogo. A proposta é crescer com artistas reais, de forma próxima, transparente e com espaço para a cena local e regional.',
    ],
    photoAlt: 'Foto de Joseilton Ferreira Junior',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseilton-junior/' },
      { label: 'Instagram do fundador', href: 'https://www.instagram.com/dvlp.jr/' },
      { label: 'Instagram do Sonoriza', href: 'https://www.instagram.com/sonoriza.sound/' },
    ],
  },
  howItWorks: {
    label: 'Como funciona',
    title: ['Simples. Transparente.', 'Sem letras miúdas.'],
    steps: [
      {
        number: '01',
        icon: '✉',
        title: 'Você entra em contato',
        text: 'Preencha o formulário com seus dados e contexto. Nesta fase, o contato é direto com o fundador para alinhar autorização, catálogo e próximos passos.',
      },
      {
        number: '02',
        icon: '⚙',
        title: 'Alinhamos autorização e materiais',
        text: 'Depois do contato, alinhamos a autorização e o que precisa ser enviado: faixas, capa, foto do artista, gêneros e informações básicas do catálogo.',
      },
      {
        number: '03',
        icon: '▶',
        title: 'Seu catálogo entra no Sonoriza',
        text: 'Com tudo aprovado, a ingestão é feita manualmente e o conteúdo autorizado passa a fazer parte do catálogo do Sonoriza durante a fase piloto.',
      },
      {
        number: '04',
        icon: '↻',
        title: 'Você tem controle total',
        text: 'Quer sair? É só pedir. Seu material é removido sem burocracia, sem prazo mínimo, sem perguntas.',
      },
    ],
  },
  model: {
    label: 'O modelo',
    title: ['Honesto sobre', 'o que somos.'],
    body:
      'O Sonoriza já não é só uma promessa em piloto cru. Hoje ele combina app Android em teste fechado na Google Play, Discover público e uma camada editorial em evolução, com foco na música do Nordeste. A proposta é crescer com catálogo autorizado, curadoria próxima e presença contextual dentro do ecossistema.',
    yesLabel: 'O que é',
    noLabel: 'O que não é',
    yesItems: [
      'Ecossistema com app Android, Discover web e curadoria editorial',
      'Produto já publicado na Google Play em teste fechado',
      'Camada pública de descoberta com artistas, tops, playlists, eventos e parceiros',
      'Recorte editorial com base em Recife e foco na música do Nordeste',
      'Catálogo curado, não distribuição em massa',
      'Canal para músicas autorizadas pelo artista e contextualizadas no ecossistema',
      'Você autoriza, pode remover quando quiser',
      'Contato direto com o fundador nesta fase',
    ],
    noItems: [
      'Distribuidora musical (DistroKid, TuneCore)',
      'Painel Sonoriza Creators ou analytics avançado',
      'Promessa de alcance massivo imediato',
      'Contrato com prazo mínimo de permanência',
      'Plataforma neutra, sem recorte editorial ou cultural',
      'Marketplace aberto para qualquer catálogo sem curadoria',
      'Monetização para artistas neste estágio',
    ],
  },
  policy: {
    label: 'Direitos e autorização',
    title: 'Conteúdo autorizado, titularidade preservada.',
    body:
      'O Sonoriza já tem uma política institucional específica para direitos autorais, propriedade intelectual, autorização e remoção de conteúdo. Ela ajuda a deixar claro como o catálogo entra, qual é o escopo de uso dentro da plataforma e como o artista pode revogar ou solicitar remoção.',
    cards: [
      {
        title: 'Autorização prévia',
        text: 'O conteúdo só deve entrar com autorização válida, específica e compatível com o uso pretendido dentro do Sonoriza.',
      },
      {
        title: 'Titularidade preservada',
        text: 'A publicação no app não transfere a titularidade da obra, do fonograma, da marca, do nome artístico ou da imagem.',
      },
      {
        title: 'Uso dentro da plataforma',
        text: 'O escopo cobre streaming no app, exibição de capa e metadados, além de cache offline interno sem entrega do arquivo bruto ao usuário final.',
      },
      {
        title: 'Revogação e remoção',
        text: 'Solicitações legítimas podem levar à indisponibilização preventiva e à remoção operacional do conteúdo, com análise prioritária e canal oficial definido.',
      },
    ],
    primaryAction: 'Ler política completa (PDF)',
    documentLinks: [
      { label: 'Ler política de direitos autorais (PDF)', href: '/docs/sonoriza-politica-direitos-autorais-v6.pdf' },
      { label: 'Ler política de privacidade (PDF)', href: '/docs/sonoriza-politica-privacidade-v1.pdf' },
    ],
    accountDeletionAction: {
      label: 'Solicitar exclusão de conta',
      href: '/delete-account',
    },
    secondaryAction: 'Canal oficial',
    secondaryValue: 'contato@appsonoriza.com.br',
  },
  faq: {
    label: 'FAQ',
    title: 'Dúvidas comuns antes do contato.',
    body:
      'O objetivo aqui é deixar claro o que faz sentido nesta fase e o que acontece depois que você fala com o Sonoriza.',
    items: [
      {
        question: 'Quem pode participar desta fase?',
        answer:
          'Artistas, projetos e parceiros que conversem com a proposta editorial do Sonoriza. O foco deixou de ser só "independente" de forma genérica e passou a assumir com mais clareza a música regional e a cena do Nordeste.',
      },
      {
        question: 'O Sonoriza hoje é só um conceito ou já está no ar?',
        answer:
          'O produto já está em operação em duas frentes: o app Android entrou na Google Play em fase de teste fechado e o Discover web já está público com artistas, tops, playlists e exploração editorial.',
      },
      {
        question: 'O Sonoriza é uma distribuidora musical?',
        answer:
          'Não. O Sonoriza não é distribuidora. Ele funciona como app e camada editorial de descoberta, com entrada curada de catálogo autorizado, contexto cultural e presença dentro do ecossistema.',
      },
      {
        question: 'O que é o Sonoriza Discover?',
        answer:
          'É a face web e editorial do ecossistema Sonoriza. Ali entram destaque da semana, tops, explorar, páginas de artista, playlists, eventos, parceiros e campanhas sazonais que ampliam a descoberta além do player.',
      },
      {
        question: 'Como eventos e parceiros entram na proposta?',
        answer:
          'Eventos e parceiros funcionam como contexto editorial. Eles ajudam a conectar artistas, playlists, line-ups, curadorias e temporadas culturais relevantes para a cena nordestina.',
      },
      {
        question: 'O São João entra como tema da marca?',
        answer:
          'Como ativação sazonal, sim. A ideia não é transformar o Sonoriza em uma identidade carnavalesca ou genérica, mas usar ciclos culturais como o São João para reforçar descoberta, contexto e linguagem editorial.',
      },
      {
        question: 'O que preciso enviar no primeiro contato?',
        answer:
          'No primeiro momento, o ideal é enviar uma descrição breve do que você quer disponibilizar ou construir com o Sonoriza. Depois do alinhamento, podem ser solicitados arquivos das músicas, capa, foto do artista, nome artístico, gêneros e materiais de contexto.',
      },
      {
        question: 'Existe uma política formal de autorização e remoção?',
        answer:
          'Sim. O Sonoriza mantém uma política específica sobre direitos autorais, autorização, escopo de uso e remoção de conteúdo, com canal oficial para solicitações, revogações e contestação de titularidade.',
      },
      {
        question: 'Posso remover meu catálogo depois?',
        answer:
          'Sim. Se você quiser retirar o material depois, basta solicitar. A ideia é manter o processo simples, direto e sem burocracia, tanto no app quanto nas superfícies editoriais vinculadas ao produto.',
      },
    ],
  },
  contact: {
    label: 'Autorize seu catálogo',
    title: ['Fale direto', 'com o fundador.'],
    body:
      'Se quiser conversar sobre entrada no app, no Discover, em playlists, tops, eventos ou campanhas editoriais, preencha o formulário. O contato nesta fase continua direto com quem constrói o Sonoriza.',
    trustCards: [
      {
        title: 'App na loja',
        text: 'O Sonoriza já entrou na Google Play em teste fechado, com distribuição real e evolução contínua do produto.',
      },
      {
        title: 'Discover público',
        text: 'A camada editorial já está no ar com artistas, tops, playlists, eventos e parceiros dentro do ecossistema.',
      },
      {
        title: 'Contato direto',
        text: 'Nesta fase, você fala diretamente com o fundador e desenvolvedor do projeto para alinhar entrada, contexto e curadoria.',
      },
      {
        title: 'Saída simples',
        text: 'Se quiser remover seu material depois, é só solicitar. A proposta continua simples e sem burocracia.',
      },
    ],
    accountDeletion: {
      text: 'Precisa tratar exclusão de conta e dados fora do app? Use também a página pública de solicitação.',
      cta: 'Abrir página de exclusão de conta',
      href: '/delete-account',
    },
    form: {
      nameLabel: 'Nome artístico',
      phoneLabel: 'Número para contato',
      emailLabel: 'E-mail',
      reasonLabel: 'Motivo do contato',
      messageLabel: 'Mensagem / descrição breve',
      placeholders: {
        name: 'Como te chamam no palco',
        phone: '(xx) xxxxx-xxxx',
        email: 'seu@email.com',
        message: 'Descreva brevemente seu catálogo, dúvida ou proposta.',
      },
      reasonPlaceholder: 'Selecione',
      reasons: [
        { value: 'autorizar_catalogo', label: 'Quero autorizar meu catálogo' },
        { value: 'saber_mais', label: 'Quero saber mais antes de decidir' },
        { value: 'remover_catalogo', label: 'Quero remover meu catálogo' },
        { value: 'outro', label: 'Outro assunto' },
      ],
      submitLabel: 'Enviar mensagem',
      submittingLabel: 'Enviando...',
      successTitle: 'Mensagem recebida.',
      successText: ['A gente entra em contato em breve.', 'Obrigado por topar chegar junto desde o início.'],
      fieldLabels: {
        name: 'nome artístico',
        phone: 'número para contato',
        email: 'e-mail',
        reason: 'motivo do contato',
        message: 'mensagem',
      },
      errors: {
        requiredName: 'Preencha o nome artístico.',
        requiredPhone: 'Preencha o número para contato.',
        invalidPhone: 'Digite um número com DDD válido.',
        requiredEmail: 'Preencha o e-mail.',
        invalidEmail: 'Digite um e-mail válido.',
        requiredReason: 'Selecione o motivo do contato.',
        requiredMessage: 'Descreva brevemente sua solicitação.',
        minMessage: 'A mensagem precisa ter pelo menos 10 caracteres.',
        submitFallback: 'Não foi possível enviar agora. Tente novamente em alguns instantes.',
      },
    },
  },
  footer: {
    blurb:
      'Ecossistema editorial de descoberta musical com base em Recife: app Android na Google Play em teste fechado, Discover público no ar e curadoria focada na música do Nordeste.',
    chips: ['Recife, PE', 'Discover no ar', 'Google Play fechado', 'Contato direto'],
    navHeading: 'Navegar',
    navLinks: [
      { label: 'Sobre o Sonoriza', href: '#sobre' },
      { label: 'Sonoriza Discover', href: 'https://discover.appsonoriza.com.br/' },
      { label: 'Editorial e discovery', href: '#vitrine' },
      { label: 'Por que agora', href: '#por-que-agora' },
      { label: 'Artistas pioneiros', href: '#pioneiros' },
      { label: 'Sobre o projeto', href: '#sobre-projeto' },
      { label: 'Direitos e autorização', href: '#politica' },
      { label: 'FAQ', href: '#faq' },
    ],
    contactHeading: 'Contato',
    contactText:
      'Se fizer sentido para você, o próximo passo é falar direto com quem constrói o Sonoriza e entender como seu catálogo pode entrar no app e nas superfícies editoriais.',
    contactCta: 'Autorizar meu catálogo',
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseilton-junior/' },
      { label: 'Instagram do fundador', href: 'https://www.instagram.com/dvlp.jr/' },
      { label: 'Instagram do Sonoriza', href: 'https://www.instagram.com/sonoriza.sound/' },
    ],
    copyright: 'Todos os direitos reservados.',
    bottomLinks: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.sonoriza.app' },
      { label: 'Sonoriza Discover', href: 'https://discover.appsonoriza.com.br/' },
      { label: 'Excluir conta', href: '/delete-account' },
      { label: 'Política de privacidade', href: '/docs/sonoriza-politica-privacidade-v1.pdf' },
      { label: 'Projeto com base em Recife', href: '#sobre-projeto' },
      { label: 'Política de direitos autorais', href: '/docs/sonoriza-politica-direitos-autorais-v6.pdf' },
    ],
  },
  backToTop: 'Voltar ao topo',
} as const;

const ptBR = repairMojibake(ptBRRaw);

type DeepWidenLiterals<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly DeepWidenLiterals<Item>[]
    : T extends object
      ? { [Key in keyof T]: DeepWidenLiterals<T[Key]> }
      : T;

export type Messages = DeepWidenLiterals<typeof ptBR>;

export default ptBR;
