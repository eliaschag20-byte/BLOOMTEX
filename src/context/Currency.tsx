import { createContext, useContext, useState, ReactNode } from 'react';

export type Cur = 'PYG' | 'USD';
export const RATE = 6407; // 1 USD ≈ 6.407 PYG (aproximada)

interface Ctx {
  cur: Cur;
  setCur: (c: Cur) => void;
  fmt: (pyg: number) => string;
}

const CurrencyCtx = createContext<Ctx>({ cur: 'PYG', setCur: () => {}, fmt: String });

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [cur, setCur] = useState<Cur>('PYG');
  const fmt = (v: number) =>
    cur === 'PYG'
      ? `₲ ${Math.round(v).toLocaleString('de-DE')}`
      : `US$ ${Math.round(v / RATE).toLocaleString('de-DE')}`;
  return <CurrencyCtx.Provider value={{ cur, setCur, fmt }}>{children}</CurrencyCtx.Provider>;
}

export const useCurrency = () => useContext(CurrencyCtx);
