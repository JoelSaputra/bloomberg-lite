from fastapi import FastAPI, HTTPException, Path, status
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf
import pandas as pd 



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
def get_keyStatistics(symbol:str=Path(min_length=1)):
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



@app.get("/stock/{symbol}/fundamental/overview/pe-history")
def get_pe_history(symbol:str=Path(min_length=1)):
    try:
        stock = yf.Ticker(symbol)
        prices = stock.history(period="5y")
        eps = stock.financials.loc["Diluted EPS"]

        pe_history = []

        for date, eps_value in eps.items():
            if pd.isna(eps_value):
                continue
    
            year = date.year
            year_prices = prices.loc[prices.index.year == year]
            if not year_prices.empty and eps_value and eps_value != 0:
                price = year_prices["Close"].iloc[-1]
                pe = round(price / eps_value , 2)
                pe_history.append({"year": str(year), "pe": pe})

        return { "pe_history": pe_history }
        

    except HTTPException:
        raise 

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")
    


@app.get("/stock/{symbol}/fundamental/income-statement")
def get_income_statement(symbol: str = Path(min_length=1, max_length=5)):
    try:
        stock = yf.Ticker(symbol)
        financials = stock.financials

        income_statement = []

        for date in financials.columns:
            year = date.year

            def safe_get(row_name):
                if row_name in financials.index:
                    value = financials.loc[row_name, date]
                    if hasattr(value, 'iloc'):
                        value = value.iloc[0]
                    return value
                return None

            revenue = safe_get("Total Revenue")
            gross_profit = safe_get("Gross Profit")
            ebit = safe_get("EBIT")
            net_income = safe_get("Net Income")

            income_statement.append({
                "period": f"FY{year}",
                "revenue": round(revenue / 1e9, 1) if revenue is not None and not pd.isna(revenue) else None,
                "grossProfit": round(gross_profit / 1e9, 1) if gross_profit is not None and not pd.isna(gross_profit) else None,
                "ebit": round(ebit / 1e9, 1) if ebit is not None and not pd.isna(ebit) else None,
                "netIncome": round(net_income / 1e9, 1) if net_income is not None and not pd.isna(net_income) else None,
            })

        return { "income_statement": income_statement }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")