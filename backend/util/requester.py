import requests

TIMEOUT = 3


def make_request(url: str, cookies: dict, headers: dict):
    try:
        response = requests.get(url, cookies=cookies, headers=headers, timeout=TIMEOUT)
        response.raise_for_status()
        response.encoding = "utf-8"
        return response
    except requests.exceptions.RequestException as e:
        print(f"Error making request to {url}: {e}")
        return None
