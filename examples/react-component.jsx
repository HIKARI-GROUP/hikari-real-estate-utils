import React from 'react';

/**
 * HIKARI StatCard — a reusable statistics card.
 * Uses design tokens from the HIKARI design system.
 */
export default function StatCard({ label, value, color = '#60a5fa', icon: Icon }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
      <div className="flex items-center justify-between mb-1">
        <p className="font-mono text-[8px] uppercase tracking-widest text-white/30">{label}</p>
        {Icon && <Icon className="w-3 h-3 text-white/15" />}
      </div>
      <p className="font-mono text-xl font-bold" style={{ color }}>{value}</p>
    </div>
  );
}

// Usage:
// <StatCard label="Rentabilité" value="7.2%" color="#34d399" icon={TrendingUp} />
