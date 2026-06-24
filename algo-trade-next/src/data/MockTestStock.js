// src/data/mockStocks.js

const mockStocks = [
  // === TECHNOLOGY ===
  { symbol: "AAPL", name: "Apple Inc.", sector: "Technology", action: "HOLD", price: 189.25, change: +1.24, change7d: [182, 184, 181, 186, 188, 187, 189], pe: 28.5, pb: 39.2, de: 1.73, roe: 147.25, eps: 6.42, divYield: 0.52, cap: "$2.8T", beta: 1.28, volume: "52.3M" },
  { symbol: "MSFT", name: "Microsoft Corporation", sector: "Technology", action: "BUY", price: 415.50, change: +2.87, change7d: [401, 407, 404, 410, 408, 413, 415], pe: 34.8, pb: 11.5, de: 0.42, roe: 38.6, eps: 11.86, divYield: 0.78, cap: "$3.1T", beta: 0.91, volume: "24.1M" },
  { symbol: "NVDA", name: "NVIDIA Corporation", sector: "Semiconductors", action: "HOLD", price: 875.40, change: -3.21, change7d: [890, 882, 878, 871, 868, 872, 875], pe: 55.4, pb: 28.9, de: 0.35, roe: 48.1, eps: 12.35, divYield: 0.03, cap: "$3.4T", beta: 1.45, volume: "38.2M" },
  { symbol: "AMD", name: "Advanced Micro Devices", sector: "Semiconductors", action: "BUY", price: 142.80, change: +0.95, change7d: [138, 139, 137, 140, 141, 142, 142], pe: 42.7, pb: 4.2, de: 0.03, roe: 3.8, eps: 3.48, divYield: 0.00, cap: "$240B", beta: 1.62, volume: "46.8M" },
  { symbol: "CRM", name: "Salesforce, Inc.", sector: "Technology", action: "HOLD", price: 272.60, change: -1.45, change7d: [278, 276, 274, 275, 273, 271, 272], pe: 48.2, pb: 4.8, de: 0.23, roe: 8.4, eps: 5.67, divYield: 0.00, cap: "$275B", beta: 1.22, volume: "7.1M" },
  { symbol: "ORCL", name: "Oracle Corporation", sector: "Technology", action: "BUY", price: 168.90, change: +3.10, change7d: [160, 162, 163, 165, 166, 167, 168], pe: 32.4, pb: 6.2, de: 2.15, roe: 42.5, eps: 5.28, divYield: 1.15, cap: "$420B", beta: 1.08, volume: "12.3M" },

  // === COMMUNICATION SERVICES ===
  { symbol: "GOOGL", name: "Alphabet Inc.", sector: "Communication Services", action: "BUY", price: 168.30, change: +0.78, change7d: [164, 165, 166, 165, 167, 168, 168], pe: 22.4, pb: 6.8, de: 0.11, roe: 29.8, eps: 7.52, divYield: 0.00, cap: "$2.1T", beta: 1.05, volume: "18.7M" },
  { symbol: "META", name: "Meta Platforms, Inc.", sector: "Communication Services", action: "BUY", price: 432.10, change: +4.52, change7d: [418, 421, 424, 426, 428, 430, 432], pe: 25.6, pb: 5.3, de: 0.24, roe: 24.5, eps: 16.89, divYield: 0.00, cap: "$1.5T", beta: 1.29, volume: "22.1M" },
  { symbol: "NFLX", name: "Netflix, Inc.", sector: "Communication Services", action: "HOLD", price: 628.75, change: -2.30, change7d: [635, 633, 630, 629, 631, 628, 628], pe: 42.1, pb: 8.2, de: 0.35, roe: 21.8, eps: 14.52, divYield: 0.00, cap: "$290B", beta: 1.08, volume: "4.8M" },

  // === E-COMMERCE & CONSUMER CYCLICAL ===
  { symbol: "AMZN", name: "Amazon.com, Inc.", sector: "E-Commerce", action: "HOLD", price: 174.50, change: +1.05, change7d: [170, 171, 172, 171, 173, 174, 174], pe: 42.3, pb: 8.7, de: 0.54, roe: 18.9, eps: 4.12, divYield: 0.00, cap: "$2.2T", beta: 1.15, volume: "45.6M" },
  { symbol: "TSLA", name: "Tesla, Inc.", sector: "Automotive", action: "SELL", price: 277.80, change: -5.60, change7d: [295, 290, 287, 283, 280, 279, 277], pe: 68.2, pb: 12.3, de: 0.08, roe: 22.4, eps: 4.07, divYield: 0.00, cap: "$1.1T", beta: 2.31, volume: "98.4M" },
  { symbol: "HD", name: "The Home Depot, Inc.", sector: "Retail", action: "BUY", price: 389.20, change: +2.15, change7d: [381, 383, 384, 385, 386, 388, 389], pe: 24.6, pb: 28.3, de: 1.58, roe: 48.7, eps: 15.82, divYield: 2.42, cap: "$380B", beta: 1.04, volume: "4.2M" },
  { symbol: "MCD", name: "McDonald's Corporation", sector: "Restaurants", action: "HOLD", price: 295.40, change: -0.85, change7d: [297, 296, 296, 295, 294, 295, 295], pe: 26.8, pb: 38.1, de: 1.21, roe: 48.5, eps: 11.78, divYield: 2.18, cap: "$215B", beta: 0.72, volume: "3.1M" },

  // === FINANCIAL SERVICES ===
  { symbol: "JPM", name: "JPMorgan Chase & Co.", sector: "Financial Services", action: "BUY", price: 236.80, change: +1.90, change7d: [229, 231, 232, 233, 234, 236, 236], pe: 12.8, pb: 1.9, de: 1.42, roe: 15.3, eps: 18.49, divYield: 2.15, cap: "$682B", beta: 1.12, volume: "8.2M" },
  { symbol: "BAC", name: "Bank of America Corporation", sector: "Financial Services", action: "HOLD", price: 52.90, change: +0.30, change7d: [51, 51, 52, 52, 52, 52, 52], pe: 14.2, pb: 1.1, de: 1.78, roe: 11.8, eps: 3.72, divYield: 2.48, cap: "$310B", beta: 1.38, volume: "14.5M" },
  { symbol: "GS", name: "The Goldman Sachs Group, Inc.", sector: "Financial Services", action: "SELL", price: 530.60, change: -4.20, change7d: [542, 539, 537, 535, 533, 531, 530], pe: 16.7, pb: 1.2, de: 3.08, roe: 9.5, eps: 31.82, divYield: 2.18, cap: "$160B", beta: 1.41, volume: "2.8M" },
  { symbol: "V", name: "Visa Inc.", sector: "Financial Services", action: "BUY", price: 296.40, change: +1.60, change7d: [290, 291, 292, 293, 294, 295, 296], pe: 30.2, pb: 15.8, de: 0.52, roe: 38.7, eps: 9.84, divYield: 0.72, cap: "$590B", beta: 0.98, volume: "7.8M" },

  // === ENERGY ===
  { symbol: "XOM", name: "Exxon Mobil Corporation", sector: "Energy", action: "HOLD", price: 136.90, change: -0.65, change7d: [138, 138, 137, 137, 136, 137, 136], pe: 13.9, pb: 2.4, de: 0.20, roe: 16.8, eps: 9.85, divYield: 3.12, cap: "$420B", beta: 1.05, volume: "21.4M" },
  { symbol: "CVX", name: "Chevron Corporation", sector: "Energy", action: "BUY", price: 181.20, change: +2.40, change7d: [175, 176, 177, 178, 179, 180, 181], pe: 14.8, pb: 1.9, de: 0.16, roe: 15.2, eps: 12.24, divYield: 3.81, cap: "$285B", beta: 1.18, volume: "8.6M" },
  { symbol: "NEE", name: "NextEra Energy, Inc.", sector: "Energy (Renewable)", action: "HOLD", price: 84.30, change: +0.45, change7d: [82, 82, 83, 83, 83, 84, 84], pe: 24.2, pb: 3.1, de: 1.42, roe: 12.8, eps: 3.48, divYield: 2.15, cap: "$145B", beta: 0.58, volume: "3.2M" },

  // === HEALTHCARE ===
  { symbol: "JNJ", name: "Johnson & Johnson", sector: "Healthcare", action: "BUY", price: 205.60, change: +1.20, change7d: [201, 202, 203, 203, 204, 205, 205], pe: 19.5, pb: 5.6, de: 0.43, roe: 24.3, eps: 10.52, divYield: 2.78, cap: "$385B", beta: 0.54, volume: "5.1M" },
  { symbol: "PFE", name: "Pfizer Inc.", sector: "Pharmaceuticals", action: "HOLD", price: 50.40, change: -0.35, change7d: [51, 51, 51, 50, 50, 50, 50], pe: 16.2, pb: 2.8, de: 0.42, roe: 20.5, eps: 3.12, divYield: 4.25, cap: "$168B", beta: 0.65, volume: "12.4M" },
  { symbol: "UNH", name: "UnitedHealth Group", sector: "Healthcare", action: "BUY", price: 558.90, change: +3.75, change7d: [545, 548, 550, 552, 554, 557, 558], pe: 22.8, pb: 6.2, de: 0.58, roe: 28.4, eps: 24.52, divYield: 1.25, cap: "$560B", beta: 0.82, volume: "4.1M" },

  // === INDUSTRIALS ===
  { symbol: "GE", name: "GE Aerospace", sector: "Industrials", action: "HOLD", price: 205.30, change: +0.90, change7d: [202, 202, 203, 203, 204, 205, 205], pe: 28.4, pb: 5.2, de: 0.18, roe: 16.8, eps: 7.24, divYield: 0.85, cap: "$175B", beta: 1.24, volume: "6.8M" },
  { symbol: "CAT", name: "Caterpillar Inc.", sector: "Industrials", action: "BUY", price: 361.40, change: +2.80, change7d: [353, 354, 356, 357, 358, 360, 361], pe: 16.8, pb: 8.4, de: 0.76, roe: 41.2, eps: 21.48, divYield: 1.52, cap: "$165B", beta: 1.08, volume: "3.5M" },

  // === REAL ESTATE ===
  { symbol: "PLD", name: "Prologis, Inc.", sector: "Real Estate (REIT)", action: "HOLD", price: 156.80, change: -1.10, change7d: [159, 158, 158, 157, 157, 156, 156], pe: 32.5, pb: 2.2, de: 0.45, roe: 8.5, eps: 4.82, divYield: 2.85, cap: "$112B", beta: 0.82, volume: "2.1M" },

  // === CONSUMER DEFENSIVE ===
  { symbol: "PG", name: "Procter & Gamble Co.", sector: "Consumer Defensive", action: "BUY", price: 167.20, change: +0.55, change7d: [165, 165, 166, 166, 166, 167, 167], pe: 24.8, pb: 8.2, de: 0.48, roe: 31.6, eps: 6.74, divYield: 2.38, cap: "$385B", beta: 0.48, volume: "5.8M" },
  { symbol: "KO", name: "The Coca-Cola Company", sector: "Consumer Defensive", action: "HOLD", price: 74.30, change: -0.20, change7d: [75, 74, 74, 74, 74, 74, 74], pe: 26.2, pb: 11.8, de: 0.82, roe: 40.2, eps: 2.84, divYield: 2.92, cap: "$275B", beta: 0.61, volume: "9.2M" },
];

export default mockStocks;