

function App() {
  return (
    <div className="min-h-screen bg-terminal-dark p-8">
      <h1 className="text-3xl font-bold text-positive mb-6">
        BLOOMBERG TERMINAL v4
      </h1>
      <div className="bg-terminal-card border border-terminal-border rounded-lg p-4 max-w-md">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold">AAPL</h2>
            <p className="text-gray-400 text-sm">Apple Inc.</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">$187.70</p>
            <p className="text-positive">+1.33%</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App
