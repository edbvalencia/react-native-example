from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from job import job_router
from trend import trend_router
from user import user_router

PREFIJO_API: str = "/api"
VERSION_API: str = "/v1"
PREFIJO: str = PREFIJO_API + VERSION_API


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("init")
    yield
    print("finish")


app = FastAPI(lifespan=lifespan)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get(PREFIJO)
async def welcome():
    return {"message": "test de inicio"}


app.include_router(user_router.router, prefix=PREFIJO)
app.include_router(trend_router.router, prefix=PREFIJO)
app.include_router(job_router.router, prefix=PREFIJO)
