from pydantic import BaseModel


class Job(BaseModel):
    position: str
    is_remote: bool
    company: str
    location: str
    description: str
