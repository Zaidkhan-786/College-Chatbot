from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "College Chatbot Backend Running"}