from job.ia import sintetizador
from job.job_model import Job
from job.scraper import job_scraper


def generate_job_conclusion(url: str) -> str:
    job: Job = job_scraper.get_job(url)
    return sintetizador.evaluate_job(job.position, job.description)
