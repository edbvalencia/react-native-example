from lxml import html

from trend.scraper.constants import COOKIES, HEADERS
from trend.trend_model import TrendHero
from util.requester import make_request

URL_TRENDS = "https://es.dotabuff.com/heroes/trends"


def get_trending_heroes() -> TrendHero:
    response = make_request(URL_TRENDS, cookies=COOKIES, headers=HEADERS)
    return parse_to_trendhero(response)


def parse_to_trendhero(response):
    root = html.fromstring(response.content)
    heroes_rows = root.xpath("//table//tbody//tr")
    heroes_rows = heroes_rows[:10]
    heores = []

    for hero in heroes_rows:
        td_elements = hero.xpath(".//td[position() <= 4]")
        name = td_elements[0].xpath('.//a[@class="link-type-hero"]/text()')[0].strip()
        image = td_elements[0].xpath(".//img/@src")[0]
        initial_value = td_elements[1].xpath("./span/text()")[0].strip()
        current_value = td_elements[2].xpath("./span/text()")[0].strip()
        change = td_elements[3].xpath("./span/text()")[0].strip()
        link_list = hero.xpath('.//a[@class="link-type-hero"]/@href')

        if not link_list:
            continue

        hero_link = f"https://es.dotabuff.com{link_list[0]}"
        heores.append(
            TrendHero(
                name=name,
                image=image,
                link=hero_link,
                winrate_init=initial_value,
                winrate_current=current_value,
                winrate_difference=change,
            )
        )

    return heores
