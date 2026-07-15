import yfinance as yf
from cache import ttl_cache
import finnhub_client as fh

SYMBOLS = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "SPCX", "INTC", "TSM", "AAL", "UAL", "DELL", "NFLX", "DAL", "JBLU", "UAA", "NKE"]
symbols_info = {}
extra_info = {}


def message_handler(message):
    print("Received message:", message)
    symbols_info[message['id']] = message

def price_stream():
    with yf.WebSocket() as ws:
        ws.subscribe(SYMBOLS)
        ws.listen(message_handler)


def get_symbols_info():
    return symbols_info

@ttl_cache(60)
def get_extra_info():
    global extra_info
    for symbol in SYMBOLS:
        profile = fh.get_profile(symbol)
        metric = fh.get_metric(symbol)
        recommend_key = fh.get_recommendation_label(symbol)

        avg_volume = metric.get("10DayAverageTradingVolume")
        market_cap = profile.get("marketCapitalization")

        stock_info = {
            "id": symbol,
            "name": profile.get("name"),
            "volume": avg_volume * 1_000_000 if avg_volume is not None else None,
            "market_cap": market_cap * 1_000_000 if market_cap is not None else None,
            "pe": metric.get("peBasicExclExtraTTM"),
            "dividend": metric.get("currentDividendYieldTTM"),
            "recommendKey": recommend_key,
        }

        extra_info[symbol] = stock_info

    return extra_info


    
    


        
        