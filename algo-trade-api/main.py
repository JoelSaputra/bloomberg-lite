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
def get_income_statement(symbol: str = Path(min_length=1)):
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


    
@app.get("/stock/{symbol}/fundamental/balance-sheet")
def get_balance_sheet(symbol: str = Path(min_length=1)):
    try:
        stock = yf.Ticker(symbol)
        balance_sheet = stock.balance_sheet

        balance_sheet_history = []

        for date in balance_sheet.columns:
            year = date.year

            def safe_get(row_name):
                if row_name in balance_sheet.index:
                    value = balance_sheet.loc[row_name, date]
                    if hasattr(value, 'iloc'):
                        value = value.iloc[0]
                    return value
                return None

            total_assets = safe_get("Total Assets")
            total_liabilities = safe_get("Total Liabilities Net Minority Interest")
            equity = safe_get("Common Stock Equity")
            cash = safe_get("Cash And Cash Equivalents")

            balance_sheet_history.append({
                "period": f"FY{year}",
                "totalAssets": round(total_assets / 1e9, 1) if total_assets is not None and not pd.isna(total_assets) else None,
                "totalLiabilities": round(total_liabilities / 1e9, 1) if total_liabilities is not None and not pd.isna(total_liabilities) else None,
                "equity": round(equity / 1e9, 1) if equity is not None and not pd.isna(equity) else None,
                "cash": round(cash / 1e9, 1) if cash is not None and not pd.isna(cash) else None,
            })

        return {"balance_sheet": balance_sheet_history}

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")


@app.get("/stock/{symbol}/fundamental/cash-flow")
def get_cash_flow(symbol: str = Path(min_length=1)):
    try:
        stock = yf.Ticker(symbol)
        cashflow = stock.cashflow

        cash_flow_history = []

        for date in cashflow.columns:
            year = date.year

            def safe_get(row_name):
                if row_name in cashflow.index:
                    value = cashflow.loc[row_name, date]
                    if hasattr(value, 'iloc'):
                        value = value.iloc[0]
                    return value
                return None

            operating_cf = safe_get("Operating Cash Flow")
            investing_cf = safe_get("Investing Cash Flow")
            financing_cf = safe_get("Financing Cash Flow")
            free_cf = safe_get("Free Cash Flow")

            cash_flow_history.append({
                "period": f"FY{year}",
                "operatingCF": round(operating_cf / 1e9, 1) if operating_cf is not None and not pd.isna(operating_cf) else None,
                "investingCF": round(investing_cf / 1e9, 1) if investing_cf is not None and not pd.isna(investing_cf) else None,
                "financingCF": round(financing_cf / 1e9, 1) if financing_cf is not None and not pd.isna(financing_cf) else None,
                "freeCF": round(free_cf / 1e9, 1) if free_cf is not None and not pd.isna(free_cf) else None,
            })

        return {"cash_flow": cash_flow_history}

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")



@app.get("/stock/market-trend/top-gainers")
def get_top_gainers():
    try:

        data = yf.screen("day_gainers")
        quotes = data.get("quotes", [])
        top_gainers = []

        for q in quotes:
            top_gainers.append({
                "symbol": q.get("symbol"),
                "name": q.get("shortName"),
                "region": q.get("region"),
                "price": q.get("regularMarketPrice"),
                "change": round(q.get("regularMarketChange", 0), 2),
                "changePct": round(q.get("regularMarketChangePercent", 0), 2),
                "volume": q.get("regularMarketVolume"),
                "marketCap": q.get("marketCap"),
                "averageAnalystRating": q.get("averageAnalystRating") if q.get("averageAnalystRating") is not None else "N/A",
                
            })

        return {"data": top_gainers}

    except HTTPException:
        raise
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")


@app.get("/stock/market-trend/top-losers")
def get_top_losers():
    try:
        data = yf.screen("day_losers")
        quotes = data.get("quotes", [])
        top_losers = []

        for q in quotes:
            top_losers.append({
                "symbol": q.get("symbol"),
                "name": q.get("shortName"),
                "region": q.get("region"),
                "price": q.get("regularMarketPrice"),
                "change": round(q.get("regularMarketChange", 0), 2),
                "changePct": round(q.get("regularMarketChangePercent", 0), 2),
                "volume": q.get("regularMarketVolume"),
                "marketCap": q.get("marketCap"),
                "averageAnalystRating": q.get("averageAnalystRating") if q.get("averageAnalystRating") is not None else "N/A",
            })

        return {"data": top_losers}

    except HTTPException:
        raise
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")
    

