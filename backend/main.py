from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# Database
from app.database.database import engine
from app.models.student import Base

# Routes
from app.routes.student import router as student_router
from app.routes.chat import router as chat_router

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="College Chatbot API"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routes
app.include_router(student_router)
app.include_router(chat_router)



@app.get("/")
def root():
    return {
        "message": "College Chatbot Backend Running 🚀"
    }