from pydantic import BaseModel


class StudentCreate(BaseModel):
    full_name: str
    phone_number: str


class StudentResponse(BaseModel):
    id: int
    full_name: str
    phone_number: str

    class Config:
        from_attributes = True