const isProduction = process.env.NODE_ENV === "production";

export const CONSTANTS = {
  baseUrl: "https://cordova.me",
  name: "Óscar Córdova",
  description: "Product Engineer",
  ogImage: "/api/og",
  isProduction: isProduction,
  plausibleDomain: process.env.PLAUSIBLE_DATA_DOMAIN,
};
