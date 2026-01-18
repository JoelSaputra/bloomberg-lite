import React from "react";

function Metric({ label, value }) {
  return (
    <div className="flex justify-between gap-6 text-sm">
      <span className="text-slate-500">{label}:</span>
      <span className="text-slate-200 font-semibold">{value}</span>
    </div>
  );
}

export default function StockCard({
  symbol,
  name,
  sector,
  action, // "BUY" | "HOLD" | "SELL"
  pe,
  pb,
  de,
  roe,
  eps,
  divYield,
  cap,
  beta,
  volume,
}) {
  const actionColor =
    action === "BUY"
      ? "text-emerald-400"
      : action === "HOLD"
      ? "text-amber-300"
      : "text-red-400";

  return (
    <div className="mini-terminal-watchlist h-full overflow-hidden flex flex-col">
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-white">{symbol}</h2>
          <p className="text-slate-400 text-sm mt-1">{name}</p>
          <p className="text-slate-500 text-sm mt-6">{sector}</p>
        </div>

        <span className={`text-5xl font-bold ${actionColor}`}>{action}</span>
      </div>

      {/* FUNDAMENTALS */}
      <div className="mt-8">
        <p className="text-xs font-semibold tracking-widest text-slate-500">
          FUNDAMENTALS
        </p>

        <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3">
          <Metric label="P/E" value={pe} />
          <Metric label="ROE" value={`${roe}%`} />
          <Metric label="P/B" value={pb} />
          <Metric label="EPS" value={`$${eps}`} />
          <Metric label="D/E" value={de} />
          <Metric label="Div" value={`${divYield}%`} />
        </div>
      </div>

      {/* VALUE METRICS (pinned to bottom) */}
      <div className="mt-auto pt-10">
        <p className="text-xs font-semibold tracking-widest text-slate-500">
          VALUE METRICS
        </p>

        <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3">
          <Metric label="Cap" value={cap} />
          <Metric label="Beta" value={beta} />
          <Metric label="Vol" value={volume} />
          <div />
        </div>
      </div>
    </div>
  );
}
