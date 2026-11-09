export interface PasseioItem {
  id: string;
  slug: string;
  titulo: string;
  descricao: string;
  duracaoHoras: number;
  capacidadeMax: number;
  valorBase: number;
  localEmbarque: string;
  roteiro: string[];
  incluso: string[];
  destaque: boolean;
  imagemUrl: string;
  imagens?: string[];
}

export const PASSEIOS_DATA: PasseioItem[] = [
  {
    id: "lagoa-mar-aberto",
    slug: "da-lagoa-ao-mar-aberto",
    titulo: "Da Lagoa ao Mar Aberto: Roteiro Exclusivo",
    descricao: "Navegação cênica pelo Canal da Barra até mar aberto, Piscinas Naturais, Galheta, refúgio do Gravatá e fechamento com brinde na Baía Funda.",
    duracaoHoras: 4,
    capacidadeMax: 9,
    valorBase: 2200,
    localEmbarque: "Marina Verde Mar (Lagoa da Conceição)",
    roteiro: [
      "Canal da Barra & Ponte Pênsil",
      "Piscinas Naturais & Prainha",
      "Navegação Costeira ao Sul",
      "Praia da Galheta",
      "Refúgio do Gravatá & Mole",
      "Brinde na Baía Funda",
    ],
    incluso: [
      "1 Vaga de Estacionamento na Marina",
      "Combustível de Todo o Percurso",
      "Marinheiro Habilitado",
      "Cooler com Gelo Disponível",
      "Máscaras & Boias de Flutuação",
      "Sem Serviço de Churrasco",
    ],
    destaque: true,
    imagemUrl: "/img/Drone/Drone%20-%20Curdos%20Lancha%20(2).JPG",
    imagens: [
      "/img/Drone/Drone%20-%20Curdos%20Lancha%20(2).JPG",
      "/img/Camera/Camera%20-%20Curdos%20Lancha%20(3).jpg",
      "/img/Drone/Drone%20-%20Curdos%20Lancha%20(6).JPG",
    ],
  },
  {
    id: "campeche-vip",
    slug: "ilha-do-campeche",
    titulo: "Ilha do Campeche Exclusivo",
    descricao: "O Caribe Catarinense com águas transparentes, areia branca e preservação ecológica total.",
    duracaoHoras: 6,
    capacidadeMax: 9,
    valorBase: 2800,
    localEmbarque: "Marina Verde Mar / Barra da Lagoa",
    roteiro: ["Barra da Lagoa", "Praia da Galheta", "Praia Mole", "Ilha do Campeche"],
    incluso: [
      "1 Vaga de Estacionamento na Marina",
      "Combustível de Todo o Percurso",
      "Marinheiro Habilitado",
      "Cooler com Gelo Disponível",
      "Máscaras & Boias de Flutuação",
      "Serviço de Churrasco a Bordo",
    ],
    destaque: true,
    imagemUrl: "/img/Drone/Drone%20-%20Curdos%20Lancha%20(10).JPG",
    imagens: [
      "/img/Drone/Drone%20-%20Curdos%20Lancha%20(10).JPG",
      "/img/Camera/Camera%20-%20Curdos%20Lancha%20(15).jpg",
      "/img/Drone/Drone%20-%20Curdos%20Lancha%20(20).JPG",
    ],
  },
  {
    id: "baia-funda-castelinho",
    slug: "baia-funda-ou-castelinho",
    titulo: "Baía Funda ou Castelinho",
    descricao: "Passeio curto e relaxante pelas águas abrigadas da Lagoa da Conceição, com parada paradisíaca na Baía Funda ou Castelinho para banho e fotos.",
    duracaoHoras: 3,
    capacidadeMax: 9,
    valorBase: 1600,
    localEmbarque: "Marina Verde Mar (Lagoa da Conceição)",
    roteiro: [
      "Marina Verde Mar",
      "Canal da Barra",
      "Lagoa da Conceição",
      "Baía Funda ou Castelinho",
      "Parada para Banho & Flutuação",
    ],
    incluso: [
      "1 Vaga de Estacionamento na Marina",
      "Combustível de Todo o Percurso",
      "Marinheiro Habilitado",
      "Cooler com Gelo Disponível",
      "Máscaras & Boias de Flutuação",
      "Sem Serviço de Churrasco",
    ],
    destaque: false,
    imagemUrl: "/img/Drone/Drone%20-%20Curdos%20Lancha%20(25).JPG",
    imagens: [
      "/img/Drone/Drone%20-%20Curdos%20Lancha%20(25).JPG",
      "/img/Camera/Camera%20-%20Curdos%20Lancha%20(22).JPG",
      "/img/Drone/Drone%20-%20Curdos%20Lancha%20(28).JPG",
    ],
  },
  {
    id: "costa-da-lagoa",
    slug: "costa-da-lagoa-gastronomico",
    titulo: "Costa da Lagoa Gastronômico",
    descricao: "Navegação calma pelas águas da Lagoa da Conceição com parada para frutos do mar nos restaurantes tradicionais.",
    duracaoHoras: 4,
    capacidadeMax: 9,
    valorBase: 1900,
    localEmbarque: "Marina Verde Mar (Lagoa da Conceição)",
    roteiro: ["Lagoa da Conceição", "Cachoeira da Costa", "Restaurantes Nativos", "Paradas para Banho"],
    incluso: [
      "1 Vaga de Estacionamento na Marina",
      "Combustível de Todo o Percurso",
      "Marinheiro Habilitado",
      "Cooler com Gelo Disponível",
      "Máscaras & Boias de Flutuação",
      "Churrasqueira a Bordo",
    ],
    destaque: false,
    imagemUrl: "/img/Camera/Camera%20-%20Curdos%20Lancha%20(12).jpg",
    imagens: [
      "/img/Camera/Camera%20-%20Curdos%20Lancha%20(12).jpg",
      "/img/Drone/Drone%20-%20Curdos%20Lancha%20(31).JPG",
      "/img/Camera/Camera%20-%20Curdos%20Lancha%20(34).JPG",
    ],
  },
  {
    id: "tingua-caixa-daco",
    slug: "tingua-caixa-daco",
    titulo: "Tinguá & Caixa d'Aço Sunset",
    descricao: "O destino mais cobiçado da navegação de lazer, com bares flutuantes e pôr do sol inesquecível.",
    duracaoHoras: 7,
    capacidadeMax: 9,
    valorBase: 3400,
    localEmbarque: "Marina Verde Mar / Trapiche Canasvieiras",
    roteiro: ["Baía de Jurerê", "Ilha do Francês", "Praia do Tinguá", "Caixa d'Aço"],
    incluso: [
      "1 Vaga de Estacionamento na Marina",
      "Combustível de Todo o Percurso",
      "Marinheiro Habilitado",
      "Cooler com Gelo Disponível",
      "Máscaras & Boias de Flutuação",
      "Serviço de Churrasco a Bordo",
    ],
    destaque: true,
    imagemUrl: "/img/Drone/Drone%20-%20Curdos%20Lancha%20(15).JPG",
    imagens: [
      "/img/Drone/Drone%20-%20Curdos%20Lancha%20(15).JPG",
      "/img/Camera/Camera%20-%20Curdos%20Lancha%20(43).JPG",
      "/img/Drone/Drone%20-%20Curdos%20Lancha%20(45).JPG",
    ],
  },
];