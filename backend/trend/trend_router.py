from typing import List

from fastapi import APIRouter, HTTPException, status

from trend import trend_service
from trend.trend_model import TrendHero

router = APIRouter(
    prefix="/trends",
    tags=["Trends"],
    responses={404: {"detail": "No encontrado"}},
)

HEROES_NOT_FOUND_ERROR_MESSAGE = "Error al intentar encontrar los héroes en tendencia."


@router.get("", status_code=status.HTTP_200_OK, response_model=List[TrendHero])
async def get_trending_heroes():
    try:
        return trend_service.get_trending_heroes()
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=HEROES_NOT_FOUND_ERROR_MESSAGE,
        ) from e
