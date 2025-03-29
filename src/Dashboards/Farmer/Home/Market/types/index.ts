export interface Crop {
  id: string;
  name: string;
  imageUrl: string;
  location: string;
  quantity: number;
  pricePerQuintal: number;
  lastUpdated: string;
  priceTrend: 'up' | 'down' | 'stable';
  trendPercentage: number;
  type: string;
}

export interface Filter {
  search: string;
  location: string;
  cropType: string;
  sortBy: string;
}

export interface MarketInsight {
  cropId: string;
  lastWeekPrice: number;
  lastMonthPrice: number;
  minPrice: number;
  maxPrice: number;
  bestTimeToSell: string;
}