import yfinance as yf

SYMBOLS = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META"]
symbols_info = {}


def message_handler(message):
    print("Received message:", message)
    symbols_info[message['id']] = message

def price_stream():
    with yf.WebSocket() as ws:
        ws.subscribe(SYMBOLS)
        ws.listen(message_handler)
