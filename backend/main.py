from fastapi import FastAPI

from app.database.database import Base, engine
from app.routes.student import router as student_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="College Chatbot API",
    version="1.0.0"
)

app.include_router(student_router)


@app.get("/")
def home():
    return {
        "message": "College Chatbot API Running"
    }