from fastapi import APIRouter, HTTPException, status

from job import job_service

router = APIRouter(
    prefix="/jobs",
    tags=["Jobs"],
    responses={404: {"detail": "No encontrado"}},
)

ERROR_GENERATING_CONCLUSION_MESSAGE = (
    "Error al intentar generar una conclusión para este empleo."
)


@router.post("", status_code=status.HTTP_200_OK, response_model=str)
async def generate_job_conclusion(job_url: str):
    try:
        return job_service.generate_job_conclusion(job_url)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=ERROR_GENERATING_CONCLUSION_MESSAGE,
        ) from e
