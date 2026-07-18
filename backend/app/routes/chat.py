from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)

class ChatRequest(BaseModel):
    message: str


@router.post("/")
def chat(request: ChatRequest):

    question = request.message.lower()

    if "faculty" in question:
        reply = "Faculty information will be retrieved from the knowledge base."

    elif "placement" in question:
        reply = "Placement statistics will be shown here."

    elif "syllabus" in question:
        reply = "Semester syllabus will be retrieved."

    else:
        reply = f"You asked: {request.message}"

    return {
        "response": reply
    }