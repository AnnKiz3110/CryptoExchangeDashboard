// src/types/coin.ts

export interface Asset {
  asset_id: string;
  name: string;
  type_is_crypto: number;
  price_usd?: number;
}

export interface PortfolioItem {
  asset_id: string;
  quantity: number;
  buy_price: number;
}
