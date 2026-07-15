import os
import requests

BASE_URL = "https://finnhub.io/api/v1"


def _get(path, params):
    token = os.environ.get("FINNHUB_API_KEY")
    response = requests.get(f"{BASE_URL}{path}", params={**params, "token": token}, timeout=10)
    response.raise_for_status()
    return response.json()


def get_quote(symbol):
    return _get("/quote", {"symbol": symbol})


def get_profile(symbol):
    return _get("/stock/profile2", {"symbol": symbol})


def get_metric(symbol):
    data = _get("/stock/metric", {"symbol": symbol, "metric": "all"})
    return data.get("metric", {})


def get_recommendation_label(symbol):
    data = _get("/stock/recommendation", {"symbol": symbol})
    if not data:
        return None

    latest = data[0]
    counts = {
        "strongBuy": latest.get("strongBuy", 0),
        "buy": latest.get("buy", 0),
        "hold": latest.get("hold", 0),
        "sell": latest.get("sell", 0),
        "strongSell": latest.get("strongSell", 0),
    }

    if sum(counts.values()) == 0:
        return None

    return max(counts, key=counts.get)
