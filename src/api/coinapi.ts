// src/api/coinapi.ts
import axios from "axios";

const API_KEY = "YOUR_COINAPI_KEY"; // 👈 Thay bằng API key thực tế
const BASE_URL = "https://rest.coinapi.io/v1";

const coinApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-CoinAPI-Key": API_KEY,
  },
});

// Lấy toàn bộ danh sách assets (crypto + fiat)
export const fetchAssets = async () => {
  const response = await coinApi.get("/assets");
  return response.data;
};
