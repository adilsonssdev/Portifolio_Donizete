/**
 * CONFIGURAÇÃO DONIZETE - Serviços Acadêmicos
 * 
 * Este arquivo contém todas as informações editáveis do site.
 * Para atualizar dados de contato, redes sociais ou conteúdo,
 * basta modificar os valores abaixo.
 */

// ============================================
// INFORMAÇÕES DE CONTATO
// ============================================

export const CONTATO = {
  // Nome completo
  nome: "Donizete Santana",

  // WhatsApp (formato: DDD + número, sem espaços ou traços)
  whatsapp: "5512988726694",
  whatsappFormatado: "(12) 98872-6694",

  // E-mail
  email: "donizete_santana@yahoo.com.br",

  // Instagram (apenas o handle, sem @)
  instagram: "donizeteds",

  // Facebook (nome da página ou perfil)
  facebook: "donizetedossantana",
} as const;

// ============================================
// LINKS DE REDES SOCIAIS
// ============================================

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent("Gostaria de fazer um orçamento")}`,
  email: `mailto:${CONTATO.email}`,
  instagram: `https://instagram.com/${CONTATO.instagram}`,
  facebook: `https://facebook.com/${CONTATO.facebook}`,
} as const;

// ============================================
// SEO E METADADOS
// ============================================

export const SEO = {
  // Título da página (aparece na aba do navegador)
  titulo: "DONIZETE SANTANA - Serviços Acadêmicos | Formatação ABNT, Revisão e Orientação",

  // Descrição para motores de busca
  descricao: "Apoio acadêmico completo para trabalhos escolares e universitários. Formatação ABNT, revisão ortográfica e gramatical, orientação metodológica para TCCs, monografias, dissertações e teses. Atendimento online para todo o Brasil.",

  // Palavras-chave
  keywords: "serviços acadêmicos, formatação ABNT, revisão de texto, TCC, monografia, dissertação, tese, artigo científico, orientação acadêmica, correção de trabalhos",

  // URL do site (atualizar após deploy)
  url: "https://donizete-servicos-academicos.vercel.app",

  // Nome da imagem para Open Graph (deve estar em /public)
  imagemOG: "og-image.jpg",
} as const;

// ============================================
// CONTEÚDO DO SITE
// ============================================

