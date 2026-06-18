/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PERFORMANCE_DATA = {
  client: "Confiauto Proteção Veicular",
  period: "19/05/2026 - 25/05/2026",
  campaign1: {
    name: "Campanha Original (Performance)",
    totalInvestment: 16446.52,
    totalLeads: 174,
    avgCpl: 94.52,
    ads: [
      { name: "Seu veículo está protegido?", leads: 429, spent: 5142.06, cpl: 11.99 },
      { name: "Barato Sai Caro", leads: 4, spent: 51.22, cpl: 12.81 },
      { name: "Equipe Preparada", leads: 0, spent: 50.54, cpl: 0 }
    ]
  },
  campaign2: {
    name: "Campanha Estáticos (Novos)",
    week1: {
      totalInvestment: 1540.35,
      totalLeads: 20,
      avgCpl: 77.02
    },
    week2: {
      totalInvestment: 3411.65,
      totalLeads: 51,
      avgCpl: 66.90
    },
    week3: {
      totalInvestment: 3538.36,
      totalLeads: 56,
      avgCpl: 63.19
    },
    combined: {
      totalInvestment: 8490.36,
      totalLeads: 127,
      avgCpl: 66.85
    },
    championCreative: {
      name: "ADS01 - 99,00 mensais.",
      leads: 104,
      cpl: 66.34,
      spent: 6899.36,
      percentageOfLeads: "81.9%",
      coverages: [
        "Colisão",
        "Roubo e Furto",
        "Carro Reserva",
        "Assistência 24h",
        "Rastreamento"
      ]
    },
    ads: [
      { name: "ADS01 - 99,00 mensais.", leads: 52, spent: 3421.55, cpl: 65.80 },
      { name: "ADS04 - PROTEÇÃO VEICULAR", leads: 2, spent: 52.81, cpl: 26.41 },
      { name: "ADS02 - Planos com adesão facilitada!", leads: 2, spent: 48.11, cpl: 24.06 },
      { name: "ADS05 - RASTREAMENTO", leads: 0, spent: 14.49, cpl: 0 },
      { name: "ADS03 - IMPREVISTO NA ESTRADA?", leads: 0, spent: 1.02, cpl: 0 }
    ]
  },
  crmLpTest: {
    name: "Teste LP do CRM",
    previousWeek: {
      totalInvestment: 5243.82,
      totalLeads: 433,
      avgCpl: 12.11
    },
    currentWeek: {
      totalInvestment: 3383.32,
      totalLeads: 252,
      avgCpl: 13.43
    },
    combined: {
      totalInvestment: 8627.14,
      totalLeads: 685,
      avgCpl: 12.59
    }
  },
  awarenessCampaign: {
    name: "Campanha de Reconhecimento",
    week1: {
      period: "Sem. Inicial (05-11/05)",
      totalInvestment: 980.50,
      reach: 385412,
      cpm: 2.54
    },
    week2: {
      period: "Sem. Anterior (12-18/05)",
      totalInvestment: 1115.30,
      reach: 453393,
      cpm: 2.46
    },
    week3: {
      period: "Sem. Atual (19-25/05)",
      totalInvestment: 1119.78,
      reach: 434492,
      cpm: 2.58
    },
    combined: {
      totalInvestment: 3215.58,
      reach: 1273297,
      cpm: 2.525
    }
  },
  trafficToProfile: {
    name: "Tráfego para Perfil",
    week1: {
      period: "Sem. Inicial (05-11/05)",
      totalInvestment: 690.50,
      visits: 1250,
      cpv: 0.55
    },
    week2: {
      period: "Sem. Anterior (12-18/05)",
      totalInvestment: 752.30,
      visits: 1665,
      cpv: 0.45
    },
    week3: {
      period: "Sem. Atual (19-25/05)",
      totalInvestment: 750.88,
      visits: 2145,
      cpv: 0.35
    },
    combined: {
      totalInvestment: 2193.68,
      visits: 5060,
      cpv: 0.4335
    }
  },
  hiringCampaign: {
    name: "Campanha de Contratação",
    week1: {
      period: "Sem. Inicial (05-11/05)",
      totalInvestment: 955.30,
      leads: 254,
      cpl: 3.76
    },
    week2: {
      period: "Sem. Anterior (12-18/05)",
      totalInvestment: 1082.75,
      leads: 295,
      cpl: 3.67
    },
    week3: {
      period: "Sem. Atual (19-25/05)",
      totalInvestment: 1195.81,
      leads: 343,
      cpl: 3.49
    },
    combined: {
      totalInvestment: 3233.86,
      leads: 892,
      cpl: 3.6254
    }
  },
  weeklyInvestment: [
    { period: "01 a 04 de Maio", amount: 9888.33 },
    { period: "05 a 11 de Maio", amount: 27644.41 },
    { period: "12 a 18 de Maio", amount: 28631.05 },
    { period: "19 a 25 de Maio", amount: 21513.74 }
  ],
  weeklyInvestmentTotal: 87677.53,
  comparisonOriginal: {
    week1: {
      period: "Sem. Inicial (05-11/05)",
      totalInvestment: 19945.22,
      totalLeads: 165,
      avgCpl: 120.88
    },
    week2: {
      period: "Sem. Anterior (12-18/05)",
      totalInvestment: 16446.52,
      totalLeads: 174,
      avgCpl: 94.52
    },
    week3: {
      period: "Sem. Atual (19-25/05)",
      totalInvestment: 11525.59,
      totalLeads: 172,
      avgCpl: 67.01
    },
    combined: {
      totalInvestment: 47917.33,
      totalLeads: 511,
      avgCpl: 93.77
    },
    adSets: [
      { name: "[ADV] [ABERTO] [H/M] [20/45] [ES] ESTÁTICOS ...", status: "Ativo", spent: 3537.98, leads: 56, cpl: 63.18 },
      { name: "[ADV] [ABERTO] [H/M] [20/45] [ES]", status: "Ativo", spent: 4686.26, leads: 70, cpl: 66.95 },
      { name: "[ADV] [ENV.90D+SITE90D+VV50%] [H/M] [20/4...", status: "Em aprendizado", spent: 1777.44, leads: 30, cpl: 59.25 },
      { name: "[ADV] [MIX] [H/M] [20/45] [ES]", status: "Ativo", spent: 139.80, leads: 1, cpl: 139.80 },
      { name: "[ADV] [ENV.90D+SITE90D+VV50%] [H/M] [20/4...", status: "Em aprendizado", spent: 1383.44, leads: 15, cpl: 92.23 }
    ]
  },
  comparisonEstaticos: {
    week1: {
      totalInvestment: 1540.35,
      totalLeads: 20,
      avgCpl: 77.02
    },
    week2: {
      totalInvestment: 3411.65,
      totalLeads: 51,
      avgCpl: 66.90
    },
    week3: {
      totalInvestment: 3538.36,
      totalLeads: 56,
      avgCpl: 63.19
    },
    combined: {
      totalInvestment: 8490.36,
      totalLeads: 127,
      avgCpl: 66.85
    }
  }
};
