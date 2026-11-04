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
  },
  {
    id: "campeche-vip",
    slug: "ilha-do-campeche",
    titulo: "Ilha do Campeche Exclusivo",
    descricao: "O Caribe Catarinense com águas transparentes, areia branca e preservação ecológica total.",
    duracaoHoras: 6,
    capacidadeMax: 9,
    valorBase: 2800,
    localEmbarque: "Marina da Barra da Lagoa",
    roteiro: ["Barra da Lagoa", "Praia da Galheta", "Praia Mole", "Ilha do Campeche"],
    incluso: ["Combustível", "Marinheiro Habilitado", "Cooler com Gelo", "Máscaras de Snorkel", "Stand-Up Paddle"],
    destaque: true,
    imagemUrl: "/img/Drone/Drone%20-%20Curdos%20Lancha%20(10).JPG",
  },
  {
    id: "baia-norte-golfinhos",
    slug: "baia-norte-anhatomirim",
    titulo: "Baía Norte & Anhatomirim",
    descricao: "Roteiro histórico passando pela Fortaleza de Santa Cruz, Baía dos Golfinhos e almoço na Baía de Santo Antônio.",
    duracaoHoras: 5,
    capacidadeMax: 9,
    valorBase: 2400,
    localEmbarque: "Trapiche de Jurerê Tradicional",
    roteiro: ["Praia do Forte", "Baía dos Golfinhos", "Ilha de Anhatomirim", "Magalhães"],
    incluso: ["Combustível", "Marinheiro Habilitado", "Som Bluetooth Náutico", "Água Mineral", "Boias Espaguete"],
    destaque: false,
    imagemUrl: "/img/Camera/Camera%20-%20Curdos%20Lancha%20(1).jpg",
  },
  {
    id: "costa-da-lagoa",
    slug: "costa-da-lagoa-gastronomico",
    titulo: "Costa da Lagoa Gastronômico",
    descricao: "Navegação calma pelas águas da Lagoa da Conceição com parada para frutos do mar nos restaurantes tradicionais.",
    duracaoHoras: 4,
    capacidadeMax: 9,
    valorBase: 1900,
    localEmbarque: "Centrinho da Lagoa da Conceição",
    roteiro: ["Lagoa da Conceição", "Cachoeira da Costa", "Restaurantes Nativos", "Paradas para Banho"],
    incluso: ["Combustível", "Marinheiro Habilitado", "Cooler Náutico", "Churrasqueira a Bordo (Opcional)"],
    destaque: false,
    imagemUrl: "/img/Camera/Camera%20-%20Curdos%20Lancha%20(12).jpg",
  },
  {
    id: "tingua-caixa-daco",
    slug: "tingua-caixa-daco",
    titulo: "Tinguá & Caixa d'Aço Sunset",
    descricao: "O destino mais cobiçado da navegação de lazer, com bares flutuantes e pôr do sol inesquecível.",
    duracaoHoras: 7,
    capacidadeMax: 9,
    valorBase: 3400,
    localEmbarque: "Trapiche Jurerê / Canasvieiras",
    roteiro: ["Baía de Jurerê", "Ilha do Francês", "Praia do Tinguá", "Caixa d'Aço"],
    incluso: ["Combustível", "Marinheiro Habilitado", "Gelo Filtrado", "Churrasqueira Carvão", "Som Alta Potência"],
    destaque: true,
    imagemUrl: "/img/Drone/Drone%20-%20Curdos%20Lancha%20(15).JPG",
  },
];
