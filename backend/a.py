import re


def get_job_id(link):
    match = re.search(r"\d+", link)
    if match:
        return match.group()
    return None


# Ejemplo de uso


url = "https://www.linkedin.com/jobs/search/?currentJobId=3816015775&keywords=desarrollador%20web%20java&origin=BLENDED_SEARCH_RESULT_NAVIGATION_JOB_CARD&originToLandingJobPostings=3816015775"

numero = get_job_id(url)
print(numero)
