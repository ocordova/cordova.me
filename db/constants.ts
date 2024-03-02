const isProduction = process.env.NODE_ENV === "production";

export const CONSTANTS = {
  baseUrl: "https://cordova.me",
  name: "Óscar Córdova",
  description: "Product Manager",
  ogImage: "/static/og-image.jpg",
  isProduction: isProduction,
};