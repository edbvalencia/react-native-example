from pydantic import BaseModel


class TrendHero(BaseModel):
    name: str
    link: str
    image: str
    winrate_init: str
    winrate_current: str
    winrate_difference: str
