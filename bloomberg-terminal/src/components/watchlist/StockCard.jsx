function Sparkline({ data, positive }) {
  const w = 520;
  const h = 70;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");

  const stroke = positive ? "#22c55e" : "#ef4444";

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full">
      
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>

      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
      />

      <polygon
        points={`${points} ${w},${h} 0,${h}`}
        fill="url(#fade)"
      />
    </svg>
  );
}

export default function StockCard({ symbol, name, price, changePercent, volume }) {
  const isPositive = changePercent >= 0;

  return (
    <div className="stock-card">
      <div
        className={`absolute right-3 top-3 inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold
        ${isPositive ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"}`}
      >
        <span>{isPositive ? "↗" : "↘"}</span>
        {isPositive ? "+" : "-"}
        {Math.abs(changePercent).toFixed(2)}%
      </div>


      <div className="flex h-full flex-col">

        <div className="pr-20">
          <div className="text-lg font-bold text-white">{symbol}</div>
          <div className="text-sm text-slate-400">{name}</div>
          <div className="mt-1 text-3xl font-bold text-white">
            ${Number(price).toFixed(2)}
          </div>
        </div>


        <div className="mt-2 flex-1">
          <Sparkline
            positive={isPositive}
            data={[10, 10.3, 10.1, 10.6, 10.45, 10.7, 10.65, 10.8, 10.75, 10.9]}
          />
        </div>

 
        <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2 text-xs">
          <span className="text-slate-400">Volume</span>
          <span className="font-mono text-slate-200">{volume}</span>
        </div>
      </div>
    </div>
  );
}
