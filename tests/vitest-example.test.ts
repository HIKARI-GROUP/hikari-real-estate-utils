import { describe, it, expect } from 'vitest';

function grossRentalYield(monthlyRent: number, price: number): number {
  if (price <= 0) throw new Error('Price must be positive');
  return Number(((monthlyRent * 12 / price) * 100).toFixed(2));
}

describe('grossRentalYield', () => {
  it('calculates yield correctly', () => {
    expect(grossRentalYield(1200, 200000)).toBe(7.2);
  });
  it('handles zero rent', () => {
    expect(grossRentalYield(0, 200000)).toBe(0);
  });
  it('throws on zero price', () => {
    expect(() => grossRentalYield(1200, 0)).toThrow('Price must be positive');
  });
});
