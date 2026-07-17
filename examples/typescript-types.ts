// HIKARI real estate property types

export interface Property {
  id: string;
  title: string;
  price: number;
  surface: number;
  city: string;
  rooms: number;
  bedrooms: number;
  dpe: EnergyLabel;
  ges: EnergyLabel;
  elevator: boolean;
  floor?: number;
  charges?: number;
  description?: string;
}

export type EnergyLabel = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export interface AnalysisResult {
  score: number;
  rating: 'Excellent' | 'Bon' | 'Moyen' | 'Risque';
  maxPrice: number;
  yield: number;
  cashFlow: number;
  recommendation: string;
}

export interface DvfSale {
  price: number;
  surface: number;
  date: string;
  type: string;
  city: string;
}
