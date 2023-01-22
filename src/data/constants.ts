const isProduction = process.env.NODE_ENV === 'production'

export const Constants = {
  baseUrl: 'https://ocordova.me',
  name: 'Óscar Córdova',
  description: 'Product Manager',
  ogImage: 'https://ocordova.me/static/og-image.jpg',
  isProduction: isProduction,
}