export const CONTEUDO = {
  hero: {
    titulo: "DONIZETE",
    subtitulo: "Serviços Acadêmicos",
    headline: "Apoio acadêmico do rascunho à versão final",
    descricao: "Formatação ABNT, revisão e orientação de ideias para Artigos, Monografias, TCCs, Dissertações e Teses.",
    ctaPrimario: "Solicitar Orçamento no WhatsApp",
    ctaSecundario: "Enviar E-mail",
    observacao: "Entrega em Word e PDF",
    atendimento: "Atendimento 100% online para todo o Brasil",
  },

  sobre: {
    titulo: "Sobre",
    subtitulo: "Quem sou eu",
    texto: `Olá! Sou ${CONTATO.nome}, especialista em serviços acadêmicos com anos de experiência ajudando estudantes e pesquisadores a alcançarem a excelência em seus trabalhos.

Ofereço um atendimento personalizado, ágil e confiável, garantindo que cada projeto receba a atenção dedicada que merece. Meu compromisso é com a qualidade, o prazo e a sua satisfação.

Seja você um estudante do ensino médio, graduação, mestrado ou doutorado, estou aqui para facilitar sua jornada acadêmica com profissionalismo e dedicação.`,
    formacoes: {
      titulo: "Formação Acadêmica",
      experiencia: "Experiência docente de mais de 12 anos.",
      mestrado: "Mestre em Educação pela Universidade de Taubaté.",
      graduacoes: [
        "Filosofia",
        "História",
        "Pedagogia",
        "Sociologia",
        "Geografia",
        "Teologia",
      ],
      posGraduacoes: [
        "Psicopedagogia",
        "Neuropsicopedagogia",
      ],
      resumo: "Sete graduações e seis pós-graduações nas áreas de Filosofia, História, Pedagogia, Sociologia, Geografia, Teologia, Psicopedagogia e Neuropsicopedagogia.",
    },
  },

  servicos: {
    titulo: "Serviços",
    subtitulo: "Como posso ajudar você",
    tiposTrabalho: {
      titulo: "Tipos de Trabalho",
      itens: [
        "Artigos",
        "Monografias",
        "TCCs (Trabalhos de Conclusão de Curso)",
        "Dissertações de Mestrado",
        "Teses de Doutorado",
        "Projetos de Pesquisa",
        "Relatórios Técnicos",
        "Estudos de Caso",
      ],
    },
    servicosOferecidos: {
      titulo: "Serviços Oferecidos",
      itens: [
        { titulo: "Formatação", descricao: "ABNT ou normas específicas da instituição" },
        { titulo: "Revisão Ortográfica e Gramatical", descricao: "Conforme a nova ortografia" },
        { titulo: "Linguística", descricao: "Análise e adequação do texto" },
        { titulo: "Ordenação de Ideias", descricao: "Estruturação lógica do conteúdo" },
        { titulo: "Sugestões Metodológicas", descricao: "Orientação no desenvolvimento" },
        { titulo: "Entrega em Word e PDF", descricao: "Formatos editáveis e finais" },
      ],
    },
  },

  diferenciais: {
    titulo: "Diferenciais",
    subtitulo: "Por que me escolher",
    itens: [
      {
        titulo: "Pontualidade",
        descricao: "Compromisso rigoroso com os prazos estabelecidos. Seu trabalho pronto quando você precisa.",
        icone: "Clock",
      },
      {
        titulo: "Sigilo Absoluto",
        descricao: "Garantia total de confidencialidade. Seu trabalho e dados estão protegidos.",
        icone: "Shield",
      },
      {
        titulo: "Atendimento Personalizado",
        descricao: "Cada projeto é único. Atenção dedicada às suas necessidades específicas.",
        icone: "UserCheck",
      },
      {
        titulo: "Conformidade ABNT",
        descricao: "Formatação precisa segundo as normas técnicas mais atualizadas.",
        icone: "CheckCircle",
      },
      {
        titulo: "Comunicação Clara",
        descricao: "Diálogo direto e transparente durante todo o processo de elaboração.",
        icone: "MessageCircle",
      },
      {
        titulo: "Qualidade Garantida",
        descricao: "Revisão minuciosa e padrão acadêmico de excelência em cada entrega.",
        icone: "Award",
      },
    ],
  },

  depoimentos: {
    titulo: "Depoimentos",
    subtitulo: "O que dizem meus clientes",
    itens: [
      {
        nome: "Maria Silva",
        curso: "Graduanda em Pedagogia",
        texto: "O Donizete salvou meu TCC! A formatação ficou perfeita e a revisão identificou erros que eu nem imaginava. Entregou antes do prazo e foi super atencioso. Recomendo demais!",
        avaliacao: 5,
      },
      {
        nome: "João Pereira",
        curso: "Mestrando em Administração",
        texto: "Trabalho impecável na minha dissertação. A orientação metodológica foi fundamental para estruturar melhor minha pesquisa. Profissional extremamente competente.",
        avaliacao: 5,
      },
      {
        nome: "Ana Carolina",
        curso: "Graduanda em Direito",
        texto: "Já utilizei os serviços várias vezes para artigos e trabalhos. Sempre com qualidade excelente e preço justo. Meu go-to para serviços acadêmicos!",
        avaliacao: 5,
      },
    ],
  },

  faq: {
    titulo: "Perguntas Frequentes",
    subtitulo: "Tire suas dúvidas",
    itens: [
      {
        pergunta: "Qual o prazo de entrega dos trabalhos?",
        resposta: "O prazo varia conforme o tipo e volume do trabalho. Para formatação simples, geralmente 2-3 dias úteis. Para revisão completa e trabalhos maiores como TCCs e dissertações, combinamos o prazo conforme sua necessidade e urgência. Sempre respeitamos o prazo acordado!",
      },
      {
        pergunta: "Como funciona o envio do material?",
        resposta: "Você pode enviar seu trabalho via WhatsApp ou e-mail. Aceitamos arquivos em Word (.docx) ou PDF. Após análise, envio um orçamento detalhado e, com sua aprovação, iniciamos o trabalho imediatamente.",
      },
      {
        pergunta: "O serviço é confidencial?",
        resposta: "Absolutamente! Garanto total sigilo e confidencialidade de todos os trabalhos e dados dos clientes. Seu material é usado exclusivamente para prestação do serviço contratado e nunca é compartilhado com terceiros.",
      },
      {
        pergunta: "Posso solicitar revisões após a entrega?",
        resposta: "Sim! Incluo ajustes e pequenas revisões no valor do serviço contratado. Se forem necessárias alterações significativas após a entrega final, combinamos separadamente. Sua satisfação é prioridade.",
      },
      {
        pergunta: "Quais formas de pagamento são aceitas?",
        resposta: "Aceito PIX, transferência bancária e pagamento via Mercado Pago. Para trabalhos de maior valor, posso parcelar em até 3x sem juros. O pagamento pode ser feito 50% no início e 50% na entrega, ou à vista com desconto.",
      },
      {
        pergunta: "Os trabalhos realizados pela assessoria são garantidamente originais e livres de plágio?",
        resposta: "Sim. Todos os trabalhos produzidos são originalmente desenvolvidos, e empregamos rigorosas plataformas e software anti-plágio para assegurar a autenticidade de cada trabalho. Isso garante a integridade acadêmica e a satisfação de vocês clientes.",
      },
      {
        pergunta: "Você atende em qual região?",
        resposta: "Atendo 100% online para todo o Brasil! Não importa sua cidade ou estado, posso ajudar com seu trabalho acadêmico. A distância não é impedimento para um serviço de qualidade.",
      },
    ],
  },

  contato: {
    titulo: "Contato",
    subtitulo: "Vamos conversar",
    descricao: "Pronto para dar o próximo passo no seu trabalho acadêmico? Entre em contato e solicite um orçamento sem compromisso.",
    formulario: {
      titulo: "Envie uma mensagem",
      nome: "Seu nome",
      email: "Seu e-mail",
      mensagem: "Sua mensagem",
      botao: "Enviar mensagem",
      sucesso: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    },
  },

  rodape: {
    direitos: `© ${new Date().getFullYear()} Developed by Adilson Santana . Todos os direitos reservados.`,
    links: [
      { texto: "Política de Privacidade", url: "#" },
      { texto: "Termos de Uso", url: "#" },
    ],
  },
} as const;

// ============================================
// NAVEGAÇÃO
// ============================================

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;
