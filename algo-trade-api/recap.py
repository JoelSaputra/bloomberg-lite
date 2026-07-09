import os
import json
import re
import requests
from dotenv import load_dotenv
from google import genai


load_dotenv()

FINNHUB_API_KEY = os.environ["FINNHUB_API_KEY"]
FINNHUB_BASE_URL = "https://finnhub.io/api/v1"
gemini_client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

news_cache = []


def clean_json_response(text):
    text = text.strip()
    text = re.sub(r'^```(?:json)?\s*', '', text)
    text = re.sub(r'\s*```$', '', text)
    return text.strip()


def get_recap_news(category="general"):
    try:
        url = f"{FINNHUB_BASE_URL}/news?category={category}&token={FINNHUB_API_KEY}"
        response = requests.get(url)
        return response.json()
    except Exception as e:
        print("Error fetching data", e)
        raise


def filter_articles(articles):
    try:
        if len(articles) <= 0:
            raise Exception("No articles to filter")

        interaction = gemini_client.interactions.create(
            model="gemini-2.5-flash",
            input=(
                f"From all these {articles}, filter to the top 30 important news "
                f"related to the stock market and macroeconomic impact and return "
                f"it in the same JSON format"
            )
        )

        filtered_articles = clean_json_response(interaction.output_text)
        return json.loads(filtered_articles)

    except Exception as e:
        print("Error:", e)
        raise


def summarize_news(filtered_articles):
    try:
        if len(filtered_articles) <= 0:
            raise Exception("No articles to summarize")

        prompt = f"""Here are {len(filtered_articles)} news articles. For EACH article, produce exactly 3 bullet points in this format:

        - What is the summary of the news article
        - Second sentence summary
        - Who or what is most impacted in terms of market relations

        Return your response as a JSON array, one object per article, in this exact shape, and dont forget the url and image of the article:
        [
        {{"headline": "...", "bullets": ["...", "...", "..."], "url": "...."}},
        ...
        ]

        Only return the JSON array, nothing else — no explanation, no markdown code fences.

        Articles:
        {filtered_articles}
        """
        interaction = gemini_client.interactions.create(
            model="gemini-3.1-flash-lite",
            input=prompt
        )

        summarized_articles = clean_json_response(interaction.output_text)
        return json.loads(summarized_articles)

    except Exception as e:
        print("Error", e)
        raise


def refresh_news():
    global news_cache
    try:
        articles = get_recap_news()
        filtered_articles = filter_articles(articles)
        summarized_articles = summarize_news(filtered_articles)

        news_cache = summarized_articles

    except Exception as e:
        print("Failed to refresh news:", e)
        raise


def get_cached_news():
    return news_cache
