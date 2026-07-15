import time
from functools import wraps


def ttl_cache(ttl_seconds):
    def decorator(func):
        store = {}

        @wraps(func)
        def wrapper(*args, **kwargs):
            key = (args, tuple(sorted(kwargs.items())))
            now = time.time()

            if key in store:
                cached_time, value = store[key]
                if now - cached_time < ttl_seconds:
                    return value

            value = func(*args, **kwargs)
            store[key] = (now, value)
            return value

        return wrapper
    return decorator
