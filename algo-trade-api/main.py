from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf

app = FastAPI()

# allow your Next.js frontend to talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/stock/{symbol}")
def get_stock(symbol: str):
    stock = yf.Ticker(symbol)
    info = stock.info
    return {
        "symbol": symbol,
        "name": info.get("longName"),
        "price": info.get("currentPrice"),
        "change": info.get("regularMarketChange"),
        "volume": info.get("volume"),
        "cap": info.get("marketCap"),
        "pe": info.get("trailingPE"),
        "beta": info.get("beta"),
        "divYield": info.get("dividendYield"),
    }