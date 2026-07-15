import yfinance as yf

SYMBOLS = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META"]
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

def get_extra_info():
    global extra_info
    for symbol in SYMBOLS:
        stock_info = {}
        stock = yf.Ticker(symbol)
        stock_name = stock.info.get("longName")
        stock_volume = stock.info.get("volume")
        stock_marketCap = stock.info.get("marketCap")
        stock_PE = stock.info.get("trailingPE")
        stock_dividend = stock.info.get("dividendYield")
        stock_recommendKey = stock.info.get("recommendationKey")
        
        stock_info["id"] = symbol
        stock_info["name"] = stock_name
        stock_info["volume"] = stock_volume
        stock_info["market_cap"] = stock_marketCap
        stock_info["pe"] = stock_PE 
        stock_info["dividend"] = stock_dividend
        stock_info["recommendKey"] = stock_recommendKey

        extra_info[symbol] = stock_info

    return extra_info


    
    


        
        