import yfinance as yf

SYMBOLS = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META"]
price_cache = {}


def message_handler(message):
    print("Received message:", message)


with yf.WebSocket() as ws:
    ws.subscribe(SYMBOLS)
    ws.listen(message_handler)


