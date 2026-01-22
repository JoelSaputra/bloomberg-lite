import mockStocks from './data/MockTestStock';
import StockCard from './components/watchlist/StockCard'; 

function App() {
  
  return (
    <div className="min-h-screen bg-linear-to-b from-[#0b1220] via-[#0a1020] to-black 
    text-slate-200 font-mono px-6 py-6"
  >

      <header className="mb-8 border-b border-white/10 pb-4">
  <div className="flex items-center gap-3">
    <span className="text-blue-400 text-xl font-bold tracking-tight">
      VALUE TERMINAL
    </span>
    <span className="text-xs text-slate-400 mt-1">
      Professional Trading Platform
    </span>
  </div>
</header>

      <main>
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-1">
            Your Watchlist
          </h2>
          <p className="text-sm text-slate-400">
             Monitor your favorite stocks in real-time
          </p>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-[290px]">
          {mockStocks.map((s) => <StockCard key={s.symbol} {...s} />)}
          </div>

        </section>
      </main>



    </div>
  );
}


export default App