@app.get("/stock/market-trend/most-active")
def get_most_active():
    try:
        data = yf.screen("most_actives")
        quotes = data.get("quotes", [])
        most_active = []

        for q in quotes:
            most_active.append({
                "symbol": q.get("symbol"),
                "name": q.get("shortName"),
                "region": q.get("region"),
                "price": q.get("regularMarketPrice"),
                "change": round(q.get("regularMarketChange", 0), 2),
                "changePct": round(q.get("regularMarketChangePercent", 0), 2),
                "volume": q.get("regularMarketVolume"),
                "marketCap": q.get("marketCap"),
                "averageAnalystRating": q.get("averageAnalystRating") if q.get("averageAnalystRating") is not None else "N/A",
            })

        return {"data": most_active}

    except HTTPException:
        raise
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")
    

@app.get("/stock/market-trend/undervalued-large-caps")
def get_52w_high():
    try:
        data = yf.screen("undervalued_large_caps")
        quotes = data.get("quotes", [])
        high_52w = []

        for q in quotes:
            high_52w.append({
                "symbol": q.get("symbol"),
                "name": q.get("shortName"),
                "region": q.get("region"),
                "price": q.get("regularMarketPrice"),
                "change": round(q.get("regularMarketChange", 0), 2),
                "changePct": round(q.get("regularMarketChangePercent", 0), 2),
                "volume": q.get("regularMarketVolume"),
                "marketCap": q.get("marketCap"),
                "averageAnalystRating": q.get("averageAnalystRating") if q.get("averageAnalystRating") is not None else "N/A",
            })

        return {"data": high_52w}

    except HTTPException:
        raise
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")
    


@app.get("/stock/market-trend/undervalued-growth-stocks")
def get_undervalued_growth_stocks():
    try:
        data = yf.screen("undervalued_growth_stocks")
        quotes = data.get("quotes", [])
        undervalued_growth_stocks = []

        for q in quotes:
            undervalued_growth_stocks.append({
                "symbol": q.get("symbol"),
                "name": q.get("shortName"),
                "region": q.get("region"),
                "price": q.get("regularMarketPrice"),
                "change": round(q.get("regularMarketChange", 0), 2),
                "changePct": round(q.get("regularMarketChangePercent", 0), 2),
                "volume": q.get("regularMarketVolume"),
                "marketCap": q.get("marketCap"),
                "averageAnalystRating": q.get("averageAnalystRating") if q.get("averageAnalystRating") is not None else "N/A",
            })

        return {"data": undervalued_growth_stocks}

    except HTTPException:
        raise
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")
    

SECTOR_ETFS = {
    "Technology": "XLK",
    "Communication": "XLC",
    "Consumer Disc.": "XLY",
    "Consumer Staples": "XLP",
    "Financials": "XLF",
    "Healthcare": "XLV",
    "Industrials": "XLI",
    "Energy": "XLE",
    "Utilities": "XLU",
    "Real Estate": "XLRE",
    "Materials": "XLB",
}

@app.get("/stock/market-trend/sector-performance")
def get_sector_performance():
    try:
        result = []
        for sector, ticker in SECTOR_ETFS.items():
            stock = yf.Ticker(ticker)
            info = stock.info
            result.append({
                "sector": sector,
                "ticker": ticker,
                "changePct": round(info.get("regularMarketChangePercent", 0), 2),
                "ytdReturn": round((info.get("ytdReturn") or 0), 2),
                "volume": info.get("regularMarketVolume"),
                "marketCap": info.get("totalAssets"),
                "top_holdings": [
                    {"symbol": sym, "name": row["Name"], "weight": round(row["Holding Percent"] * 100, 2)}
                    for sym, row in stock.funds_data.top_holdings.iterrows()
                ]
            })
        return {"sectors": result}

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")
