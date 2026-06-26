from fastapi import FastAPI, HTTPException, Path, status
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf



app = FastAPI()

app.add_middleware(
    CORSMiddleware, 
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
    )
   
            

@app.get("/")
def root(): 
    return {"status": "ok", "message": "algo-trade API is running"}


@app.get("/stock/{symbol}/fundamental/overview")
def get_keyStatistics(symbol:str=Path(min_length=1, max_length=5)):
    try:
        stock = yf.Ticker(symbol)
        info = stock.info

        if not info or "symbol" not in info:
            raise HTTPException(status_code=404, detail="Stock not found")

        return {
            "symbol": symbol,
            "name": info.get("longName"),
            "sector": info.get("sector"),
            "marketCap": info.get("marketCap"),
            "pe": info.get("trailingPE"),
            "pb": info.get("priceToBook"),
            "roe": info.get("returnOnEquity"),
            "divYield": info.get("dividendYield"),
            "eps": info.get("trailingEps"),
            "revenue": info.get("totalRevenue"),
            "netIncome": info.get("netIncomeToCommon"),
            "debtToEquity": info.get("debtToEquity"),
            "currentRatio": info.get("currentRatio"),

        }

    except HTTPException:
        raise

    except Exception as e:
         raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}") 


    




