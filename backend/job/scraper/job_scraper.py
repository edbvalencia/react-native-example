import json
import re

from lxml import html

from job.job_model import Job
from job.scraper.constants import COOKIES, HEADERS, REGEX_POST_EMPLEO
from util.requester import make_request


def get_job(url: str):
    job_id = get_job_id(url)
    url_job = f"https://www.linkedin.com/jobs/view/{job_id}/"
    response = make_request(url_job, cookies=COOKIES, headers=HEADERS)
    root = html.fromstring(response.text)
    contenido_empleo = root.xpath(REGEX_POST_EMPLEO)[0].text_content()
    empleo_json = json.loads(contenido_empleo)
    job = parse_json_to_job(empleo_json)
    return job


def parse_json_to_job(response) -> Job:
    response_data = response["data"]
    position = response_data.get("title", "")
    is_remote = response_data.get("workRemoteAllowed", False)
    location = response_data.get("formattedLocation", "")
    description = response_data.get("description", {}).get("text", "")
    company = response.get("included", [])[1].get("name", "")

    return Job(
        position=position,
        is_remote=is_remote,
        company=company,
        location=location,
        description=description,
    )


def get_job_id(url: str):
    match = re.search(r"\d+", url)
    if match:
        return match.group()
    return None


# "https://www.linkedin.com/jobs/view/3740414750/"
