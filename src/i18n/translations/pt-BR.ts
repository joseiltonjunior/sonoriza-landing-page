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
      'Landing page oficial do Sonoriza para apresentar o produto e receber contato de artistas, produções e parceiros interessados em disponibilizar seu catálogo no app.',
    ogDescription:
      'Conheça o Sonoriza e entre em contato para autorizar seu catálogo, entender o projeto e fazer parte da fase piloto do app.',
    twitterDescription:
      'Landing page oficial do Sonoriza para artistas, produções e parceiros.',
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
    badge: 'Convite para artistas independentes e regionais',
    title: ['Seu som', 'merece ser', 'ouvido.'],
    subtitle:
      'O Sonoriza é um app de streaming independente em fase piloto, feito em Recife, com catálogo em curadoria e espaço aberto para artistas que queiram entrar cedo, falar direto com o fundador e ajudar a formar o catálogo inicial.',
    primaryCta: 'Quero autorizar meu catálogo',
    secondaryCta: 'Quero entrar como pioneiro',
  },
  about: {
    label: 'Sobre o Sonoriza',
    title: ['Streaming independente,', 'com base no Recife.'],
    body:
      'O Sonoriza começou em 2023 como um reprodutor local e evoluiu para um app de streaming com recomendações, exploração por gênero, histórico, favoritos e catálogo curado. Nesta fase, a proposta é construir o catálogo inicial com artistas reais, autorização direta e proximidade com a cena local e regional.',
  },
  showcase: {
    label: 'Produto real',
    title: 'Veja o Sonoriza em funcionamento.',
    body:
      'Algumas telas do app na fase atual do produto. Em vez de prometer no discurso, a ideia aqui é mostrar a experiência real que já existe hoje.',
    previousLabel: 'Tela anterior',
    nextLabel: 'Próxima tela',
    dotsLabel: 'Navegação das telas do app',
    slides: [
      {
        meta: 'Tela 01 - Login',
        title: 'Login e acesso',
        description:
          'O app já conta com fluxo de login e acesso, reforçando que o Sonoriza não é só conceito visual: existe uma base funcional em andamento.',
        fallbackTag: 'Fluxo real',
        fallbackTitle: 'Login',
        fallbackText: 'Acesso à conta e entrada no app.',
        image: '/assets/screens/login.jpeg',
      },
      {
        meta: 'Tela 02 - Início',
        title: 'Home e descoberta',
        description:
          'A home prova um app vivo: tocados recentemente, mixes inspirados, retomada de reprodução e mini-player ativo na navegação principal.',
        fallbackTag: 'Catálogo piloto',
        fallbackTitle: 'Início',
        fallbackText: 'Retomada de reprodução, mixes e navegação principal.',
        image: '/assets/screens/home.jpeg',
      },
      {
        meta: 'Tela 03 - Explorar',
        title: 'Exploração por gênero',
        description:
          'A experiência de descoberta já inclui exploração por estilos e caminhos visuais para expandir o catálogo conforme o produto evolui.',
        fallbackTag: 'Descoberta',
        fallbackTitle: 'Explorar',
        fallbackText: 'Gêneros, categorias e expansão do catálogo.',
        image: '/assets/screens/explorar.jpeg',
      },
      {
        meta: 'Tela 04 - Artista',
        title: 'Página do artista',
        description:
          'A tela do artista mostra estrutura própria para catálogo, top músicas e discografia, o que ajuda a apresentar o Sonoriza como produto e não só como player.',
        fallbackTag: 'Catálogo',
        fallbackTitle: 'Artista',
        fallbackText: 'Página dedicada com top músicas e discografia.',
        image: '/assets/screens/artista.jpeg',
      },
      {
        meta: 'Tela 05 - Player',
        title: 'Playback completo',
        description:
          'O player cheio evidencia controles, progresso da faixa, favoritos e uma experiência mais robusta de consumo dentro do app.',
        fallbackTag: 'Playback',
        fallbackTitle: 'Player',
        fallbackText: 'Controles completos, progresso e favoritos.',
        image: '/assets/screens/player.jpeg',
      },
      {
        meta: 'Tela 06 - Favoritos',
        title: 'Engajamento real',
        description:
          'Favoritos mostram que o app já trabalha com ações persistentes do usuário, reforçando uso contínuo e organização do conteúdo salvo.',
        fallbackTag: 'Engajamento',
        fallbackTitle: 'Favoritos',
        fallbackText: 'Biblioteca, vínculo com o catálogo e uso recorrente.',
        image: '/assets/screens/favoritos.jpeg',
      },
    ],
    cta: {
      label: 'Próximo passo',
      title: 'Seu catálogo pode entrar cedo nessa história.',
      text: 'Se o projeto fizer sentido para você, este é o momento de conversar diretamente com quem constrói o Sonoriza, entender a autorização e avaliar sua entrada como artista pioneiro do catálogo inicial.',
      button: 'Quero conversar sobre o piloto',
    },
  },
  vitrine: {
    label: 'Além do app',
    title: 'O Sonoriza também evolui como vitrine de descoberta.',
    body:
      'Além da reprodução no app, o projeto também está estruturando uma camada de vitrine para destacar artistas, lançamentos, tops e presença editorial dentro do próprio ecossistema Sonoriza.',
    previewLabel: 'Sonoriza Vitrine',
    previewStatus: 'Em evolução',
    previewTitle: 'Mais presença para o catálogo autorizado',
    previewText:
      'Destaques editoriais, métricas visíveis, rankings e selos para reforçar a presença do artista dentro da plataforma.',
    metrics: [
      { value: '48.2K', label: 'plays' },
      { value: '3.1K', label: 'curtidas' },
      { value: '+210', label: 'seguidores' },
    ],
    tags: ['Destaque da semana', 'Lançamentos', 'Top artistas', 'Top álbuns', 'Top gêneros', 'Pioneer'],
    cards: [
      {
        title: 'Destaque da semana',
        text: 'Espaço principal para dar visibilidade editorial a um artista ou projeto dentro da vitrine do Sonoriza.',
      },
      {
        title: 'Scroll de lançamentos',
        text: 'Área pensada para novos singles, EPs e álbuns entrarem com presença mais clara dentro da navegação principal.',
      },
      {
        title: 'Artista em destaque',
        text: 'Bloco com métricas e contexto visual para reforçar presença, confiança e evolução do artista dentro do app.',
      },
      {
        title: 'Tops e categorias',
        text: 'Top músicas, top artistas, top álbuns e exploração por gênero ajudam a transformar o app em descoberta, não só reprodução.',
      },
    ],
    note:
      'Essa estrutura ainda está em evolução, mas já faz parte da visão do produto: o Sonoriza não é só player, é também uma vitrine de presença e descoberta para artistas autorizados.',
  },
  whyNow: {
    label: 'Por que agora',
    title: 'Por que vale entrar nesta fase?',
    body:
      'Nesta etapa, a proposta não é só disponibilizar música no app. É entrar cedo, com contato direto, ajudar a formar o catálogo e ser lembrado por isso.',
    cards: [
      {
        title: 'Catálogo em formação',
        text: 'Quem entra agora participa da fase em que o catálogo inicial ainda está sendo construído e ajuda a moldar o começo do Sonoriza.',
      },
      {
        title: 'Contato direto com o fundador',
        text: 'Você fala com quem desenha o produto, conduz a curadoria e faz a ingestão do material nesta fase do projeto.',
      },
      {
        title: 'Entrada assistida',
        text: 'Não existe painel, integração ou burocracia para configurar agora. O processo é manual, acompanhado e simples para o artista.',
      },
      {
        title: 'Reconhecimento no app',
        text: 'Artistas que entram cedo podem receber identificação simbólica de pioneiro e aparecer em áreas de destaque dedicadas dentro do Sonoriza.',
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
      'Este é um projeto piloto. Não temos promessas impossíveis - temos um produto real, em construção, buscando artistas reais para crescer junto. Nesta fase, a proposta é trabalhar com músicas que o próprio artista deseja disponibilizar gratuitamente para o público dentro do Sonoriza.',
    yesLabel: 'O que é',
    noLabel: 'O que não é',
    yesItems: [
      'Plataforma de streaming com app Android funcionando',
      'Recomendações personalizadas por gênero e histórico',
      'Catálogo curado, não distribuição em massa',
      'Canal para músicas autorizadas pelo artista e disponibilizadas gratuitamente no app',
      'Entrada antecipada no catálogo piloto',
      'Possibilidade de reconhecimento como artista pioneiro',
      'Você autoriza, pode remover quando quiser',
      'Contato direto com o fundador nesta fase',
    ],
    noItems: [
      'Distribuidora musical (DistroKid, TuneCore)',
      'Painel Sonoriza Creators ou analytics avançado',
      'Promessa de alcance massivo imediato',
      'Contrato com prazo mínimo de permanência',
      'Plataforma pronta para escala global agora',
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
          'Qualquer artista que queira autorizar a disponibilização do seu conteúdo no Sonoriza e participar da fase inicial do catálogo. Artistas independentes são especialmente bem-vindos nesta etapa.',
      },
      {
        question: 'O que preciso enviar no primeiro contato?',
        answer:
          'No primeiro momento, o ideal é enviar uma descrição breve do que você quer disponibilizar. Depois do alinhamento, podem ser solicitados arquivos das músicas, capa, foto do artista, nome artístico e gêneros.',
      },
      {
        question: 'O Sonoriza é uma distribuidora musical?',
        answer:
          'Não. O Sonoriza é um app de streaming e reprodução musical, pensado especialmente para a experiência mobile. Nesta fase, a proposta é disponibilizar o conteúdo diretamente dentro do próprio Sonoriza, como mais um canal de presença e escuta para o usuário final.',
      },
      {
        question: 'Como funciona o acesso às músicas no Sonoriza?',
        answer:
          'Nesta fase, a proposta é receber músicas que o próprio artista autoriza disponibilizar gratuitamente no app. O Sonoriza funciona como plataforma de reprodução e descoberta desse catálogo autorizado, sem se apropriar do conteúdo.',
      },
      {
        question: 'Existe uma política formal de autorização e remoção?',
        answer:
          'Sim. O Sonoriza mantém uma política específica sobre direitos autorais, autorização, escopo de uso e remoção de conteúdo, com canal oficial para solicitações, revogações e contestação de titularidade.',
      },
      {
        question: 'Existe custo para participar?',
        answer:
          'Não. O contato inicial é para alinhamento, autorização e curadoria do material. Não existe cobrança para entrar nesta fase piloto.',
      },
      {
        question: 'Posso remover meu catálogo depois?',
        answer:
          'Sim. Se você quiser retirar o material depois, basta solicitar. A ideia é manter o processo simples, direto e sem burocracia.',
      },
      {
        question: 'Em quanto tempo recebo resposta?',
        answer:
          'A proposta é responder rápido, principalmente quando eu estiver online. O contato é direto com o fundador e desenvolvedor do projeto.',
      },
    ],
  },
  contact: {
    label: 'Autorize seu catálogo',
    title: ['Fale direto', 'com o fundador.'],
    body:
      'Se quiser conversar sobre participação no piloto, autorização de catálogo ou envio de materiais, preencha o formulário. O contato nesta fase é direto com quem constrói o Sonoriza.',
    trustCards: [
      {
        title: 'Entrada manual',
        text: 'Seu catálogo é alinhado e inserido manualmente no Sonoriza nesta fase do projeto.',
      },
      {
        title: 'Contato direto',
        text: 'Nesta fase, você fala diretamente com o fundador e desenvolvedor do projeto.',
      },
      {
        title: 'Artista pioneiro',
        text: 'Quem entrar cedo pode receber reconhecimento simbólico como pioneiro do catálogo inicial.',
      },
      {
        title: 'Saída simples',
        text: 'Se quiser remover seu material depois, é só solicitar.',
      },
    ],
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
      'Streaming independente em fase piloto, com catálogo em formação, contato direto com o fundador e espaço para artistas que queiram autorizar seu conteúdo no app.',
    chips: ['Recife, PE', 'Catálogo piloto', 'Contato direto'],
    navHeading: 'Navegar',
    navLinks: [
      { label: 'Sobre o Sonoriza', href: '#sobre' },
      { label: 'Sonoriza Vitrine', href: '#vitrine' },
      { label: 'Por que agora', href: '#por-que-agora' },
      { label: 'Artistas pioneiros', href: '#pioneiros' },
      { label: 'Sobre o projeto', href: '#sobre-projeto' },
      { label: 'Direitos e autorização', href: '#politica' },
      { label: 'FAQ', href: '#faq' },
    ],
    contactHeading: 'Contato',
    contactText:
      'Se fizer sentido para você, o próximo passo é falar direto com quem constrói o Sonoriza.',
    contactCta: 'Autorizar meu catálogo',
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseilton-junior/' },
      { label: 'Instagram do fundador', href: 'https://www.instagram.com/dvlp.jr/' },
      { label: 'Instagram do Sonoriza', href: 'https://www.instagram.com/sonoriza.sound/' },
    ],
    copyright: 'Todos os direitos reservados.',
    bottomLinks: [
      { label: 'Excluir conta', href: '/delete-account' },
      { label: 'Política de privacidade', href: '/docs/sonoriza-politica-privacidade-v1.pdf' },
      { label: 'Contato direto', href: '#contato' },
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
