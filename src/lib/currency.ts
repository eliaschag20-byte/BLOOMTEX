export type Currency = 'PYG' | 'USD';

export const EXCHANGE_RATE = 7500; // 1 USD ≈ 7.500 PYG (aproximado para cálculos)

export function formatCurrency(amountUSD: number, currency: Currency): string {
  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amountUSD);
  }
  // PYG
  const amountPYG = Math.round(amountUSD * EXCHANGE_RATE);
  return new Intl.NumberFormat('es-PY', {
    style: 'currency',
    currency: 'PYG',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amountPYG);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('es-PY').format(value);
}
